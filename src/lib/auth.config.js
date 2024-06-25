// auth 配置
export const authConfig = {
    pages: {
        signIn: '/login'
    },
    providers: [],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id
                token.isAdmin = user.isAdmin
            }
            return token
        },
        async session ({session, token}) {
            if (token) {
                session.user.id = token.id
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        authorized({ auth, request }) {
            const user = auth?.user
            // 判断下一个页面的路径
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin')
            const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog')
            const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')
            // 判断如果是去admin页面，则需要 admin 权限
            if (isOnAdminPanel && !user?.isAdmin) {
                // 如果不符合，则不允许跳转，将会重定向到登录页
                return false
            }

            // 判断 blog 页面是否已经登录
            if (isOnBlogPage && !user) {
                return false
            }

            // 判断去 login 页是否已登录，登录后重定向到首页
            if (isOnLoginPage && user) {
                return Response.redirect(new URL('/', request.nextUrl))
            }

            return true

            // 这里是重定向到登录页
            // return false
        }
    }
}