"use client";
import { useStore } from "@/store/store";
import { Menu, Search } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Navbar = () => {
  const { sidebarState, onChangeSidebar }: any = useStore();
  console.log(sidebarState);
  return (
    <div className="p-2 flex ">
      <div className="flex flex-[1] gap-x-2 items-center">
        <Button
          variant={sidebarState ? "secondary" : "default"}
          size="icon"
          onClick={onChangeSidebar}
        >
          <Menu />
        </Button>
        <h1 className="text-2xl italic font-bold">Dutube</h1>
      </div>
      <div className="flex items-center flex-[5] justify-between px-5">
        <div className=" flex items-center w-4/6 gap-2">
          <Input
            placeholder="Telusuri"
            className="focus-visible:ring-transparent rounded-tl-full rounded-bl-full"
          />
          <Button variant="secondary">
            <Search />
          </Button>
        </div>
        <div className="flex gap-x-2">
          <Avatar>
            <AvatarFallback>HL</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>HL</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>HL</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
