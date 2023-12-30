import React, { type FC } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
import TeamPicture from "../TeamPicture";

interface TeamSwiperProps {
  allTeamsDetails: getAllManagementData[];
}

const TeamSwiper: FC<TeamSwiperProps> = ({ allTeamsDetails }) => {
  return (
    <>
      {/* <Swiper
      slidesPerView={1}
      spaceBetween={20}
      modules={[Pagination, Navigation]}
      navigation={true}
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1536: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      className="w-full h-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-10 "
    >
      {allTeamsDetails.map((personDetails: any) => (
        <SwiperSlide key={personDetails._id}>
          <TeamPicture personDetails={personDetails} />
        </SwiperSlide>
      ))}

      {/* <SwiperButtonComponent /> 
    </Swiper> */}
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-10 ">
        {allTeamsDetails.map((personDetails) => (
          <TeamPicture personDetails={personDetails} key={personDetails._id} />
        ))}
      </div>
    </>
  );
};

export default TeamSwiper;
