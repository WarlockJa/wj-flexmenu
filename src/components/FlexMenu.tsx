// FlexMenu takes in array of strings to form a menu
// and animates it with CSS and a Dash component
// FlexMenu returns callback with selected item's index as an argument

import { useState } from "react";
import "./flexmenu.css";

// an animated, graphic element to highlight selected menu option
const Dash = ({
  activeMenu,
  offset,
  step,
}: {
  activeMenu: number | null;
  offset: number;
  step: number;
}) => {
  return (
    <div
      className="dashArrow"
      style={
        activeMenu !== null
          ? {
              transform: `translateY(${activeMenu * step}em)`,
              top: `${offset}em`,
            }
          : { transform: `rotateY(90deg)` }
      }
    ></div>
  );
};

type FlexMenuProps = {
  items: string[]; // array of menu items
  offset: number; // initial offset from the top for the Dash
  step: number; // distance between menut items
  callback: (value: number) => void; // callback with the index of the active item
};

const FlexMenu = ({ items, offset, step, callback }: FlexMenuProps) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  return (
    <div className="flexMenu">
      <Dash activeMenu={activeMenu} offset={offset} step={step} />
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            className={activeMenu === index ? "activeItem" : ""}
            onMouseEnter={() => {
              setActiveMenu(index);
              callback(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlexMenu;
