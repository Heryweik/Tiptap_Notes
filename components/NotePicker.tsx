'use client'

import { useState } from "react";
import Tiptap from "./Tiptap";
import { v4 as uuidv4 } from 'uuid';

export default function NotePicker() {

    const [content, setContent] = useState<string>("");
    const handleContentChange = (reason: any) => {
        setContent(reason);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = {
            id: uuidv4(),
            content: content,
        }
        console.log(data);

        const existingDataString = localStorage.getItem("myData");
        const existingData = existingDataString ? JSON.parse(existingDataString) : [];
        const updateData = [...existingData, data];
        localStorage.setItem("myData", JSON.stringify(updateData));
        setContent("");

    }

  return (
    <form onSubmit={handleSubmit}
        className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
    >
        <div className="text-3xl text-center text-sky-300 mb-10">
            Notes Picker
        </div>

        <Tiptap 
            content={content}
            onChange={(newContent: string) => handleContentChange(newContent)}
        />
    </form>
  )
}
