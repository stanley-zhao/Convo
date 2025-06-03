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

export const DesktopNav = () => {
  const paths = useNavigation();

  return (
    <Card className="hidden lg:flex lg:flex-col lg:items-center lg:w-16 lg:h-full lg:px-2 lg:py-4">
      <nav className="flex flex-col justify-between h-full w-full">
        <ul className="flex flex-col items-center gap-4">
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
        </ul>
        <div className="flex flex-col items-center justify-center gap-4 mb-2">
          <ModeToggle />
          <UserButton />
        </div>
      </nav>
    </Card>
  );
};
