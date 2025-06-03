"use client";

import React from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, AuthLoading } from "convex/react";
import { ConvexReactClient } from "convex/react";
import { useAuth } from "@clerk/nextjs";
import LoadingLogo from "@/components/ui/shared/LoadingLogo";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);

export default function ConvexClientProvider({ children }: Props) {
  return (
    <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      <Authenticated>
        {children}
      </Authenticated>
      <AuthLoading>
        <LoadingLogo size={100} />
      </AuthLoading>
    </ConvexProviderWithClerk>
  );
}
