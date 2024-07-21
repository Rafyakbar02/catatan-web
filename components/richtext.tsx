"use client"

import PlaceHolder from '@tiptap/extension-placeholder'
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Toolbar } from "./toolbar"

export default function RichText() {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2]
                }
            }),
            PlaceHolder.configure({
                emptyEditorClass:
                    'cursor-text before:content-[attr(data-placeholder)] before:absolute before:top-2 before:left-3 before:text-mauve-11 before:opacity-50 before-pointer-events-none',
                })
        ],
        editorProps: {
            attributes: {
                class: "outline-none border-none h-[800px] px-3 py-2 flex-1 mt-16 prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc"
            }
        }
    })

    return (
        <div className="flex flex-col gap-2 p-2 h-screen mx-auto w-2/3">
            <Toolbar editor={editor} />
            <EditorContent editor={editor} placeholder="Click here to start" />
        </div>
    )
}