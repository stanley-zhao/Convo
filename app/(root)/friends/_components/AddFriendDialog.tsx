"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlus } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useMutationState from "@/hooks/useMutationState";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { ConvexError } from "convex/values";

type Props = {};

const addFriendFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email("Please enter a valid email address"),
});

const AddFriendDialog = (props: Props) => {
  const { mutate: createRequest, pending } = useMutationState(
    api.request.create
  );

  const handleSubmit = async (values: z.infer<typeof addFriendFormSchema>) => {
    await createRequest({
      email: values.email,
    })
      .then(() => {
        form.reset();
        toast.success("Request sent");
      })
      .catch((err) => {
        toast.error(
          err instanceof ConvexError ? err.message : "Something went wrong"
        );
      });
  };

  const form = useForm<z.infer<typeof addFriendFormSchema>>({
    resolver: zodResolver(addFriendFormSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline" size="icon">
            <DialogTrigger>
              <UserPlus />
            </DialogTrigger>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add Friend</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Friend</DialogTitle>
          <DialogDescription>
            Send a request to connect with a friend.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={pending}>
                {pending ? "Sending..." : "Add Friend"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFriendDialog;
