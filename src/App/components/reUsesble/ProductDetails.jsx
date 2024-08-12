import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../common/NavBar'; 
import { addCart, useAddPost, useGetDetails } from '../../action/usePost';
import { DetailsSkeleton } from '../panel/DetailsSkeleton';
import { useAuth } from '../../context/AuthContext';
import { MdDeleteForever } from "react-icons/md";

const ProductDetail = () => {
  const [authData] = useAuth()
  const { id } = useParams();
  const navigate = useNavigate();
  const {deletPost } = useAddPost()
  const addItem = (item) => {
    addCart(item)
  }
   const { data } = useGetDetails(id)
   if(!data){
     return <> 
        <NavBar />
       <DetailsSkeleton/>
       </>}
  
   
  return (
    <>
      <NavBar />
      <div className="bg-white dark:text-gray-100 dark:bg-gray-800 p-4">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={data?.photoURL}
                alt="Product"
                className="w-full h-auto rounded-lg shadow-md dark:shadow-2xl  mb-4"
                id="mainImage"
              />
            </div>
            
            <div className="w-full md:w-1/2 px-4">
              <button className="absolute end-10 top-50 z-10 rounded-full bg-transparent  text-red-600 hover:bg-gray-700 transition" >
                {data?.userEmail === authData?.email ?  <MdDeleteForever className='bg-gray-200/75 rounded-2xl p-1' size={48} onClick={() => deletPost(data?.id)}/> : ""}
              </button>
              <h2 className="text-3xl font-bold mb-2 dark:text-violet-500">
               {data?.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">Published: {data?.createdAt}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">{data?.price}</span>
                <span className="text-gray-500 line-through dark:text-gray-400">30% Off</span>
              </div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 text-gray-600 dark:text-gray-300">4.2 (17 reviews)</span>
              </div>
              
              <p className="dark:text-gray-200 text-gray-700 mb-6">
               {data?.description} 
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Color:</h3>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" />
                  <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" />
                 
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min={1}
                  defaultValue={1}
                  className="w-12 text-center rounded-md border-gray-300 text-gray-800 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex justify-between align-center mb-2 items-center" >
              <p className="flex items-center gap-2" >Seller Profile <img src={data.userImage || "https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"} className="h-10 w-10 rounded-xl" /> </p>
                <p>Seller Name : {data?.userName} </p>
              </div> 
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => addItem(data)}
                  className="bg-violet-600 flex gap-2 items-center text-white text-center px-7 py-4 rounded-md hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-2/3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add to Cart
                </button>
                
                <button onClick={() => navigate(-1)}
                  
                  className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-5 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  
                
                 Go Back
                </button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
