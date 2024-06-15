'use server';

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
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