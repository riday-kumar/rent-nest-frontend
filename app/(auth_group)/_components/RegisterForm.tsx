"use client";
import React, { useActionState, useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { registerAction } from "../_actions/authAction";
import { toast } from "sonner";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [state, action, isPending] = useActionState(registerAction, false);

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.success) {
      toast.success(state.message || "Register Success");
    } else {
      toast.error(state.message || "Register Failed");
    }
  }, [state]);

  return (
    <form action={action} className="space-y-6">
      {/* Name */}

      <div className="space-y-2">
        <Label>Full Name</Label>

        <Input
          name="name"
          type="text"
          required
          placeholder="Enter your full name"
          className="h-12"
        />
      </div>

      {/* Email */}

      <div className="space-y-2">
        <Label>Email</Label>

        <Input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="h-12"
        />
      </div>

      {/* Password */}

      <div className="space-y-2">
        <Label>Password</Label>

        <div className="relative">
          <Input
            name="password"
            required
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="h-12 pr-12"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Role */}

      <div className="space-y-2">
        <Label>Role</Label>

        <Select value={role} onValueChange={(value) => setRole(value ?? "")}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="TENANT">Tenant</SelectItem>

            <SelectItem value="LANDLORD">Landlord</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <input type="hidden" name="role" value={role ?? "TENANT"} />

      {/* Register Button */}

      <Button type="submit" className="h-12 w-full text-base">
        {isPending ? "Registering..." : "Create Account"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-primary hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
