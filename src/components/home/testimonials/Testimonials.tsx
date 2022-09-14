import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CommentCard from './CommentCard';
import { Title } from '../../../styles/app';
import { TestimonialsStack } from "../../../styles/components/home/testimonials";
import { UserFive, UserOne, UserSix, UserThree, UserTwo } from "../../../assets";


function Testimonials() {
      
      return (
            <TestimonialsStack spacing={1}>
                  <Title>TESTIMONIALS</Title>

                  <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                              clickable: true,
                        }}
                        autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay,]}
                        className="mySwiper"
                        breakpoints={{
                              600: {
                                    slidesPerView: 2,
                              },
                              960: {
                                    slidesPerView: 3,
                              },
                        }}
                  >
                        <SwiperSlide>
                              <CommentCard
                                    image={UserOne}
                                    name='Mike Tyson'
                                    designation='CEO. PT. Indomie'
                                    comment='Warmly little before cousin success entire men set. 
                                    Blessing it ladyship on sensible it is Equal an would is found seems of. Worse linen an of civil jokes leave offer.'
                              />
                        </SwiperSlide>

                        <SwiperSlide>
                              <CommentCard
                                    image={UserTwo}
                                    name='Pike Tyson'
                                    designation='CEO. PT. Indomie'
                                    comment='Warmly little before cousin success entire men set. 
                                    Blessing it ladyship on sensible it is Equal an would is found seems of. Worse linen an of civil jokes leave offer.'
                              />
                        </SwiperSlide>

                        <SwiperSlide>
                              <CommentCard
                                    image={UserThree}
                                    name='Rike Tyson'
                                    designation='CEO. PT. Indomie'
                                    comment='Warmly little before cousin success entire men set. 
                                    Blessing it ladyship on sensible it is Equal an would is found seems of. Worse linen an of civil jokes leave offer.'
                              />
                        </SwiperSlide>

                        <SwiperSlide>
                              <CommentCard
                                    image={UserFive}
                                    name='Hike Tyson'
                                    designation='CEO. PT. Indomie'
                                    comment='Warmly little before cousin success entire men set. 
                                    Blessing it ladyship on sensible it is Equal an would is found seems of. Worse linen an of civil jokes leave offer.'
                              />
                        </SwiperSlide>

                        <SwiperSlide>
                              <CommentCard
                                    image={UserSix}
                                    name='Sike Tyson'
                                    designation='CEO. PT. Indomie'
                                    comment='Warmly little before cousin success entire men set. 
                                    Blessing it ladyship on sensible it is Equal an would is found seems of. Worse linen an of civil jokes leave offer.'
                              />
                        </SwiperSlide>

                        <SwiperSlide>
                              <CommentCard
                                    image={UserThree}
                                    name='Kike Tyson'
                                    designation='CEO. PT. Indomie'
                                    comment='Warmly little before cousin success entire men set. 
                                    Blessing it ladyship on sensible it is Equal an would is found seems of. Worse linen an of civil jokes leave offer.'
                              />
                        </SwiperSlide>
                  </Swiper> 
            </TestimonialsStack>
      )
}

export default Testimonials