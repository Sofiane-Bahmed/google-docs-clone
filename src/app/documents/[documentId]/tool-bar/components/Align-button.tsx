"use client"

import { useEditorStore } from '@/store/use-editor-store'
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    AlignCenterIcon,
    AlignJustifyIcon,
    AlignLeftIcon,
    AlignRightIcon,
    ChevronDownIcon,
    Icon,
} from "lucide-react";

export const AlignButton = () => {
    const { editor } = useEditorStore()

    const alignments = [
        {
            label: "Align Left",
            value: "left",
            icon: AlignLeftIcon
        },
        {
            label: "Align Center",
            value: "center",
            icon: AlignCenterIcon
        },
        {
            label: "Align Right",
            value: "right",
            icon: AlignRightIcon
        },
        {
            label: "Align Justify",
            value: "justify",
            icon: AlignJustifyIcon
        },
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 min-w-7 shrink-0 flex flex-row items-center justify-center rounded-sm hover:bg-[#d3e3fd] px-1.5 overflow-hidden text-sm"
                >
                    <AlignLeftIcon className="size-4" />
                    <ChevronDownIcon className='size-3' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
                {alignments.map(({ label, value, icon: Icon }) => (
                    <button
                        key={value}
                        onClick={() => editor?.chain().focus().setTextAlign(value).run()}
                        className={cn(
                            "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-[#d3e3fd]",
                            editor?.isActive({ textAlign: value }) && "bg-[#d3e3fd]"
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
