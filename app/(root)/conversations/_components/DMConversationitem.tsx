"use client"

import React from 'react'
import { Id } from '@/convex/_generated/dataModel';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import { Card } from '@/components/ui/card';

type Props = {
    id: Id<"conversations">;
    imageUrl: string;
    username: string;
}

const DMConversationitem = ({id, imageUrl, username}: Props) => {
  return (
    <Link href={`/conversations/${id}`} className='w-full'>
          <Card className='p-2 flex flex-row items-center gap-4 truncate'>
              <div className='flex flex-row items-center gap-4 truncate'>
                  <Avatar>
                      <AvatarImage src={imageUrl} />
                      <AvatarFallback>
                          <User />
                      </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col truncate'>
                      <h4 className='truncate'>{username}</h4>
                      <p className='truncate text-xs text-muted-foreground'>Something</p>
                  </div>
              </div>
          </Card>
    </Link>
  )
}

export default DMConversationitem