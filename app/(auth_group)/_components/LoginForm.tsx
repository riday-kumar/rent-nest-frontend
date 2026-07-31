"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useActionState, useEffect } from "react";
import { loginAction } from "../_actions/authAction";
import { toast } from "sonner";

const LoginForm = () => {
  const [state, action, isPending] = useActionState(loginAction, false);

  useEffect(() => {
    if (!state) {
      return;
    }

    if (!state.success) {
      toast.error(state.message || "Login Failed");
    }
  }, [state]);

  return (
    <form action={action} className="space-y-6">
      {/* Email */}

      <Card className="p-5 space-y-5">
        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <Button type="submit">{isPending ? "submitting" : "Login"}</Button>
      </Card>
    </form>
  );
};

export default LoginForm;
