import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export default function MyEditor() {
  const [content, setContent] = useState("");

  const quillModules = {
    toolbar: [[{ header: [1, 2, 3, false] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }], ["link", "image"], [{ align: [] }], [{ color: [] }], ["code-block"], ["clean"]],
  };

  const quillFormats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "link", "image", "align", "color", "code-block"];

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
    console.log(newContent);
  };

  return (
    <div className="flex items-center justify-center">
      <QuillEditor value={content} onChange={handleEditorChange} modules={quillModules} formats={quillFormats} className="w-full items-center h-96 bg-white dark:bg-black text-black dark:text-white" />
    </div>
  );
}
