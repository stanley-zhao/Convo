import React from 'react'
import { Card } from '@/components/ui/card'

const ConversationFallback = () => {
  return (
      <Card className="hidden lg:flex h-full w-full items-center bg-secondary text-secondary-foreground p-2 justify-center">
        <span>Select/ Create a Conversation to start</span>
    </Card>
  )
}

export default ConversationFallback