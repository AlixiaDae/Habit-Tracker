import { createRoot } from "react-dom/client";
import Headbar from "./components/Headbar";
import Day from "./components/dateComponents/Day";

const App = () => {
  return (
    <>
      <Headbar />
      <div className="main">
        <Day />
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
