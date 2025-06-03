"use client";

import React from "react";
import ItemList from "@/components/ui/shared/item-list/itemList";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import DMConversationitem from "./_components/DMConversationitem";

type Props = React.PropsWithChildren<object>;

function ConversationsLayout({ children }: Props) {
  const conversations = useQuery(api.conversation.get);
  return (
    <>
      <ItemList title="Conversations">
        {conversations ? (
          conversations.length === 0 ? (
            <p className="w-full h-full flex items-center justify-center">
              No Conversation Found
            </p>
          ) : (
            conversations.map((conversation) =>
              conversation.conversation.isGroup ? null : (
                <DMConversationitem
                  key={conversation.conversation._id}
                  id={conversation.conversation._id}
                  username={conversation.otherMember?.username || ""}
                  imageUrl={conversation.otherMember?.imageUrl || ""}
                />
              )
            )
          )
        ) : (
          <Loader2 />
        )}
      </ItemList>

      {children}
    </>
  );
}

export default ConversationsLayout;
