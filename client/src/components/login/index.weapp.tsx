import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"

const db = Taro.cloud.database({
  env: 'cloud-learn-vxnx9'
})

export default class Login extends Component {
  state = {
    context: {},
    list: []
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {
          name: 'zhangsan',
          pwd: '123456'
        }
      })
      .then(res => {
        this.setState({
          context: res.result
        })
      })
  }
  getList = () => {
    /**
     * 小程序调取数据库
     */
    // db.collection('books').get().then(res => {
    //   console.log(res)
    // })
    /**
     * 云函数调取数据库
     */
    Taro.cloud
      .callFunction({
        name: "getBookList",
        data: {
          name: 1,
          age: 12
        }
      })
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.getLogin}>获取登录云函数</Button>
        <Button onClick={this.getList}>获取列表数据</Button>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>
    )
  }
}
