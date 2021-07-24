import React from "react";
import { Carousell } from "./Drawer.styled";

function DrawerCarousell({ screenshots, liveVersion }) {
  return (
    <Carousell>
      <a rel="noreferrer" target="_blank" href={liveVersion}>
        <img src={screenshots[0]} alt="App screenshot" />
      </a>
      <a rel="noreferrer" target="_blank" href={liveVersion}>
        <img src={screenshots[1]} alt="App screenshot" />
      </a>
      <a rel="noreferrer" target="_blank" href={liveVersion}>
        <img src={screenshots[2]} alt="App screenshot" />
      </a>
    </Carousell>
  );
}

export default DrawerCarousell;
