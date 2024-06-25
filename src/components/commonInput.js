import React, { useState } from "react";
import "../assets/css/simpleTable.css";
import { Form, Input, Button, Table, Space } from "antd";

import "antd/dist/antd.css";

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [form] = Form.useForm();
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      const { name, email } = values;
      if (!name) {
        throw new Error("Please enter a name");
      }
      await onSubmit({ name, email });
      form.resetFields();
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="header-box">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ name: "", email: "" }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter an email address" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            {!!editMode ? "Edit user" : "Add user"}
          </Button>
        </Form.Item>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Form>
    </div>
  );
};

export default InputHandler;

//This is the Code to LEVEL 1
/*
const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter a name.");
      return;
    }
    if (!name || !email) return;
    onSubmit({ name, email });
    setError("");
  };

  return (
    <div className="header-box">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  className="row"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="row"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button className="button" type="submit">
                  {!!editMode ? "Edit user" : "Add user"}
                </button>
              </td>
            </tr>
            {error && (
              <tr>
                <td style={{ color: "red" }}>{error}</td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default InputHandler;

*/
