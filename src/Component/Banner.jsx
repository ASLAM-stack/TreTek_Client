import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

 
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 
const Banner = () => {
    return (
        <div className='mt-12'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <div className="bg-[url('/1.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[500px] bg-cover flex flex-col justify-center bg-center rounded-2xl">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#9253ff]">TreTek</h1>
        <p className="text-white text-base ">
        Embark on unforgettable journeys with our travel agency<br /> where dreams meet destinations and experiences become memories.
        </p>
        <p></p>
        <div className="space-x-2">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Book Now
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Explore
            </span>
          </a>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/2.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[500px] bg-cover flex flex-col items-center justify-center bg-center rounded-2xl">
        <h1 className="font-work font-bold text-4xl md:text-7xl bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">TreTek</h1>
        <p className="text-white text-base text-center ">
        Embark on unforgettable journeys with our travel agency<br /> where dreams meet destinations and experiences become memories.
        </p>
        <p></p>
        <div className="space-x-2">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Book Now
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Explore
            </span>
          </a>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/5.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[500px] bg-cover flex flex-col justify-center  bg-center rounded-2xl">
        <h1 className="font-work font-bold text-4xl md:text-7xl bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">TreTek</h1>
        <p className="text-white text-base ">
        Embark on unforgettable journeys with our travel agency<br /> where dreams meet destinations and experiences become memories.
        </p>
        <p></p>
        <div className="space-x-2">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Book Now
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Explore
            </span>
          </a>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="bg-[url('/4.jpg')] space-y-4 w-full pl-4 md:pl-16 h-[500px] bg-cover flex flex-col justify-center bg-center rounded-2xl">
        <h1 className="font-work font-bold text-4xl md:text-7xl text-[#9253ff]">TreTek</h1>
        <p className="text-white text-base ">
        Embark on unforgettable journeys with our travel agency<br /> where dreams meet destinations and experiences become memories.
        </p>
        <p></p>
        <div className="space-x-2">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Book Now
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Explore
            </span>
          </a>
        </div>
      </div>
        </SwiperSlide>
 
      </Swiper>
        </div>
    );
};

export default Banner;