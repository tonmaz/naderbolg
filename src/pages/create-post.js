import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { createPost } from "../graphql/mutations";
import { Editor } from "@src/common/components/blocks/Editor";
import { EditorContent, useEditor } from "@tiptap/react";
import { defaultExtensions } from "@tiptap/starter-kit";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Mention from "@tiptap/extension-mention";
import Placeholder from "@tiptap/extension-placeholder";

// import MentionList from "./MentionList";

const initialState = { title: "", content: "" };

function CreatePost() {
  const [post, setPost] = useState(initialState);
  const { title, content } = post;
  const router = useRouter();
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }
  const editor = useEditor({
    extensions: [
      ...defaultExtensions(),

      Paragraph.configure({
        HTMLAttributes: {
          class: "text-gray-700 text-[18px]",
        },
      }),
      Heading.configure({
        HTMLAttributes: {
          class: "text-sm",
        },
      }),
      Placeholder,
      Mention.configure({
        HTMLAttributes: {
          class: "mention",
        },
        suggestion: {
          items: (query) => {
            return [
              "Lea Thompson",
              "Cyndi Lauper",
              "Tom Cruise",
              "Madonna",
              "Jerry Hall",
              "Joan Collins",
              "Winona Ryder",
              "Christina Applegate",
              "Alyssa Milano",
              "Molly Ringwald",
              "Ally Sheedy",
              "Debbie Harry",
              "Olivia Newton-John",
              "Elton John",
              "Michael J. Fox",
              "Axl Rose",
              "Emilio Estevez",
              "Ralph Macchio",
              "Rob Lowe",
              "Jennifer Grey",
              "Mickey Rourke",
              "John Cusack",
              "Matthew Broderick",
              "Justine Bateman",
              "Lisa Bonet",
            ]
              .filter((item) =>
                item.toLowerCase().startsWith(query.toLowerCase())
              )
              .slice(0, 10);
          },
        },
      }),
    ],
    // content: "<p>Start typing...</p>",

    editorProps: {
      attributes: {
        class:
          "prose prose-sm  min-h-[120px] px-5 sm:prose lg:prose-lg xl:prose-2xl my-5 focus:outline-none",
      },
    },
  });
  async function createNewPost() {
    const html = editor.getHTML();
    if (!title || html === "<p></p>") return;
    const id = uuid();
    post.id = id;
    console.log(post);
    await API.graphql({
      query: createPost,
      variables: { input: { title: post.title, id: post.id, content: html } },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    router.push(`/posts/${id}`);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">
        Create new post
      </h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <div className="w-1/3 border-[1px] rounded-md mb-3 p-4">
        <div className="border-b">
          <MenuBar editor={editor} />
        </div>
        <EditorContent editor={editor} />
      </div>

      <button
        type="button"
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={createNewPost}
      >
        Create Post
      </button>
    </div>
  );
}

export default withAuthenticator(CreatePost);

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="space-x-4 ">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${editor.isActive("italic") ? "bg-red-500" : ""}`}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "bg-red-500" : ""}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>undo</button>
      <button onClick={() => editor.chain().focus().redo().run()}>redo</button>
    </div>
  );
};
