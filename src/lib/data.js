import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// 连接数据库获取文章列表
export const getPosts = async () => {
    noStore()
    try {
        await connectToDb()
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

// 连接数据库获取文章详情
export const getPost = async (slug) => {
    try {
        connectToDb()
        const post = await Post.findOne({ slug })
        return post
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }

}

// 连接数据库获取用户信息
export const getUser = async (id) => {
    try {
        connectToDb()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

// 连接数据库获取所有用户信息
export const getUsers = async () => {
    try {
        connectToDb()
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}