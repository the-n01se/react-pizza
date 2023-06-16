import React from "react";
import ContentLoader from "react-content-loader";

const Skleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={315}
    height={531}
    viewBox="0 0 315 531"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="150" cy="130" r="130" />
    <rect x="20" y="275" rx="4" ry="4" width="260" height="30" />
    <rect x="20" y="325" rx="4" ry="4" width="260" height="90" />
    <rect x="20" y="444" rx="4" ry="4" width="85" height="27" />
    <rect x="130" y="435" rx="15" ry="15" width="150" height="45" />
  </ContentLoader>
);

export default Skleton;
