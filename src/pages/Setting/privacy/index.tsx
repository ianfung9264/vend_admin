import {
  _getPrivacyPolicy,
  _updatePrivacyPolicy,
} from "@/services/setting/others";
import {
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
} from "@ant-design/icons";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button, message, Spin, Space, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import Underline from "@tiptap/extension-underline";
import { useIntl } from "@umijs/max";

const Tiptap = ({ content, onUpdate, onSave }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: content,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  const intl = useIntl();
  const menu = [
    {
      name: intl.formatMessage({ id: "setting.privacy.bold" }),
      icon: <BoldOutlined />,
      command: () => editor?.chain().focus().toggleBold().run(),
      isActive: () => editor?.isActive("bold"),
    },
    {
      name: intl.formatMessage({ id: "setting.privacy.italic" }),
      icon: <ItalicOutlined />,
      command: () => editor?.chain().focus().toggleItalic().run(),
      isActive: () => editor?.isActive("italic"),
    },
    {
      name: intl.formatMessage({ id: "setting.privacy.underline" }),
      icon: <UnderlineOutlined />,
      command: () => editor?.chain().focus().toggleUnderline().run(),
      isActive: () => editor?.isActive("underline"),
    },
    {
      name: intl.formatMessage({ id: "setting.privacy.strike" }),
      icon: <StrikethroughOutlined />,
      command: () => editor?.chain().focus().toggleStrike().run(),
      isActive: () => editor?.isActive("strike"),
    },
  ];

  if (!editor) {
    return null;
  }

  return (
    <div className="tiptap-editor">
      <div className="toolbar">
        <Space>
          {menu.map((item) => (
            <Tooltip key={item.name} title={item.name}>
              <Button
                icon={item.icon}
                onClick={item.command}
                type={item.isActive() ? "primary" : "default"}
              />
            </Tooltip>
          ))}
        </Space>
      </div>
      <EditorContent editor={editor} />
      <Button
        type="primary"
        onClick={onSave}
        style={{ marginTop: "16px" }}
        disabled={!content}
      >
        {intl.formatMessage({ id: "setting.privacy.save" })}
      </Button>
    </div>
  );
};

export default function PrivacyPage() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const intl = useIntl();
  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const res = await _getPrivacyPolicy();
        if (res.data) {
          setContent(res.data.context);
        }
      } catch (error) {
        message.error(
          intl.formatMessage({ id: "setting.privacy.fetch.error" })
        );
      } finally {
        setLoading(false);
      }
    };
    fetchPrivacyPolicy();
  }, [intl]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await _updatePrivacyPolicy({ context: content });
      message.success(
        intl.formatMessage({ id: "setting.privacy.save.success" })
      );
    } catch (error) {
      message.error(intl.formatMessage({ id: "setting.privacy.save.error" }));
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <Spin />;
  }

  return (
    <div>
      <Tiptap content={content} onUpdate={setContent} onSave={handleSave} />
    </div>
  );
}
