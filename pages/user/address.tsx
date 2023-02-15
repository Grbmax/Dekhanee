import React from 'react'
import { useSession } from 'next-auth/react'

function address() {
const { data: session } = useSession()
  return (
    <div>address : {session?.user.name} </div>
  )
}

export default address
