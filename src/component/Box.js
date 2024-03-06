import React, { Component } from 'react';

const Box = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img className="item-img" src={props.item && props.item.img}/>
      <h2>win</h2>
    </div>
  )
}

export default Box;

