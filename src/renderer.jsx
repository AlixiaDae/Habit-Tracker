import { createRoot } from "react-dom/client";
import Headbar from "./components/Headbar";
import Calendar from "./components/Calendar";
const App = () => {
  return (
    <>
    <Headbar />
    <Calendar />
    </>
  );
}

const container = document.getElementById("root")
const root = createRoot(container)

root.render(<App/>)