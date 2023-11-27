"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description) {
      alert("Please enter a title and description")
      return
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description })
      })
      if (res.ok) {
     
        router.push('/')
        router.refresh()
      }
      else { 
        throw new Error("Failed to create a topic") 
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input

        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic Title"
        className="border text-black border-slate-500 px-8 py-2"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Topic Description"
        className="border text-black border-slate-500 px-8 py-2"
      />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Submit</button>
    </form>
  );
};

export default page;