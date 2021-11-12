import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GrifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="">{category}</h3>

      <div>
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
