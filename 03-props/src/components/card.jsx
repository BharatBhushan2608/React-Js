import React from 'react'

const card = (props) => {

  console.log(props)

  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <h1> {props.user} , {props.age} </h1>
        <p>{props.about}</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default card
