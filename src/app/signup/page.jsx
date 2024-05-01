"use client";

import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useStore } from "@/store/NewStore";
import Link from "next/link";

const SignUp = () => {
    const { signup } = useStore((state) => state.user);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    // console.log("Success:", values);

        signup(values);
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
        <h2 className="mb-10 text-center text-3xl">SignUp</h2>
        
      <Form
        name="basic"
        labelCol={{
          span: 9,
        }}
        wrapperCol={{
          span: 26,
        }}
        style={{
          maxWidth: 800,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="eamil"
          name="eamil"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input type="emails" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm_Password"
          name="Confirm_password"
          rules={[
            {
              required: true,
              message: "Please input your confirm password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item
          wrapperCol={
            {
              // offset: 8,
              // span: 16,
            }
          }
        >
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>

        <div>Already have an account <Link href='/' className="underline text-blue-500 cursor-pointer">Login</Link></div>
        
      </Form>
    </div>
  );
};
export default SignUp;
