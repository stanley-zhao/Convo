import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    username: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  })
    .index("by_email", ["email"])
    .index("by_clerkId", ["clerkId"]),
  
  requests: defineTable({
    sender: v.id("users"),
    receiver: v.id("users"),
    status: v.union(v.literal("pending"), v.literal("accepted"), v.literal("rejected")),
  })
    .index("by_receiver", ["receiver"])
    .index("by_receiver_sender", ["receiver", "sender"]),

  friends: defineTable({
    user1: v.id("users"),
    user2: v.id("users"),
    conversationId: v.id("conversations"),
  })
    .index("by_user1", ["user1"])
    .index("by_user2", ["user2"])
    .index("by_conversationId", ["conversationId"]),
  
  conversations: defineTable({
    name: v.optional(v.string()),
    isGroup: v.boolean(),
    isMessageId: v.optional(v.id('messages')),
  }),
  conversationMembers: defineTable({
    memberId: v.id("users"),
    conversationId: v.id("conversations"),
    lastSeenMessage: v.optional(v.id("messages")),
  })
    .index("by_memberId", ["memberId"])
    .index("by_conversationId", ["conversationId"])
    .index("by_memberId_conversationId", ["memberId","conversationId"]),
  messages: defineTable({
    type: v.string(),
    senderId: v.id("users"),
    conversationId: v.id("conversations"),
    content: v.array(v.string()),
  })
    .index("by_conversationId", ["conversationId"])
});