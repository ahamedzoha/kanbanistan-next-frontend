"use client"
import { SessionProvider } from "next-auth/react"
import { FC } from "react"

interface RootProviderProps {
  children: React.ReactNode
}
const RootProvider: FC<RootProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default RootProvider
