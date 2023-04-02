import React from "react";

export const HTMLContent = ({ children }) => (
  <span dangerouslySetInnerHTML={{ __html: children }} />
);
