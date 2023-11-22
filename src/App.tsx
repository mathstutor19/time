import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './App.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Card from './components/Card/Card';
import sliderData from './data/SliderData';
import Title from './components/Title/Title';
const ITEMS_PER_PAGE = 8;
interface SliderItem {
  id: number;
  year: string;
  text: string;
}
function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentItems, setCurrentItems] = useState<SliderItem[]>([]);
  useEffect(() => {
    const startIndex: number = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex: number = startIndex + ITEMS_PER_PAGE;
    const slicedItems: SliderItem[] = sliderData.slice(startIndex, endIndex);

    setCurrentItems(slicedItems);
  }, [currentPage]);

  const rightSlider = (): void => {
    setCurrentPage(currentPage + 1);
  };
  function leftSlider() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="container">
      <Title />
      <svg className='circle-wrapper' width="530" height="530" viewBox="0 0 530 530" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="265" cy="265" r="264" stroke="#42567A" />
        <circle cx="132" cy="36" r="3" fill="#42567A" />
        <circle cx="2" cy="263" r="3" fill="#42567A" />
        <circle cx="120" cy="486" r="3" fill="#42567A" />
        <circle cx="410" cy="486" r="3" fill="#42567A" />
        <circle cx="528" cy="263" r="3" fill="#42567A" />
        <circle cx="392" cy="36" r="3" fill="#42567A" />
      </svg>
      <div className="years-wrapper">
        <h2 className='first-year'>{currentItems['0']?.year}</h2>
        <h2 className='second-year'>{currentItems[`${currentItems?.length - 1}`]?.year}</h2>
      </div>
      <div className="main-slider">
        <p className='main-slider-text'>0{currentPage}/06</p>
        <div className="main-slider-wrapper">
          <div className="main-slider-left" onClick={leftSlider}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="24.5" transform="matrix(-1 0 0 1 50 0)" stroke="#42567A" stroke-opacity="0.5" />
              <path d="M27.4999 18.75L21.2499 25L27.4999 31.25" stroke="#42567A" stroke-width="2" />
            </svg>
          </div>
          <div className="main-slider-right" onClick={rightSlider}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="24.5" transform="matrix(-1 0 0 1 50 0)" stroke="#42567A" stroke-opacity="0.5" />
              <path d="M27.4999 18.75L21.2499 25L27.4999 31.25" stroke="#42567A" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },

        }}
        spaceBetween={80}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {currentItems.map((item: SliderItem) => (
          <SwiperSlide><Card title={item.year} text={item.text} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
