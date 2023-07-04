"use client"
import { axiosAuth } from "@/lib/axios"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRefreshToken } from "./useRefreshToken"

const useAxiosAuth = () => {
  const { data: session } = useSession()
  const refreshToken = useRefreshToken()

  useEffect(() => {
    const requestInterceptor = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers[
            "Authorization"
          ] = `Bearer ${session?.user.access_token}`
        }

        return config
      },

      (error) => {
        return Promise.reject(error)
      }
    )

    const responseInterceptor = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRq = error.config

        if (error.response.status === 401 && !prevRq.sent) {
          prevRq.sent = true
          await refreshToken()
          prevRq.headers[
            "Authorization"
          ] = `Bearer ${session?.user.access_token}`
          return axiosAuth(prevRq)
        }

        return Promise.reject(error)
      }
    )

    return () => {
      axiosAuth.interceptors.request.eject(requestInterceptor)
      axiosAuth.interceptors.response.eject(responseInterceptor)
    }
  }, [refreshToken, session])

  return axiosAuth
}

export default useAxiosAuth
