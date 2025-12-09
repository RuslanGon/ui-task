import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SidebarMenu } from "./SidebarMenu";
import type { MenuItem } from "./SidebarMenu.types";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const menuItems: MenuItem[] = [
  { label: "Home" },
  { label: "About" },
  { label: "Services", children: [{ label: "Web" }, { label: "Mobile" }] },
];

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return <SidebarMenu items={menuItems} open={open} onClose={() => setOpen(false)} />;
  },
};
