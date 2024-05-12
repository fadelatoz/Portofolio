import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./styles.css";

type sliderProps = {
    children? : React.ReactNode,
    responsive? : any,
    autoPlay? : boolean,
    swipeable? : boolean,
    draggable? : boolean,
    showDots? : boolean,
    infinite? : boolean,
    partialVisible? : boolean,
    dotListClass? : string


}

const Slider : React.FC<sliderProps> =  ({children,responsive, autoPlay,swipeable,draggable,showDots,infinite,partialVisible,dotListClass} : sliderProps) => {
  return (
    <div className="m-5">
      <Carousel
        responsive={responsive}
        autoPlay={autoPlay}
        swipeable={swipeable}
        draggable={draggable}
        showDots={showDots}
        infinite={infinite}
        partialVisible={partialVisible}
        dotListClass={dotListClass}
      >
        {children}
      </Carousel>
    </div>
  );
};
export default Slider;
