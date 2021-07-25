import React, { useEffect } from "react";
import { StyledLoader } from "./Loader.styled";

function Loader({ loader, setLoader }) {
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, [setLoader]);

  return (
    <StyledLoader loader={loader}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 3387 3387"
        role="image"
        id="logo"
      >
        <path
          className="fil0"
          d="M1289 1936l130 80 0 491 -535 -328c-14,-9 -23,-23 -23,-40l0 -535 0 -377 0 -396 -285 160c-21,12 -33,33 -33,57l0 1261c0,23 11,43 31,56l845 518 0 278 -1074 -659c-24,-15 -38,-39 -38,-67l0 -1519c0,-29 15,-54 40,-69l855 -480c0,214 0,427 0,641l465 -261c15,-8 31,-8 46,0l786 440c15,9 24,24 24,41l0 910c0,17 -9,32 -24,41l-522 296 0 361 831 -472c21,-12 33,-33 33,-57l0 -1259c0,-24 -12,-45 -33,-57l-1087 -608c-20,-11 -44,-11 -64,0l-240 135 0 -272 233 -131c25,-14 52,-14 77,0l1309 733c26,14 40,39 40,69l0 1517c0,29 -15,54 -40,68l-1360 771c-14,8 -29,11 -44,10l0 -970c0,-73 36,-135 100,-171l362 -206c8,-4 12,-12 12,-21l0 -455c0,-9 -4,-16 -12,-21l-393 -220c-7,-4 -16,-4 -23,0l-391 220c-8,4 -12,12 -12,21l0 456c0,8 4,16 11,20z"
        />
      </svg>
    </StyledLoader>
  );
}

export default Loader;