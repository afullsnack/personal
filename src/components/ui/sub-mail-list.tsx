"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { MailCheck } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./button";
import { Card } from "./card";
import { Form, FormControl, FormField, FormItem } from "./form";
import { Input } from "./input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const formSchema = z.object({
  email: z.string().email("Input must be a valid email address"),
});

interface ISubMailList {
  title?: string;
  subTitle?: string;
}

export function SubMailList({ title, subTitle }: ISubMailList) {
  // 1. Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: "onSubmit",
    shouldUseNativeValidation: false,
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

  useEffect(() => {
    if (form.formState.errors.email) {
      toast.error(form.formState.errors.email?.message);
    }
  }, [form.formState.errors.email]);

  return (
    <Card className="flex w-full flex-col justify-start overflow-hidden p-0 dark:bg-transparent md:max-h-[180px] md:flex-row">
      <div className="flex aspect-square w-full max-w-full items-center justify-center bg-gradient-to-br from-blue-600 to-orange-600 md:aspect-square md:max-w-[180px] md:flex-1">
        <EnvelopeOpenIcon className="h-12 w-12 text-white lg:h-8 lg:w-8" />
      </div>
      <div className="flex flex-col items-start justify-start gap-1 p-6 md:flex-1 md:p-8">
        <h3>{title ? title : "Stay up to date"}</h3>
        <span className="text-sm dark:text-zinc-200/60">
          {subTitle
            ? subTitle
            : "Get notified when new products and articles are published"}
        </span>
        <div className="mt-4 w-full min-w-full flex-1">
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
                        className="w-full lg:min-w-[240px]"
                        placeholder="your@email.com"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="hidden text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black hover:dark:bg-zinc-200 md:flex"
              >
                Subscribe
              </Button>
              <TooltipProvider delayDuration={400}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="submit"
                      className="flex bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black hover:dark:bg-zinc-200 md:hidden"
                    >
                      <MailCheck className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="end">
                    <p>Add your email to the list</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </form>
          </Form>
        </div>
      </div>
    </Card>
  );
}
