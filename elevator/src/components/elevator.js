/**
 * 开关门速度
 * 上下运行的速度
 * 保持开门的时间
 */
/**
 * 使用继承来继承父类中的属性和方法(多层继承,多重继承)
 */
/**
 * 首页布局
 * 使用了一个交叉方向的vw和vh单位,
 * flex布局,绝对居中,
 * 最小600px,
 * 保证宽高比例都是1:1,
 * 任何一边大于600px都以最小的一边的90%的尺寸显示
 */
const M = {
  M_: 'M_',//建筑
  F_: 'F_',//楼层
  D_: 'D_',//楼层门
  E_: 'E_',//电梯
  B_: 'B_',//按钮
  storeyHeight: 20,//楼层高度
  elevatorNumber: 4,//电梯数量
  doorSpeed: 3000,//关门速度<Number>(ms)
}
// 模拟数据结构
let mansin = {
  id: 0,
  name: 'M_0',//大厦的序列
  storeyHeight: M.storeyHeight,
  elevatorNumber: M.elevatorNumber,
  doorSpeed: M.doorSpeed,
  // 楼层数量是 height 的数量
  floor: {
    F_0: {
      // 一个楼层实例
      id: 0,
      name: 'F_0',
      door: {
        // 数量是 elevatorNumber 的数量
        D_0: {},
        D_1: {},
      }
    },
    F_1: {},
  },
  // 电梯数量是 elevatorNumber 的数量
  elevator: {
    E_0: {
      // 一个电梯实例
      id: 0,
      name: 'E_0',
      status: 0, //参考状态码
      elevation: 0,//所在楼层的位置
      button: {
        // 电梯内的按钮
        B_help: {
          // 一个按钮实例
          id: 0,
          name: 'B_help',
          status: 0, //按钮状态0,1
          target: 0, // 目标楼层
        },//帮助
        B_hold: {},//保持开门
        B_open: {},//开门
        B_close: {},//关门
        //楼层按钮,数量是楼层高度
        B_1: {
          id: 1,
          name: 'B_help',
          status: 0, //按钮状态0,1
          target: 1, // 目标楼层
        },
        B_2: {},
      },
    },
    E_1: {},
  },
}

// 一个建筑类
class Mansion {
  constructor (props) {
    this.storeyHeight = M.storeyHeight
    this.elevatorNumber = M.elevatorNumber
    this.doorSpeed = M.doorSpeed
    this.elevator = {}
    this.floor = {}
  }
  // 实例初始化方法
  initElevator (Elevator) {
    for (let i = 0; i < this.storeyHeight; i++) {
      this.elevator[M.E_+i] = new Elevator()
    }
  }
}

export default Mansion
/**
 状态码说明:
 AElevator>status:
 0:关门等待
 1:开门中
 2:开门等待
 3:关门中
 4:上行中
 5:下行中
 AElevator>buttons>but_*:
 0: 默认
 1: 按下
 */
/**
 * 类的创建:
 * 楼层类
 * 楼层类>按钮类
 * 楼层类>按钮实例状态
 *
 * ID 的组成:
 * 电梯ID = 大楼ID
 * 按钮ID = 大楼ID>电梯ID>
 * 楼层门ID = 大楼ID>楼层ID>电梯ID
 */
