import "./App.css";
import { useStore } from "./hooks/useStore";

function App() {
  const { users } = useStore();
  return <div>start</div>;
}

export default App;
