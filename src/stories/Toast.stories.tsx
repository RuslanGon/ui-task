import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../components/Toast";
import { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
};
export default meta;

type Story = StoryObj<typeof Toast>;


const ToastWrapper = (args: any) => {
  const [show, setShow] = useState(true);
  return show ? <Toast {...args} onClose={() => setShow(false)} /> : null;
};

export const Success: Story = {
  render: () => <ToastWrapper message="Success!" type="success" duration={3000} />,
};

export const Error: Story = {
  render: () => <ToastWrapper message="Error occurred" type="error" duration={5000} />,
};

export const Info: Story = {
  render: () => <ToastWrapper message="Information message" type="info" duration={4000} />,
};
