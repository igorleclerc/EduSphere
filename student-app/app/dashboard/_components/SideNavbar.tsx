import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { User } from "lucide-react";

const UserProfileCard: React.FC = () => {
  return (
    <Card className="fixed bottom-4 left-4 w-56 bg-white border-t border-gray-200 p-2">
      <CardHeader className="flex items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-2 flex flex-col flex-grow">
          <div className="font-bold text-sm">
            {/* Prénom Nom */}Igor Le Clerc
          </div>
          <div className="text-xs">{/* INE */}INE: ABCDEFGH</div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-auto">
            <div className="cursor-pointer text-gray-600">
              <span className="mr-1">...</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/account">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="flex flex-col items-end">
        <CardDescription className="whitespace-nowrap overflow-hidden overflow-ellipsis">
          Additional user information
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
