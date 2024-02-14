"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { MailCheck } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { FormField, FormItem, FormControl, Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { LampContainer } from "~/components/ui/lamp";

const formSchema = z.object({
  email: z.string().email("Input must be a valid email address"),
});

export default function NewsletterPage() {
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
    <main className="flex min-h-screen flex-col items-center justify-start bg-zinc-200 text-black dark:bg-zinc-950 dark:text-white">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-0 py-0 ">
        <LampContainer className="lg:mt-20">
          {/* <div className="grid gap-2 text-center lg:max-w-lg"> */}
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mx-auto mt-16 flex aspect-square w-full max-w-[100px] items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-orange-600 md:aspect-square md:flex-1"
          >
            <EnvelopeOpenIcon className="h-8 w-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-0 bg-gradient-to-br from-zinc-600 to-zinc-900 bg-clip-text py-4 text-center text-4xl font-bold leading-relaxed tracking-tight text-transparent dark:from-slate-100 dark:to-slate-500 md:text-6xl lg:max-w-lg"
          >
            Level up your
            <br /> dev skills.
          </motion.h1>
          <motion.span
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center text-lg font-medium text-zinc-900 dark:text-white lg:max-w-lg"
          >
            Signup to a well curated and creatively delivered newsletter to get
            tons of valuable insight on how to level up your skills. Sent out
            every 2 weeks right into your inbox!
          </motion.span>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-4 lg:max-w-lg"
          >
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
                          className="w-full lg:min-w-[250px]"
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
          </motion.div>
          {/* </div> */}
        </LampContainer>
        <div className="mt-5 grid w-full grid-cols-1 items-start justify-start gap-14 lg:max-w-full lg:grid-cols-2 lg:gap-12"></div>
      </div>
    </main>
  );
}
