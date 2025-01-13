import { ChevronDownIcon } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useEditorStore } from "@/store/use-editor-store";
import { cn } from "@/lib/utils";

export const FontFamilyButton = () => {
    const { editor } = useEditorStore()
    const fonts = [
        { label: "Arial", value: "Arial" },
        { label: "Times New Roman", value: "Times New Roman" },
        { label: "Courier New", value: "Courier New" },
        { label: "Georgia", value: "Georgia" },
        { label: "Verdana", value: "Verdana" },
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-[#d3e3fd] px-1.5 overflow-hidden text-sm"
                >
                    <span className="truncate">
                        {editor?.getAttributes("textStyle").fontFamily || "Arial"}
                    </span>
                    <ChevronDownIcon className="ml-4 size-4 shrink-0 " />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 flex flex-col gap-y-1 ">
                {fonts.map(({ label, value }) => (
                    <button
                        onClick={() => { editor?.chain().focus().setFontFamily(value).run() }}
                        key={value}
                        className={cn(
                            "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-[#d3e3fd]",
                            editor?.getAttributes("textStyle").fontFamily === value && "bg-[#d3e3fd]/80"
                        )}
                        style={{ fontFamily: value }}
                    >
                        <span className="text-sm"> {label}</span>
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}