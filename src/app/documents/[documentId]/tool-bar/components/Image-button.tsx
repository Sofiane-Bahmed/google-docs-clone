"use client"

import { useState } from "react";

import { useEditorStore } from "@/store/use-editor-store";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { ImageIcon, SearchIcon, UploadIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ImageButton = () => {
    const { editor } = useEditorStore();
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [ImageUrl, setImageUrl] = useState('')

    const onChange = (src: string) => {
        editor?.chain().focus().setImage({ src }).run();
    };

    const onUpload = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*"

        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                const ImageUrl = URL.createObjectURL(file);
                onChange(ImageUrl);
            }
        }
        input.click();
    };

    const handleImageUrlSubmmit = () => {
        if (ImageUrl) {
            onChange(ImageUrl);
            setImageUrl("");
            setIsDialogOpen(false);
        }
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-[#d3e3fd] px-1.5 overflow-hidden text-sm"
                    >
                        <ImageIcon className="size-4" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                    <DropdownMenuItem onClick={onUpload}>
                        <UploadIcon className="size-4 mr-2 " />
                        Upload
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setIsDialogOpen(true) }}>
                        <SearchIcon className="size-4 mr-2 " />
                        Paste image URL
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Dialog
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            insert image URL
                        </DialogTitle>
                    </DialogHeader>
                    <Input
                        placeholder="Isert image URL"
                        value={ImageUrl}
                        onChange={(e) => { setImageUrl(e.target.value) }}
                        onKeyDown={(e) => {
                            if (e.key === "enter") {
                                handleImageUrlSubmmit();
                            }
                        }}
                    />
                    <DialogFooter>
                        <Button onClick={handleImageUrlSubmmit}>Insert</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
} 