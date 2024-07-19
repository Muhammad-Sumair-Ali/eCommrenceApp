import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./style.css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoAddCircleOutline } from "react-icons/io5"; 
const Categories = () => {
  return (
<>
  <div className=" bg-gradient-to-r from-blue-800 to-violet-500  dark:text-white dark:from-violet-700 dark:to-fuchsia-800 px-4 py-5 mt-10 text-white overflow-hidden whitespace-nowrap overflow-hidden">
    <div className="marquee text-center text-sm font-medium inline-flex items-center space-x-4">
      <span>Men's Fashion</span> <IoAddCircleOutline />
      <span>Women's Fashion</span> <IoAddCircleOutline />
      <span>Kids Fashion</span> <IoAddCircleOutline />
      <span>Winter Collection</span> <IoAddCircleOutline />
      <span>Summer Collection</span> <IoAddCircleOutline />
      <span>Sports Collection</span> <IoAddCircleOutline />
    </div>
  </div>
  <div
    className="w-screen bg-white dark:bg-gray-900 dark:text-white px-5 py-3 text-white flex items-center justify-center px-3 lg:px-8 mb-4 mt-7 overflow-hidden"
  >
    <a
      className="bg-gradient-to-r from-blue-800 to-violet-500 text-white border-gray-400  dark:text-white dark:from-violet-600 dark:to-fuchsia-500 inline-block rounded-md text-center font-small hover:bg-indigo-700 p-2 shadow-2xl border-0 w-72"
    >
    Some Popular Categories
    </a>
  </div>
    <div className='w-screen box-border p-8 md-p-16 dark:bg-gray-900 '> 
      <Swiper
        slidesPerView={4}
        spaceBetween={20} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper flex flex-wrap justify-center"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20, 
          },
        }}
      >

        


        
        <SwiperSlide>
          <a href="#" className="block dark:bg-zinc-800 dark:text-white relative rounded-tl-3xl drop-shadow-xl dark:border-white ">
           

            <img
              src="https://www.pakicouture.com/wp-content/gallery/mens-wear-mehndi-2021/mens-wear-mehndi-2021-11.jpg"
              alt=""
              className="md:h-52 h-72 w-full  rounded-tl-2xl rounded-tr-2xl object-cover"
            />
            <span
              className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-2 py-2 font-small uppercase tracking-widest text-white dark:text-white"
            >
              Save 10%
            </span>
            <div className="p-4 text-center bg-gradient-to-r from-violet-100 to-blue-200 text-white rounded-lg dark:text-white dark:from-slate-800 dark:to-zinc-800 ">
              <strong className="text-md font-small text-gray-900 dark:text-white"> Men's Wear Mehndi 2024 </strong>

              <p className="md:hidden mt-1 text-small text-pretty text-gray-700 dark:text-white">
                Lorem ipsum dolor sit amet
              </p>

              <span
                className="mt-2 block rounded-md border-none transition hover:scale-105 bg-gradient-to-r from-blue-800 to-violet-500 text-white border-gray-400  dark:text-white dark:from-violet-700 dark:to-yellow-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-indigo-700 hover:text-white"
              >
                More
              </span>
               <span
                className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-2 py-2 font-small uppercase tracking-widest text-white dark:text-white"
              >
                Save 10%
              </span> 
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="block dark:bg-zinc-800 dark:text-white relative rounded-tl-3xl drop-shadow-xl dark:border-white ">
           

            <img
              src="https://i.pinimg.com/originals/b1/81/53/b18153759726699b4e8c75870a84ab5d.jpg"
              alt=""
              className="md:h-52 h-72 w-full  rounded-tl-2xl rounded-tr-2xl object-cover"
            />

            <div className="p-4 text-center bg-gradient-to-r from-violet-100 to-blue-200 text-white rounded-lg dark:text-white dark:from-slate-800 dark:to-zinc-800 ">
              <strong className="text-md font-small text-gray-900 dark:text-white">  Men's Kurta </strong>

              <p className="md:hidden mt-1 text-small text-pretty text-gray-700 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing..
              </p>

              <span
                 className="mt-2 block rounded-md border-none transition hover:scale-105 bg-gradient-to-r from-blue-800 to-violet-500 text-white border-gray-400  dark:text-white dark:from-violet-700 dark:to-yellow-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-indigo-700 hover:text-white"
              >
               More
              </span>
              {/* <span
                className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-2 py-2 font-small uppercase tracking-widest text-white dark:text-white"
              >
                Save 10%
              </span> */}
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="block dark:bg-zinc-800 dark:text-white relative rounded-tl-3xl drop-shadow-xl dark:border-white ">
           

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmIQZkPynF_dCj-YfsJHDomo9qk5mPOzuVZi3YMUvBmRhCBxPxa1Tcv9A0qmuAK6YNPU&usqp=CAU"
              alt=""
              className="md:h-52 h-72 w-full  rounded-tl-2xl rounded-tr-2xl object-cover"
            />

            <div className="p-4 text-center bg-gradient-to-r from-violet-100 to-blue-200 text-white rounded-lg dark:text-white dark:from-slate-800 dark:to-zinc-800 ">
              <strong className="text-md font-small text-gray-900 dark:text-white">  Men's  </strong>

              <p className="md:hidden mt-1 text-small text-pretty text-gray-700 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing..
              </p>

              <span
                 className="mt-2 block rounded-md border-none transition hover:scale-105 bg-gradient-to-r from-blue-800 to-violet-500 text-white border-gray-400  dark:text-white dark:from-violet-700 dark:to-yellow-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-indigo-700 hover:text-white"
              >
               More
              </span>
              <span
                className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-2 py-2 font-small uppercase tracking-widest text-white dark:text-white"
              >
                Save 10%
              </span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="block dark:bg-zinc-800 dark:text-white relative rounded-tl-3xl drop-shadow-xl dark:border-white ">
           

            <img
              src="https://edge.pk/cdn/shop/products/DSC03014_01.jpg?v=1680076382"
              alt=""
              className="md:h-52 h-72 w-full  rounded-tl-2xl rounded-tr-2xl object-cover"
            />

            <div className="p-4 text-center bg-gradient-to-r from-violet-100 to-blue-200 text-white rounded-lg dark:text-white dark:from-slate-800 dark:to-zinc-800 ">
              <strong className="text-md font-small text-gray-900 dark:text-white">  Men's Shalwar Kameez </strong>

              <p className="md:hidden mt-1 text-small text-pretty text-gray-700 dark:text-white">
                Lorem ipsum dolor sit amet 
              </p>

              <span
                c className="mt-2 block rounded-md border-none transition hover:scale-105 bg-gradient-to-r from-blue-800 to-violet-500 text-white border-gray-400  dark:text-white dark:from-violet-700 dark:to-yellow-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-indigo-700 hover:text-white"
              >
               More
              </span>
             
            </div>
          </a>
        </SwiperSlide>
       

        
      </Swiper>
    </div>
</>
  );
};

export default Categories;
