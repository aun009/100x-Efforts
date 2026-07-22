"use client"

import {TextInput} from "@repo/ui/input-text"
import { useRouter } from "next/navigation"

export default function Home() {

  //routing in next
  const router = useRouter();

  return <div>
    <h1>This is chatapp</h1>

    <TextInput placeHolder="room id"></TextInput>
    <button onClick={()=> {
      router.push("/chat/123")
    }}>Join room</button>

  </div>
}