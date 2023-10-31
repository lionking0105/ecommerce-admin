"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Settings, LogOut, LayoutGrid } from "lucide-react";

export default function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex flex-col" align="end">
        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="w-full justify-start py-3.5 pl-3 pr-8 tracking-wide !cursor-pointer"
          >
            <LayoutGrid className="mr-3 h-5 w-5" /> Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="#"
            className="w-full justify-start py-3.5 pl-3 pr-8 tracking-wide !cursor-pointer"
          >
            <Settings className="mr-3 h-5 w-5" /> Edit Profile
          </Link>
        </DropdownMenuItem>

        <form action="/auth/sign-out" method="post">
          <DropdownMenuItem asChild>
            <button
              type="submit"
              className="w-full justify-start py-3.5 pl-3 pr-8 tracking-wide !cursor-pointer"
            >
              <LogOut className="mr-3 h-5 w-5" /> Log Out
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
