import React from "react";
import TopFive from "./TopFive";
import TopNews from "./TopNews";

const Banner = () => {
  return (
    <>
      <section className='bannerSection'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <TopNews title='Title here' />
            </div>
            <div className='col-md-5'>
              <TopFive title='Title here' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
