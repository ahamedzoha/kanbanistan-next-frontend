import axios from "@/lib/axios"

import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@abc.co" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await axios.post("/auth/local/signin", {
          email: credentials?.email,
          password: credentials?.password,
        })

        const user = res.data

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      console.log({ token, user, account })

      return { ...token, ...user }
    },

    async session({ session, token, user }) {
      session.user = token as any
      return session
    },
  },
}
export default NextAuth(authOptions)
