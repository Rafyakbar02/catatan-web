"use client"

import { type Editor } from "@tiptap/react"
import { Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Heading1 } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


import { Toggle } from "./ui/toggle"

type Props = {
    editor: Editor | null
}

export function Toolbar({ editor }: Props) {
    if (!editor) {
        return null
    }

    return (
        <div className="fixed mx-auto inset-x-0 max-w-fit border border-input bg-white rounded-3xl px-4 py-2">
            {/* Header 1 toggle */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Toggle
                            pressed={editor.isActive("heading", { level: 1 })}
                            onPressedChange={() =>
                                editor.chain().focus().toggleHeading({ level: 1 }).run()
                            }
                        >
                            <Heading1 className="h-5 w-5" />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Heading 1 (Ctrl + Alt + 1)</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* Header 2 toggle */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Toggle
                            pressed={editor.isActive("heading", { level: 2 })}
                            onPressedChange={() =>
                                editor.chain().focus().toggleHeading({ level: 2 }).run()
                            }
                        >
                            <Heading2 className="h-5 w-5" />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Heading 2 (Ctrl + Alt + 2)</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* Bold toggle */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Toggle
                            pressed={editor.isActive("bold")}
                            onPressedChange={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                        >
                            <Bold className="h-5 w-5" />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Bold (Ctrl + B)</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* Italic toggle */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Toggle
                            pressed={editor.isActive("italic")}
                            onPressedChange={() =>
                                editor.chain().focus().toggleItalic().run()
                            }
                        >
                            <Italic className="h-5 w-5" />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Italic (Ctrl + I)</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* Strike toggle */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Toggle
                            pressed={editor.isActive("strike")}
                            onPressedChange={() =>
                                editor.chain().focus().toggleStrike().run()
                            }
                        >
                            <Strikethrough className="h-5 w-5"/>
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Strikethrough (Ctrl + Shift + S)</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* Bullet list toggle */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Toggle
                            pressed={editor.isActive("bulletList")}
                            onPressedChange={() =>
                                editor.chain().focus().toggleBulletList().run()
                            }
                        >
                            <List className="h-5 w-5" />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Bulleted List (Ctrl + Shift + 8)</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* Numbered list toggle */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Toggle
                            pressed={editor.isActive("orderedList")}
                            onPressedChange={() =>
                                editor.chain().focus().toggleOrderedList().run()
                            }
                        >
                            <ListOrdered className="h-5 w-5" />
                        </Toggle>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Numbered List (Ctrl + Shift + 7)</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
} 