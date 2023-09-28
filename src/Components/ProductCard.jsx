import React from "react";
import Card from "./Card";

const ProductCard = ({ allFood, loading }) => {
  return (
    <>
      {loading ? (
        <div className="flex justify-center ">
          <img
            className=" w-16 py-20"
            src="https://i.gifer.com/ZZ5H.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="flex flex-wrap px-4 lg:px-10 ">
          {allFood?.map((food, index) => {
            return <Card food={food} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductCard;
