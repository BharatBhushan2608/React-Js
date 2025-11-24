import React from "react";
import { Bookmark } from "lucide-react";


const Card = (props) => {

  console.log(props) 
  return (
    <div className="card">
      <div className="top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0trEaZSkosvnI6UfYQGWZ8OtT0uJHbXyKWfHPRu8OCbHhIJKbg4pOFOH34KDc1cFrgA&usqp=CAU"
          alt=""
        />
        <button>
          Save <Bookmark size={15} />{" "}
        </button>
      </div>

      <div className="centre">
        <h3>
           {props.company}
          <span> {props.datepost}</span>
        </h3>
        <h2>{props.post}</h2>
        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4> {props.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.payment}</h3>
          <p>{props.locality}</p>
        </div>

        <button> Apply now</button>
      </div>
    </div>
  );
};

export default Card;
