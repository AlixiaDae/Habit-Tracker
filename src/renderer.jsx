import { createRoot } from "react-dom/client";
import Headbar from "./components/Headbar";
const App = () => {
  return (
    <>
    <Headbar />
    </>
  );
}

const container = document.getElementById("root")
const root = createRoot(container)

root.render(<App/>)