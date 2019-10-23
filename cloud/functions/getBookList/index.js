// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database({
  env: 'cloud-learn-vxnx9'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const result = await db.collection('books').get()
  return result
}