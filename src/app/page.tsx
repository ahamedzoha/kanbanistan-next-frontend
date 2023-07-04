import UserDetail from "@/global/components/user-detail.component"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-black">Welcome to Kanbanistan</h1>
        <h3 className="text-xl  ">Manage your tasks for free</h3>
      </div>
      <UserDetail />
    </main>
  )
}
