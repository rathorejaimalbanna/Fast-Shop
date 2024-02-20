import React from 'react';

// ExampleCarouselImage component renders an image for the carousel
export default function ExampleCarouselImage(props) {
  return (
    <div>
      {/* Render image with specified URL and style */}
      <img src={props.text} alt="" style={{ height: "300px" }} />
    </div>
  );
}
