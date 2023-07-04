"use client"

import axios from "@/lib/axios"
import { useSession } from "next-auth/react"

export const useRefreshToken = () => {
  const { data: session } = useSession()

  const refreshToken = async () => {
    const res = await axios({
      method: "POST",
      url: "/auth/refresh",
      headers: {
        Authorization: `Bearer ${session?.user.refresh_token}`,
      },
    })
    if (session) {
      session.user.access_token = res.data.access_token
      session.user.refresh_token = res.data.refresh_token
    }
  }

  return refreshToken
}
