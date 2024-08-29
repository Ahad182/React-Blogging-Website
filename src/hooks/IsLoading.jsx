import React, { useEffect, useState } from 'react'

const useLoading = (duration=3000) => {
    const [isLoading,setLoading]=useState(true)

    useEffect(()=>{
        const TimeOff = setTimeout(()=>{
            setLoading(false)
        },duration)

        return ()=> clearTimeout(TimeOff)
    },[duration])
  return isLoading
   
}

export default useLoading
