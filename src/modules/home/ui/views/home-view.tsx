"use client"
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomeView = () => {
 const {data:session} = authClient.useSession()
 const router = useRouter()

  if(!session) {
    return (
      <p>Loading</p>
    )
  }

  return (
    <div>
      <p>Logger in user is : {session.user.name}</p>
      <Button onClick={() => authClient.signOut({fetchOptions:{onSuccess:() => router.push("/sign-in")}})}>
        Sign ot
      </Button>
    </div>
  )
}

export default HomeView
