import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import TextStyle from "@tiptap/extension-text-style";
import { Button, Space, Tooltip, Select } from "antd";
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  FontSizeOutlined,
} from "@ant-design/icons";
import "./RichTextEditor.css";

interface RichTextEditorProps {
  value?: string;
  onChange?: (html: string) => void;
  minHeight?: number | string;
  minWidth?: number | string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value = "",
  onChange,
  minHeight = 200,
  minWidth = 600,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      Underline,
      Heading.configure({ levels: [1, 2] }),
      TextStyle,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);
    },
  });

  // Sync external value changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const Toolbar = () => {
    if (!editor) return null;

    const items = [
      {
        title: "Bold",
        icon: <BoldOutlined />,
        isActive: () => editor.isActive("bold"),
        action: () => editor.chain().focus().toggleBold().run(),
      },
      {
        title: "Italic",
        icon: <ItalicOutlined />,
        isActive: () => editor.isActive("italic"),
        action: () => editor.chain().focus().toggleItalic().run(),
      },
      {
        title: "Underline",
        icon: <UnderlineOutlined />,
        isActive: () => editor.isActive("underline"),
        action: () => editor.chain().focus().toggleUnderline().run(),
      },
      {
        title: "Strike",
        icon: <StrikethroughOutlined />,
        isActive: () => editor.isActive("strike"),
        action: () => editor.chain().focus().toggleStrike().run(),
      },
      {
        title: "Heading 1",
        icon: <FontSizeOutlined style={{ fontSize: 16 }} />,
        isActive: () => editor.isActive("heading", { level: 1 }),
        action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      },
      {
        title: "Heading 2",
        icon: <FontSizeOutlined style={{ fontSize: 12 }} />,
        isActive: () => editor.isActive("heading", { level: 2 }),
        action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      },
    ];

    return (
      <Space size={4} style={{ marginBottom: 8, flexWrap: "wrap" }}>
        {items.map((item) => (
          <Tooltip title={item.title} key={item.title}>
            <Button
              size="small"
              type={item.isActive() ? "primary" : "default"}
              icon={item.icon}
              onClick={item.action}
            />
          </Tooltip>
        ))}
      </Space>
    );
  };

  if (!editor) return null;

  return (
    <div className="rich-text-editor">
      <Toolbar />
      <EditorContent editor={editor} style={{ minHeight, minWidth }} />
    </div>
  );
};

export default RichTextEditor;
