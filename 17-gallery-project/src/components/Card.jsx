import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-45 w-48  bg-white rounded-xl ">
          <img
            className="h-full w-full  object-cover border-2 border-white rounded-xl "
            src={props.elem.download_url}
            alt="Please wait..."
          />
        </div>
        <h2 className="flex justify-center text-center">{props.elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;
