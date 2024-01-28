"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./button";
import { Card } from "./card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./form";
import { Input } from "./input";

const formSchema = z.object({
  email: z.string().email("Input must be a valid email address"),
});

export function SubMailList() {
  // 1. Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // ⏳ Do something with value when submitted

    toast("Submitted values", {
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Card className="grid w-full items-center justify-start overflow-hidden p-0 dark:bg-transparent md:flex md:max-h-[180px]">
      <div className="flex aspect-square max-w-full flex-1 items-center justify-center bg-gradient-to-br from-blue-600 to-orange-500 md:max-w-[180px]">
        <EnvelopeOpenIcon className="h-8 w-8 text-white" />
      </div>
      <div className="grid flex-1 items-center justify-start gap-1 p-6 md:p-8">
        <h3>Stay up to date</h3>
        <span className="text-xs dark:text-zinc-200/60">
          Get notified when new products and articles are published
        </span>
        <div className="mt-4 w-full flex-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full min-w-full items-center justify-start gap-2 md:gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        className="w-full"
                        placeholder="your@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="">
                Subscribe
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Card>
  );
}
