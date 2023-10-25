// About.js

import React from "react";

function About({ image }) {
  // Set a default image source if no prop is passed
  const defaultImageSrc = "https://via.placeholder.com/215";

  return (
    <aside>
      <img
        src={image || defaultImageSrc}
        alt="blog logo"
      />
      <p>About this blog</p>
    </aside>
  );
}

export default About;
