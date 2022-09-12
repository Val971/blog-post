import React, { useState } from "react";
import { Input, Form, Modal } from "antd";
import { useSelector } from "react-redux";

export default function CreatePost({ handleCancel, handleOk }) {
  const [form, setForm] = useState(null);
  const { showModal } = useSelector((state) => ({ ...state.postState }));

  const validateMessages = {
    required: "${label} is required!",
  };


  return (
    <Modal
      title="Add Post"
      open={showModal}
      onOk={() => handleOk(form)}
      onCancel={() => handleCancel(false)}
    >
      <Form validateMessages={validateMessages} name="dynamic_rule">
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input a title",
            },
          ]}
        >
          <Input
            placeholder="Please input a title"
            onChange={(e) =>
              setForm((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
        </Form.Item>
        <Form.Item
          name="body"
          label="Body"
          rules={[
            {
              required: true,
              message: "Please input a description",
            },
          ]}
        >
          <Input.TextArea
            onChange={(e) =>
              setForm((prev) => {
                return { ...prev, body: e.target.value };
              })
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
