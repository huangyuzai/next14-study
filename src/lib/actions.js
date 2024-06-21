'use server';

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
// 对密码进行哈希处理
import bcrypt from 'bcrypt'


// server 方法必须通过 async 定义
export const addPost = async (formData) => {
    // 需要使用 Object.fromEntries 才可以进行结构，否则只能通过 formData.get('xxx') 才能访问到
    const { title, desc, slug, userId } = Object.fromEntries(formData)
    // 连接数据库
    try {
        connectToDb()
        // 通过之前定义的 model，定义新的post
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })
        // 调用数据库保存
        await newPost.save()
        // 可以在数据更新后更新该路由，保持最新数据
        revalidatePath('/blog')
        console.log('save sussceful');
    } catch (err) {
        throw new Error(err)
    }
}

export const deletePost = async formData => {
    const { id } = Object.fromEntries(formData)
    try {
        connectToDb()
        await Post.findByIdAndDelete(id)
        revalidatePath('/blog')
    } catch (err) {
        throw new Error(err)
    }
}

// github 登录
export const handleGithubLogin = async () => {
    await signIn('github')
}
// github 注销
export const handleLogout = async () => {
    await signOut()
}

// 用户名登录
export const login = async (formData) => {
    const { username,password } = Object.fromEntries(formData)
    // 使用 mongodb登录
    try {
        await signIn('credentials', { username, password })
    } catch (error) {
        console.log(error);
        return {error: 'failed login'}
    }
}

// 注册用户
export const handleRegister = async (formData) => {
    const { username,email,password,passwordRepeat } = Object.fromEntries(formData)
    if (password !== passwordRepeat) console.log('两次密码不一致')
    try {
        connectToDb()
        // 如果不存在该用户则新建该用户
        const user = await User.findOne({ username })
        if (!user) {
            // 对密码进行哈希处理
            const salt = await bcrypt.genSalt(10)   // 规则
            const hashedPwd = await bcrypt.hash(password, salt)
            console.log(hashedPwd)
            const newUser = new User({
                username: username,
                password: hashedPwd,
                email: email
            })
            await newUser.save()
        } else {
            throw new Error('该用户已存在')
        }
    } catch (err) {
        throw new Error(err)
    }
}
