"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { ResumeIcon } from "@radix-ui/react-icons"
import useAxiosAuth from "@/hooks/useAxiosAuth"

const UserDetail = () => {
  const [userData, setUserData] = useState<null | {}>()
  const axiosAuth = useAxiosAuth()

  const getUserDetail = async () => {
    const result = await axiosAuth.get("/users/me")
    setUserData(result.data)
  }

  return (
    <div>
      <Button onClick={() => getUserDetail()}>
        <ResumeIcon className="mr-2 h-4 w-4" />
        Get User Details
      </Button>

      {userData && <pre className="">{JSON.stringify(userData, null, 2)}</pre>}
    </div>
  )
}

export default UserDetail
