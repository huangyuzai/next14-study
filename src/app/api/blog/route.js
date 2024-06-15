import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

// get方法
export const GET = async () => {
    try {
        connectToDb()
        const posts = await Post.find()
        return NextResponse.json(posts)
    } catch (error) {
        throw new Error(error)
    }
}