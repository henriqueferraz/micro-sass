import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"


export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        })
    ],
})