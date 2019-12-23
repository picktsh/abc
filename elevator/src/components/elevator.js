const Mansion = {
  FloorQuantity: 30, // 楼层高度
  ElevatorNumber: 4, // 电梯数量
  AElevator: {
    // 每一个电梯对应的属性和方法
    buttons: {
      // 每一个电梯的按钮
      btn_up: {
        status: 0
      },
      btn_down: {},
      btn_floors: [{}],
      btn_help: {}
    },
    site: {},
    status: 0
  },
  AFloor: {
    // 每一个楼层对应的属性和方法
    buttons: {
      // 每一个电梯的按钮
      btn_up: {
        status: 0
      },
      btn_down: {},
    },
  }
}
export default Mansion
/*
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
/*
* 类的创建:
* 楼层类
* 楼层类>按钮类
* 楼层类>按钮实例状态
* */
