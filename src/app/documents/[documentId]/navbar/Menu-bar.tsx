"use client"

import {
    FileIcon,
    FileJsonIcon,
    FilePenIcon,
    FilePlusIcon,
    FileTextIcon,
    GlobeIcon,
    PrinterIcon,
    TrashIcon,
    Undo2Icon
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";



export const MenuBar = () => {
    return (
        <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
                <MenubarMenu>
                    <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                        File
                    </MenubarTrigger>
                    <MenubarContent className="print:hidden">
                        <MenubarSub>
                            <MenubarSubTrigger>
                                <FileIcon className="size-4 mr-2" />
                                Save
                            </MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>
                                    <FileJsonIcon className="size-4 mr-2 " />
                                    JSON
                                </MenubarItem>
                                <MenubarItem>
                                    <GlobeIcon className="size-4 mr-2 " />
                                    HTML
                                </MenubarItem>
                                <MenubarItem>
                                    <BsFilePdf className="size-4 mr-2 " />
                                    PDF
                                </MenubarItem>
                                <MenubarItem>
                                    <FileTextIcon className="size-4 mr-2 " />
                                    TEXT
                                </MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarItem>
                            <FilePlusIcon className="size-4 mr-2" />
                            New Document
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <FilePenIcon className="size-4 mr-2" />
                            Rename
                        </MenubarItem>
                        <MenubarItem>
                            <TrashIcon className="size-4 mr-2" />
                            Rmove
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => window.print()}>
                            <PrinterIcon className="size-4 mr-2" />
                            Print <MenubarShortcut>⌘P</MenubarShortcut >
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                        Edit
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <Undo2Icon className="size-4 mr-2" />
                            Undo
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                        Insert
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                        Format
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}