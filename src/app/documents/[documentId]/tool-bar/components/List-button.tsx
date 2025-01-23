"use client"

import { useEditorStore } from '@/store/use-editor-store'
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    ChevronDownIcon,
    ListIcon,
    ListOrderedIcon,
} from "lucide-react";

export const ListButton = () => {
    const { editor } = useEditorStore()

    const lists = [
        {
            label: "Bullet List",
            icon: ListIcon,
            isActive: () => editor?.isActive('bulletList'),
            onClick: () => editor?.chain().focus().toggleBulletList().run(),

        },
        {
            label: "Ordered List",
            icon: ListOrderedIcon,
            isActive: () => editor?.isActive('orderedList'),
            onClick: () => editor?.chain().focus().toggleOrderedList().run(),

        },
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 min-w-7 shrink-0 flex flex-row items-center justify-center rounded-sm hover:bg-[#d3e3fd] px-1.5 overflow-hidden text-sm"
                >
                    <ListIcon className="size-4" />
                    <ChevronDownIcon className='size-3' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
                {lists.map(({ label, icon: Icon, onClick, isActive }) => (
                    <button
                        key={label}
                        onClick={onClick}
                        className={cn(
                            "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-[#d3e3fd]",
                            isActive() && "bg-[#d3e3fd]"
                        )}
                    >
                        <Icon className='size-4' />
                        <span className='text-sm'>{label}</span>
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
