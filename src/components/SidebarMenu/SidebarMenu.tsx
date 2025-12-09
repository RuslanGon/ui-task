import { useState } from "react";
import styles from "./SidebarMenu.module.css";
import type { MenuItem, SidebarMenuProps } from "./SidebarMenu.types";

export const SidebarMenu = ({ items, open, onClose }: SidebarMenuProps) => {
  return (
    <>
      {open && <div className={styles.backdrop} onClick={onClose} />}
      <aside className={`${styles.menu} ${open ? styles.open : ""}`}>
        {items.map((item) => (
          <MenuItemComponent key={item.label} item={item} />
        ))}
      </aside>
    </>
  );
};

const MenuItemComponent = ({ item }: { item: MenuItem }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.label} onClick={() => setExpanded(!expanded)}>
        {item.label} {item.children && <span>{expanded ? "▼" : "▶"}</span>}
      </div>
      {item.children && expanded && (
        <div className={styles.submenu}>
          {item.children.map((child) => (
            <MenuItemComponent key={child.label} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};
