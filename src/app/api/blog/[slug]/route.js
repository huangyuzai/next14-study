import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"
import { unstable_noStore as noStore } from "next/cache";

export const GET = async (request, { params }) => {
    noStore();
    const { slug } = params
    try {
        connectToDb()
        const post = await Post.findOne({ slug })
        console.log(`route===`, post);
        return NextResponse.json(post)
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export const DELETE = async (request, { params }) => {
    const { slug } = params
    try {
        connectToDb()
        const post = await Post.deleteOne({ slug })
        return NextResponse.json('delete post')
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}