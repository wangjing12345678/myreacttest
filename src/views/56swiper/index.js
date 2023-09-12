import React, { Component } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default class App extends Component {
  state = {
    list: ["2222", "1111", "333"],
    mySwiper: null,
  };
  componentDidMount() {}
  render() {
    return (
      <Swiper
        style={{ background: "red", height: "500px" }}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {this.state.list.map((x, index) => (
          <SwiperSlide key={index}>{x}</SwiperSlide>
        ))}
      </Swiper>
    );
  }
}
