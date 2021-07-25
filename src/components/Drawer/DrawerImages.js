import React from "react";
import { Images } from "./Drawer.styled";

function DrawerImages({ screenshots }) {
  return (
    <Images>
      <div>
        <img src={screenshots[0]} alt="App screenshot" />
      </div>
      <div>
        <img src={screenshots[1]} alt="App screenshot" />
      </div>
      <div>
        <img src={screenshots[2]} alt="App screenshot" />
      </div>
    </Images>
  );
}

export default DrawerImages;
