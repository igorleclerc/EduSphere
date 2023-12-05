import React from "react";
import { AuthForm } from "./_components/AuthForm";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";

export default async function page() {

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="p-5">
        <div className="w-96">
          <AuthForm />
        </div>
      </Card>
    </div>
  );
}
