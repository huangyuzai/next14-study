const { default: mongoose } = require("mongoose")
// 连接数据库

const connection = {}

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log(`使用之前的连接`);
            return
        }
        const db = await mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        throw new Error(error)
    }
}