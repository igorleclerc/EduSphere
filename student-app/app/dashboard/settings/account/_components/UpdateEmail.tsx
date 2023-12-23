import ButtonItem from "@/components/ui/ButtonList/ButtonItem";
import useSession from "@/hooks/useSession";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const UpdateEmailFormSchema = z.object({
  email: z
    .string({ required_error: "Email requis pour la modification" })
    .email("Email incorrect"),
  password: z
    .string({ required_error: "Mot de passe requis pour la modification" })
    .min(8, "Mot de passe trop court"),
});

type UpdateEmailFormValues = z.infer<typeof UpdateEmailFormSchema>;

const UpdateEmail = () => {
    const {user} = useSession();

  const form = useForm<UpdateEmailFormValues>({
    mode: "onSubmit",
    resolver: zodResolver(UpdateEmailFormSchema),
  });
  return (
    <>
      <ButtonItem value={user?.email}>Mail</ButtonItem>
    </>
  );
};

export default UpdateEmail;
