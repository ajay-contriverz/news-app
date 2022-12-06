import React from "react";
import { Link } from "react-router-dom";

export default function TopFive(props) {
  return (
    <>
      <div className='topFiveBox'>
        <div className='singleNews'>
          <div className='row'>
            <div className='col-auto'>
              <div className='smImg'>
                <img src={props.source} alt={props.title} />
              </div>
            </div>
            <div className='col'>
              <div className='singleContent'>
                <h4>
                  <Link to='/'>{props.title}</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
