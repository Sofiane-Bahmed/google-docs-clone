"use client"

import { useEditorStore } from "@/store/use-editor-store";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeadingLevelButton = () => {
    const { editor } = useEditorStore()

    const headings = [
        { label: "Normal text", value: 0 as const, fontSize: "16px" },
        { label: "Heading 1", value: 1 as const, fontSize: "32px" },
        { label: "Heading 2", value: 2 as const, fontSize: "24px" },
        { label: "Heading 3", value: 3 as const, fontSize: "20px" },
        { label: "Heading 4", value: 4 as const, fontSize: "18px" },
        { label: "Heading 5", value: 5 as const, fontSize: "16px" }
    ];

    const getCurrentHeading = () => {
        for (let level = 1; level <= 5; level++) {
            if (editor?.isActive("heading", { level })) {
                return `heading, ${level}`;
            }
        }
        return "Normal heading"
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-[#d3e3fd] px-1.5 overflow-hidden text-sm"
                >
                    <span className="truncate">
                        {getCurrentHeading()}
                    </span>
                    <ChevronDownIcon className="ml-4 size-4 shrink-0 " />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
                {headings.map(({ label, value, fontSize }) => (
                    <button
                        key={value}
                        onClick={() => {
                            if (value === 0) {
                                editor?.chain().focus().setParagraph().run();
                            } else {
                                editor?.chain().focus().toggleHeading({ level: value }).run();
                            }
                        }}
                        style={{ fontSize }}
                        className={cn(
                            "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-[#d3e3fd]",
                            (value === 0 && !editor?.isActive("heading")) || editor?.isActive("heading", { level: value }) && "bg-[#d3e3fd]/80"
                        )}
                    >
                        {label}
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}