"use client"

import { type Editor } from "@tiptap/react"
import { Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Heading1 } from "lucide-react"

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
            <Toggle
                pressed={editor.isActive("heading", { level: 1 })}
                onPressedChange={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
            >
                <Heading1 className="h-5 w-5" />
            </Toggle>

            {/* Header 2 toggle */}
            <Toggle
                pressed={editor.isActive("heading", { level: 2 })}
                onPressedChange={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
            >
                <Heading2 className="h-5 w-5" />
            </Toggle>

            {/* Bold toggle */}
            <Toggle
                pressed={editor.isActive("bold")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBold().run()
                }
            >
                <Bold className="h-5 w-5" />
            </Toggle>

            {/* Italic toggle */}
            <Toggle
                pressed={editor.isActive("italic")}
                onPressedChange={() =>
                    editor.chain().focus().toggleItalic().run()
                }
            >
                <Italic className="h-5 w-5" />
            </Toggle>

            {/* Strike toggle */}
            <Toggle
                pressed={editor.isActive("strike")}
                onPressedChange={() =>
                    editor.chain().focus().toggleStrike().run()
                }
            >
                <Strikethrough className="h-5 w-5"/>
            </Toggle>

            {/* Bullet list toggle */}
            <Toggle
                pressed={editor.isActive("bulletList")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBulletList().run()
                }
            >
                <List className="h-5 w-5" />
            </Toggle>

            {/* Ordered list toggle */}
            <Toggle
                pressed={editor.isActive("orderedList")}
                onPressedChange={() =>
                    editor.chain().focus().toggleOrderedList().run()
                }
            >
                <ListOrdered className="h-5 w-5" />
            </Toggle>
        </div>
    )
} 