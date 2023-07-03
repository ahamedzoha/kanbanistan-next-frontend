"use client"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { Dialog, DialogTrigger } from "./ui/dialog"

import SignInDialog from "./sign-in-dialog.component"
import { signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()

  console.log(session)
  return (
    <Dialog>
      <nav className="w-full">
        <div className="flex justify-between items-center mx-14 py-4">
          <div className="">
            <span className="text-2xl font-bold">Kanbanistan</span>
          </div>
          <div className="">
            {session ? (
              <Button className="" onClick={() => signOut()}>
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            ) : (
              <>
                <DialogTrigger asChild>
                  <Button className="">
                    <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with
                    Email
                  </Button>
                </DialogTrigger>
                <SignInDialog />
              </>
            )}
          </div>
        </div>
      </nav>
    </Dialog>
  )
}

export default Navbar
