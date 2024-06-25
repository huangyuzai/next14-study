import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDb } from "./utils"
import { User } from "./models"
import bcrypt from 'bcrypt'
import { authConfig } from "./auth.config"

const login = async (credentials) => {
    try {
        connectToDb()
        const user = await User.findOne({ username: credentials.username })
        console.log(`user===`, user);
        if (!user) {
            throw new Error('no user found')
            return { error: 'no user found' }
        }
        // 验证密码
        const isPwdCorrect = await bcrypt.compare(credentials.password, user.password)
        if (!isPwdCorrect) {
            throw new Error('failed password')
            return { error: 'failed password' }
        }
        return user
    } catch (error) {
        console.log(`error===`, error);
        throw new Error('failed to login')
        return { error: 'failed to login' }
    }
}


export const { 
    handlers: {
        GET,
        POST
    }, 
    auth, 
    signIn, 
    signOut 
} = NextAuth({
    ...authConfig, 
    providers: [ 
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // 如果用户通过 mongodb 进行登录
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    console.log(`登录成功`, user);
                    return user
                } catch (error) {
                    console.log(`333===`, error);
                    return { error }
                }
            }
        })
    ],
    callbacks: {
        async signIn ({ user, account, profile }) {
            if (account?.provider === 'github') {
                connectToDb()
                try {   
                    // 如果不存在该用户则新建该用户
                    const user = await User.findOne({ email: profile.email })

                    if (!user) {
                        const newUser = new User({
                            username: profile?.login,
                            img: profile?.avatar_url,
                            email: profile?.email
                        })
                        await newUser.save()
                    }
                    
                } catch (error) {
                    throw new Error(error)
                    return false  // return false 后会阻止github 登录
                }
            }
            return true // 需要返回 true 才能进行 github 登录
        },
        ...authConfig.callbacks
    } 
})