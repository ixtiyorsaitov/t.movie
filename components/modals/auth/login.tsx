import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Content } from "./types";
import { DialogTitle } from "@/components/ui/dialog";
import EmailIcon from "@/public/icons/email-icon";
import LockIcon from "@/public/icons/lock-icon";

const Login = ({
  changeContent,
  onLogin,
}: {
  changeContent: Dispatch<SetStateAction<Content>>;
  onLogin: (values: z.infer<typeof signInSchema>) => void;
}) => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <>
      <DialogTitle className="font-baloo2 text-center text-5xl">
        Login
      </DialogTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onLogin)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="rounded-none border border-x-0 border-t-0 border-b !bg-transparent pr-6 pb-3 !text-lg shadow-none focus-visible:ring-0"
                      placeholder="Email"
                      autoFocus
                      {...field}
                    />
                    <EmailIcon className="absolute top-1 right-0" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      className="rounded-none border border-x-0 border-t-0 border-b !bg-transparent pr-6 pb-3 !text-3xl shadow-none placeholder:text-lg focus-visible:ring-0"
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                    <LockIcon className="absolute top-1 right-0" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full items-center justify-end">
            <Button
              variant={"link"}
              onClick={() => changeContent("forgotpassword")}
              type="button"
            >
              Forgot password?
            </Button>
          </div>
          <Button type="submit" className="w-full rounded-full py-5 text-xl">
            Login
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Login;
