import React from "react";

export default function GifGridItem({title, url}) {
  return (
    <div>
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
}
