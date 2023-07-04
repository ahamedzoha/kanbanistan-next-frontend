import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      _id: string
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      isVerified: boolean
      refreshToken: string
      createdAt: Date
      updatedAt: Date
      __v: number
      access_token: string
      refresh_token: string
    }
  }
}
