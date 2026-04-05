import { useApp } from "../../context/AppContext";

export default function RoleSwitcher() {
  const { role, setRole, theme, setTheme } = useApp();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}