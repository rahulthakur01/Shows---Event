import React from "react";

const Card = ({ name, description, image, price, date }) => {
  return (
    <>
      <div className=" w-[400px]">
        <div className=" shadow-md flex flex-col items-center m-2 p-2 rounded-md">
          <img src={image} className="w-[320px]"/>
          <h1  className="text-xl font-bold capitalize">Name: {name}</h1>
          <p  className="text-[14px] font-semibold capitalize">Desc: {description}</p>
          <p className=" font-semibold ">Price: {price}</p>
          <p className=" font-semibold ">Date: {date}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
