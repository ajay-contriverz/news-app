import React from "react";

export default function TopNews(props) {
  return (
    <>
      <div className='topNewsBox'>
        <div className='newsImg'>
          <img src='props.source' alt='props.alt' />
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
}
