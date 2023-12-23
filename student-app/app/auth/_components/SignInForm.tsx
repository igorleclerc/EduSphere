import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { signInUser } from "@/services/auth.service";
import { Loader2 } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";


const LoginFormSchema = z.object({
  email: z
    .string({ required_error: "Addresse mail requise" })
    .email("Adresse mail incorrecte"),
  password: z.string({ required_error: "Mot de passe requis" }).min(6),
});

type LoginFormValues = z.infer<typeof LoginFormSchema>;

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
  });

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      setIsLoading(true);
      await signInUser(values);
	  router.push("/dashboard");
    } catch (error:any) {
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
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input
                  placeholder="********"
                  {...field}
                  type="password"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
              <Link href="" className="text-blue-900 text-xs hover:text-blue-700 hover:underline">Mot de passe oublié ?</Link>
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          type="submit"
          className="w-full flex gap-2"
        >
          {isLoading ? <Loader2 size="16" className="animate-spin" /> : null}
          SignIn
        </Button>
      </form>
    </Form>
  );
}
