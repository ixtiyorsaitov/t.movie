import React, { Dispatch, SetStateAction, useState } from "react";
import { Content } from "./types";
import { DialogTitle } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import EmailIcon from "@/public/icons/email-icon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "@/components/ui/button";
import {
  signUpStep1Schema,
  signUpStep2Schema,
  signUpStep3Schema,
} from "@/lib/validations";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import LockIcon from "@/public/icons/lock-icon";

interface FormValues {
  email: string;
  name: string;
  password: string;
}
type Step = 1 | 2 | 3;

const Register = ({
  changeContent,
  onDisable,
  setInStep,
}: {
  changeContent: Dispatch<SetStateAction<Content>>;
  onDisable: Dispatch<SetStateAction<boolean>>;
  setInStep: Dispatch<SetStateAction<boolean>>;
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    name: "",
    password: "",
  });
  const [step, setStep] = useState<Step>(3);
  return (
    <>
      <DialogTitle className="font-baloo2 mb-3 text-center text-3xl sm:text-4xl md:text-5xl">
        Create account
      </DialogTitle>
      {step === 1 ? (
        <RegisterStep1
          onDisable={onDisable}
          formValues={formValues}
          setFormValues={setFormValues}
          setStep={setStep}
          setInStep={setInStep}
        />
      ) : step === 2 ? (
        <RegisterStep2
          formValues={formValues}
          setFormValues={setFormValues}
          setStep={setStep}
        />
      ) : (
        <RegisterStep3
          formValues={formValues}
          setFormValues={setFormValues}
          setStep={setStep}
        />
      )}
    </>
  );
};

export default Register;

interface Props {
  formValues: FormValues;
  setFormValues: Dispatch<SetStateAction<FormValues>>;
  setStep: (step: Step) => void;
}
interface Step1Props extends Props {
  onDisable: Dispatch<SetStateAction<boolean>>;
  setInStep: Dispatch<SetStateAction<boolean>>;
}
const RegisterStep1 = ({
  setFormValues,
  setStep,
  onDisable,
  setInStep,
}: Step1Props) => {
  const isPending = false;
  const form = useForm<z.infer<typeof signUpStep1Schema>>({
    resolver: zodResolver(signUpStep1Schema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof signUpStep1Schema>) {
    setFormValues((prev) => {
      return { ...prev, email: values.email };
    });
    onDisable(true);
    setInStep(true);
    setStep(2);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                    disabled={isPending}
                    {...field}
                  />
                  <EmailIcon className="absolute top-1 right-0" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          type="submit"
          className="w-full rounded-full py-5 text-xl"
        >
          Send code
          {isPending ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <ArrowRight className="size-5" />
          )}
        </Button>
      </form>
    </Form>
  );
};

const RegisterStep2 = ({ setStep }: Props) => {
  const isPending = false;
  const form = useForm<z.infer<typeof signUpStep2Schema>>({
    resolver: zodResolver(signUpStep2Schema),
    defaultValues: {
      otp: "",
    },
  });
  function onSubmit(values: z.infer<typeof signUpStep2Schema>) {
    setStep(3);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative flex w-full items-center justify-center">
                  <InputOTP
                    pattern={REGEXP_ONLY_DIGITS}
                    {...field}
                    maxLength={6}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot
                        className="size-10 md:size-12 md:w-15"
                        index={0}
                      />
                      <InputOTPSlot
                        className="size-10 md:size-12 md:w-15"
                        index={1}
                      />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot
                        className="size-10 md:size-12 md:w-15"
                        index={2}
                      />
                      <InputOTPSlot
                        className="size-10 md:size-12 md:w-15"
                        index={3}
                      />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot
                        className="size-10 md:size-12 md:w-15"
                        index={4}
                      />
                      <InputOTPSlot
                        className="size-10 md:size-12 md:w-15"
                        index={5}
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full rounded-full py-5 text-xl">
          Verify code
        </Button>
        <Button
          disabled={isPending}
          type="button"
          className="w-full rounded-full py-5 text-xl"
          variant={"outline"}
        >
          <ArrowLeft className="size-5" />
          Back
        </Button>
      </form>
    </Form>
  );
};

const RegisterStep3 = ({}: Props) => {
  const form = useForm<z.infer<typeof signUpStep3Schema>>({
    resolver: zodResolver(signUpStep3Schema),
    defaultValues: {
      name: "",
      password: "",
      confirmPassword: "",
    },
  });
  function onSubmit(values: z.infer<typeof signUpStep3Schema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    className="rounded-none border border-x-0 border-t-0 border-b !bg-transparent pr-6 pb-3 !text-lg shadow-none focus-visible:ring-0"
                    placeholder="Name"
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
                    className="rounded-none border border-x-0 border-t-0 border-b !bg-transparent pr-6 pb-3 !text-lg shadow-none focus-visible:ring-0"
                    placeholder="Password"
                    autoFocus
                    {...field}
                  />
                  <LockIcon className="absolute top-1 right-0" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    className="rounded-none border border-x-0 border-t-0 border-b !bg-transparent pr-6 pb-3 !text-lg shadow-none focus-visible:ring-0"
                    placeholder="Confirm password"
                    autoFocus
                    {...field}
                  />
                  <LockIcon className="absolute top-1 right-0" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full rounded-full py-5 text-xl">
          Create account
        </Button>
      </form>
    </Form>
  );
};
