export interface MenuItem {
    label: string;
    children?: MenuItem[];
  }
  
  export interface SidebarMenuProps {
    items: MenuItem[];
    open: boolean;
    onClose: () => void;
  }
  