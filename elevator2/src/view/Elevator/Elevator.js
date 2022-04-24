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
  }

  componentWillUnmount () {
    clearInterval(this.interval)
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
                <div className="current-tip"><ClockCircleFilled /></div>
                <div className="number">{floor + 1}</div>
                <div className="buttons">
                  <UpCircleFilled className="btn-up" />
                  <DownCircleFilled className="btn-down"/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
