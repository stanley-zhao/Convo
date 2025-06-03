"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigation } from "@/hooks/useNavigation";
import Link from "next/link";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/ui/theme/theme-toggle";
import { Badge } from "@/components/ui/badge";

export const MobileNav = () => {
  const paths = useNavigation();

  return (
    <Card className="fixed bottom-4 w-[calc(100vw-32px)] flex items-center h-16 p-2 lg:hidden">
      <nav className="w-full">
        <ul className="flex justify-evenly items-center">
          {paths.map((path, id) => (
            <li key={id} className="relative">
              <Link href={path.href}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      variant={path.active ? "default" : "outline"}
                      size="icon"
                    >
                      {path.icon}
                    </Button>
                    {path.count ? (
                      <Badge className="absolute left-6 bottom-7 px-2">
                        {path.count}
                      </Badge>
                    ) : null}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{path.name}</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            </li>
          ))}
          <li>
            <ModeToggle />
          </li>
          <li className="mt-2">
            <UserButton />
          </li>
        </ul>
      </nav>
    </Card>
  );
};
