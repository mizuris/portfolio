import React from "react";
import { Carousell } from "./Drawer.styled";

function DrawerCarousell({ screenshots }) {
  return (
    <Carousell>
      <div>
        <img src={screenshots[0]} alt="App screenshot" />
      </div>
      <div>
        <img src={screenshots[1]} alt="App screenshot" />
      </div>
      <div>
        <img src={screenshots[2]} alt="App screenshot" />
      </div>
    </Carousell>
  );
}

export default DrawerCarousell;
