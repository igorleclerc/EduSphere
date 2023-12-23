"use client";
/**
 *
 * v0 by Vercel.
 * @see https://v0.dev/t/42e253pxbBo
 */
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardDescription,
} from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  Octagon,
  Package2Icon,
  ShoppingCartIcon,
} from "lucide-react";
import useSession from "@/hooks/useSession";

export default function SideBar() {
  const { user } = useSession();
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 h-screen">
      <div className="flex flex-col gap-2 h-full">
        <div className="flex h-[60px] items-center px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="">Logo</span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <HomeIcon className="h-4 w-4" />
              Accueil
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="/dashboard/map"
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Rechercher une formation
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                12
              </Badge>
            </Link>
          </nav>
        </div>
        <div className="flex-grow-0 p-4">
          <Card className="w-full">
            <CardHeader>
              <div className="flex-col">
                <div className="flex items-center justify-between">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>NP</AvatarFallback>
                  </Avatar>
                  <div className="flex-col">
                    <CardTitle className="text-xl">
                      {user?.user_metadata.first_name}{" "}
                      {user?.user_metadata.last_name}
                    </CardTitle>
                    <CardDescription>{user?.user_metadata.INE}</CardDescription>
                  </div>
                </div>
              </div>
              <span className="sr-only">Toggle user menu</span>
            </CardHeader>
            <CardContent className="flex justify-end">
              <Button variant="destructive">Disconnect</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
