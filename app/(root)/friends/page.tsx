"use client"

import ItemList from '@/components/ui/shared/item-list/itemList'
import React from 'react'
import ConversationFallback from '@/components/ui/shared/conversation/conversationFallback'
import AddFriendDialog from './_components/AddFriendDialog'
import { useQuery } from 'convex/react'
import { Loader2 } from 'lucide-react'
import { api } from '@/convex/_generated/api'
import Resquest from './_components/Resquest'

function Friends() {
  const requests = useQuery(api.requests.get);

  return (
    <>
      <ItemList title='Friends' action={<AddFriendDialog />}>
        {!requests ? (
          <Loader2 className='h-8 w-8'/>
        ) : requests.length === 0 ? (
          <p className='h-full w-full flex items-center justify-center'>No Friends Requests Found</p>
        ) : (
          requests.map((request) => (
            <Resquest
              key={request.request._id} 
              id={request.request._id}
              imageUrl={request.sender.imageUrl}
              username={request.sender.username}
              email={request.sender.email}
            />
          ))
        )}
      </ItemList>
      <ConversationFallback/>
    </>
  )
}

export default Friends