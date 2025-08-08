import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useAuthModal } from "@/hooks/use-modals";
import { signInSchema } from "@/lib/validations";
import React, { useState } from "react";
import z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Login from "./login";
import Register from "./register";
import ForgotPassword from "./forgot-password";
import { Content } from "./types";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import AppleIcon from "@/public/icons/apple-icon";

const AuthModal = () => {
  const authModal = useAuthModal();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [inStep, setInStep] = useState<boolean>(false);
  const [renderedContent, changeRenderedContent] = useState<Content>("signup");

  const handleLogin = (values: z.infer<typeof signInSchema>) => {
    console.log(values);
  };

  return (
    <Dialog
      open={authModal.open}
      onOpenChange={(isOpen) => {
        if (!disabled) {
          authModal.setOpen(isOpen);
        }
      }}
    >
      <DialogContent
        showCloseButton={!inStep || !disabled}
        className="max-w-[530px]"
      >
        <DialogHeader>
          {renderedContent === "signin" ? (
            <Login
              onLogin={handleLogin}
              changeContent={changeRenderedContent}
            />
          ) : renderedContent === "signup" ? (
            <Register
              onDisable={setDisabled}
              changeContent={changeRenderedContent}
              setInStep={setInStep}
            />
          ) : renderedContent === "forgotpassword" ? (
            <ForgotPassword changeContent={changeRenderedContent} />
          ) : null}
          {renderedContent !== "forgotpassword" && !inStep && (
            <>
              <div className="my-3 flex items-center gap-7">
                <Separator className="flex-1" />
                <span className="text-sm">Continue With</span>
                <Separator className="flex-1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  disabled={disabled}
                  variant="secondary"
                  type="button"
                  className="h-12 cursor-pointer rounded-xl border"
                >
                  <Image
                    src="/icons/google.png"
                    alt="Continue with Google"
                    width={30}
                    height={30}
                  />
                </Button>
                <Button
                  disabled={disabled}
                  variant="secondary"
                  type="button"
                  className="h-12 cursor-pointer rounded-xl border"
                >
                  <AppleIcon className="!h-8 !w-8" />
                </Button>
              </div>
            </>
          )}
          {renderedContent === "signin" ? (
            <p className="text-muted-foreground mt-7 text-center text-sm">
              {"Don't have an account? "}
              <span
                onClick={() => changeRenderedContent("signup")}
                className="text-primary cursor-pointer font-semibold hover:underline"
              >
                Create Account!
              </span>
            </p>
          ) : renderedContent === "signup" && !inStep ? (
            <p className="text-muted-foreground mt-7 text-center text-sm">
              {"Already have an account? "}
              <span
                onClick={() => {
                  if (!disabled) {
                    changeRenderedContent("signin");
                  }
                }}
                className="text-primary cursor-pointer font-semibold hover:underline"
              >
                Login!
              </span>
            </p>
          ) : renderedContent === "forgotpassword" ? (
            <p className="text-muted-foreground mt-7 text-center text-sm">
              {"If everything is okay "}
              <span
                onClick={() => changeRenderedContent("signin")}
                className="text-primary cursor-pointer font-semibold hover:underline"
              >
                Login
              </span>
            </p>
          ) : null}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
