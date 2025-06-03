import React from 'react'

type Props = {
    params: {
        conversationId: string
    }
};

function ConversationPage({params}: Props) {
  return (
    <div>ConversationPage {params.conversationId}</div>
  )
}

export default ConversationPage