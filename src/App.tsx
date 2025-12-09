import { Input } from "./components/Input";
import { Toast } from "./components/Toast";
import { SidebarMenu, type MenuItem } from "./components/SidebarMenu";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { label: "Home" },
    { label: "About" },
    { label: "Services", children: [{ label: "Web" }, { label: "Mobile" }] },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Тест компонентов</h1>

      {/* Input */}
      <h2>Input</h2>
      <Input
        type="text"
        clearable
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст"
      />

      {/* Toast */}
      <h2>Toast</h2>
      <button onClick={() => setShowToast(true)}>Показать уведомление</button>
      {showToast && (
        <Toast
          message="Привет! Это Toast"
          type="success"
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}

      {/* SidebarMenu */}
      <h2>SidebarMenu</h2>
      <button onClick={() => setSidebarOpen(true)}>Открыть меню</button>
      <SidebarMenu
        items={menuItems}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </div>
  );
}

export default App;