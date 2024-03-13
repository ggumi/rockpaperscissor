import React, { Component } from 'react';

const Box = (props) => {
  let result
  if (props.title === "computer" && props.result!=="tie"&& props.result!=="") {
    result = props.result ==="win" ? "lose" : "win"
  } else{
    result = props.result
  }
console.log("result",result)
  return (
    <div className="box" >
      <h2>{props.title}</h2>
      <img className="item-img" src={props.item && props.item.img}/>
      <h2>{result}</h2>
    </div>
  );
}

export default Box;

