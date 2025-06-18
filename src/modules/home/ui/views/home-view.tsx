"use client"
import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const HomeView = () => {

  const trpc = useTRPC();
  const {data} = useQuery(trpc.hello.queryOptions({text : "Elan"}))



  return (
    <div>
     {data?.greeting}
    </div>
  )
}

export default HomeView
