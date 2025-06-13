"use client"
import { authClient } from '@/lib/auth-client'
import React from 'react'

const HomePage = () => {
   const { 
        data: session,    
    } = authClient.useSession() 

    const username =session?.user.name 
 
 
    if(session){
    return <div>
      <h1>
        {username}
      </h1>
      <button onClick={() => authClient.signOut()}>
        Log out
      </button>
    </div>
  }

  return (
    <div>
      home page
    </div>
  )
}

export default HomePage
