import React from 'react'
import { ClockCircleFilled, DownCircleFilled, UpCircleFilled } from '@ant-design/icons'

/**
 * @classdesc
 */
export class Elevator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      floor: 10,
      floors: [],
      tasks: [],
      currentFloor: 1,
      destination: 1,
      isMoving: false,
      isOpen: false,
      isStopped: false,
      isWaiting: false,
      isWaitingForPassenger: false,
      isWaitingForElevator: false,
      isWaitingForElevatorToStop: false,
      isWaitingForElevatorToStopForPassenger: false,
      isWaitingForElevatorToStopForPassengerToStop: false,
      isWaitingForElevatorToStopForPassengerToStopToStop: false
    }
  }

  componentDidMount () {
    this.updateElevator()
    this.interval = setInterval(() => {
      this.updateElevator()
    }, 1000)

    // 创建每个楼层的实例
    const floors = []
    for (let i = 1; i <= this.state.floor; i++) {
      floors.push({
        floor: i,
        waitUp: false,
        waitDown: false
      })
    }
    this.setState({ floors })
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  // 楼层上按钮
  onFloorUp = (toFloor) => {
    if (this.state.currentFloor < this.state.floor) {
      // 每隔1秒执行走1层,总共走distance层

      const interval = setInterval(() => {
        if (toFloor >= this.state.currentFloor) {
          this.setState({ currentFloor: this.state.currentFloor + 1 })
        } else {
          clearInterval(interval)
          // 关闭所到楼层的等待状态
        }
      }
      , 1000)

      // this.setState({
      //   currentFloor: this.state.currentFloor + 1
      // })
    }
  }

  // 楼层下按钮
  onFloorDown = (distance) => {
    if (this.state.currentFloor > 1) {
      this.setState({
        currentFloor: this.state.currentFloor - 1
      })
    }
  }

  updateElevator () {
    if (this.state.isMoving) {
      if (this.state.currentFloor === this.state.destination) {
        this.setState({
          isMoving: false,
          isStopped: true
        })
      } else {
        this.setState({
          currentFloor: this.state.currentFloor + 1
        })
      }
    }
  }

  addTask (floor, type) {
    const floors = this.state.floors
    floors[floor][type] = true
    const tasks = this.state.tasks
    tasks.push({ floor, type })

    this.setState({ floors, tasks }, this.onMove)
  }

  // 电梯运行
  onMove = () => {
    // 判断是否有任务
    if (this.state.tasks.length > 0) {
      // 向最近的任务指定的楼层运行
      const task = this.state.tasks[0]
      // 判断是否在目标楼层
      if (this.state.currentFloor !== task.floor) {
        // 距离目标楼层的距离
        const distance = task.floor - this.state.currentFloor
        // 判断是否向上运行
        if (distance > 0) {
          // 向上运行目标距离次
          this.onFloorUp(task.floor)
        } else {
          // 向下运行目标距离次
          this.onFloorDown(task.floor)
        }
      }
    }
  }

  render () {
    const {
      currentFloor,
      destination,
      isMoving,
      isOpen,
      isStopped,
      isWaiting,
      isWaitingForPassenger,
      isWaitingForElevator,
      isWaitingForElevatorToStop,
      isWaitingForElevatorToStopForPassenger,
      isWaitingForElevatorToStopForPassengerToStop,
      isWaitingForElevatorToStopForPassengerToStopToStop
    } = this.state
    return (
      <div className="elevator">
        <div className="elevator-content">
          <div className="panel">
            <div>currentFloor: {currentFloor}</div>
          </div>
          <ul className="floor-wrap">
            {/* this.floor 转换成数组 */}
            {[...Array(this.state.floor).keys()].map(floor => (
              <li key={floor} className={`${currentFloor === floor + 1 ? 'current' : ''} ${destination === floor + 1 ? 'destination' : ''}`}>
                <div className="current-tip"><ClockCircleFilled /></div><div className="number">{floor + 1}</div>
                <div className="buttons">
                  <UpCircleFilled className={`btn-up ${this.state.floors[floor]?.up ? 'wait' : ''}`} onClick={() => this.addTask(floor, 'up')} />
                  <DownCircleFilled className={`btn-down ${this.state.floors[floor]?.down ? 'wait' : ''}`} onClick={() => this.addTask(floor, 'down')}/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
