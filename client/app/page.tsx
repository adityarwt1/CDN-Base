"use client"
import UnderDevelopment from "@/components/UnderDevelopements";
import React, { useEffect } from "react";

const LandingPage = ()=>{
  useEffect(()=>{
    const testBackend = async ()=>{
      const response = await fetch(process.env.NEXT_PUBLIC_API_BACKEND_URL as string, {
        method:"GET"
      })
      const data = await response.json()
      console.log(data)
    }
    testBackend()
  },[])
  return (
    <UnderDevelopment/>
  )
}

export default LandingPage;