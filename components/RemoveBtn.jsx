"use client"
import { Icon } from '@/Icon'
import { useRouter } from 'next/navigation'
import React from 'react'
const RemoveBtn = ({id}) => {

  const router = useRouter()
const removeTopic = async() => {

  const confirmed = confirm("Are you sure you want to remove?")

if (confirmed) {
 const res =  await fetch(`http://localhost:3000/api/topics?id=${id}`,{
    method:"DELETE",
  })
if (res.ok) {
  router.refresh()
  
}

 
}


}



  return (
<button onClick={removeTopic}  className='text-red-400'><Icon.Bs.BsTrash size={24}/></button>

)
}

export default RemoveBtn