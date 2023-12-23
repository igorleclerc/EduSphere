import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next-nprogress-bar";
import { signUpUser } from "@/services/auth.service";
import { Loader2 } from "lucide-react";

const SignUpFormSchema = z.object({
  email: z
    .string({ required_error: "Addresse mail requise" })
    .email("Adresse mail incorrecte"),
  password: z
    .string({ required_error: "Mot de passe requis" })
    .min(6, { message: "Le mot de passe doit faire minimun 6 caractères." }),
  confirm: z
    .string({ required_error: "Confimration du mot de passe requis" })
    .min(6),
  first_name: z
    .string({ required_error: "Prénom requis" }),
  last_name: z
    .string({ required_error: "Nom requis" }),
  INE: z
    .string({ required_error: "INE requis" })
    .min(10, { message: "L'INE doit faire 10 caractères." }),
}).refine(
  (values) => {
    return values.password === values.confirm;
  },
  {
    message: "Les mots de passe ne correspondent pas.",
    path: ["confirmPassword"],
  }
);

type SignUpFormValues = z.infer<typeof SignUpFormSchema>;

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpFormSchema),
  });

  const handleSubmit = async (values: SignUpFormValues) => {
    try {
      setIsLoading(true);
      await signUpUser(values);
      router.push("/dashboard");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-6"
      >
        <div className="flex justify-center gap-2">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input
                  placeholder="Robert"
                  {...field}
                  type="firstname"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input
                  placeholder="Delarue"
                  {...field}
                  type="lastname"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="INE"
          render={({ field }) => (
            <FormItem>
              <FormLabel>INE</FormLabel>
              <FormControl>
                <Input
                  placeholder="Robert"
                  {...field}
                  type="INE"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  type="email"
                  onChange={field.onChange}
                />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  {...field}
                  type="password"
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Password"
                  {...field}
                  type="password"
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit" className="w-full flex gap-2">
        {isLoading ? <Loader2 size="16" className="animate-spin" /> : null}
          Register
        </Button>
        <Button variant="secondary" className="w-full flex gap-2">
          Créer un compte avec EduConnect
        </Button>
      </form>
    </Form>
  );
}
