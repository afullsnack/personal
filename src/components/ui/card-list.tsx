"use client";

import Link from "next/link";
import React from "react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

interface ListItem {
  title: string;
  description: string;
  icon: React.ReactNode | JSX.Element;
  url: string;
}

type CardProps = React.ComponentProps<typeof Card> & {
  listHeader: string;
  listDescription: string;
  items: ListItem[];
  ctaText: string;
  ctaUrl: string;
};

export function CardList({
  className,
  listHeader,
  listDescription,
  items,
  ctaText,
  ctaUrl,
  ...props
}: CardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle>{listHeader}</CardTitle>
        <CardDescription className="text-zinc-800/60 dark:text-zinc-200/60">
          {listDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellIcon />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-muted-foreground text-sm">
              Send notifications to device.
            </p>
          </div>
          <Badge>Comedic</Badge>
        </div> */}
        <div>
          {!!items.length ? (
            items.map((value: ListItem, index: number) => (
              <Link
                href={value.url}
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start gap-6 pb-4 last:mb-0 last:pb-0"
              >
                {/* <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /> */}
                {value.icon}
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {value.title}
                  </p>
                  <span className="text-muted-foreground text-xs text-zinc-800/60 dark:text-zinc-200/60">
                    {value.description}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <h3 className="w-full text-center">
              There are no items at this time
            </h3>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Link passHref href={ctaUrl} className="w-full">
          <Button
            className="w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 hover:dark:bg-zinc-800"
            variant="secondary"
          >
            {ctaText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
