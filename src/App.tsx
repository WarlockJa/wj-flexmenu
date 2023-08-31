import { useState } from "react";
import "./App.css";
import FlexMenu from "./components/FlexMenu";

const menuArray = ["Option1", "Option2", "Option3", "Option4"];

function App() {
  const [activeMenu, setActiveMenu] = useState(10);

  return (
    <main>
      <div className="menuWrapper">
        <FlexMenu
          items={menuArray}
          offset={2.82}
          step={5.44}
          callback={setActiveMenu}
        />
      </div>
      <h1>Selected option has index of {activeMenu}</h1>
    </main>
  );
}

export default App;
