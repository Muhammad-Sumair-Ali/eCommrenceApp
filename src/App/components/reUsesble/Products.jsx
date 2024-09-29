import React, { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { addCart, useAddPost, useGetAllPosts } from '../../action/usePost';
import CardsSkeleton from '../panel/CardsSkeleton';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import { MdDeleteForever } from "react-icons/md";


const Products = () => {
  const [data, setData] = useState(null);
  const [authData] = useAuth()
  const navigate = useNavigate();
  const { posts, loading, error, fetchPosts } = useGetAllPosts();
  const {deletPost } = useAddPost();
  
  
  const addItem = (item) => {
    addCart(item)
  }
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(item => setData(item));
  }, []);
 

  //if (error) {
   // return <div>Error: {error.message}</div>;
  //}

  return (
    <div className="w-screen overflow-hidden">
      <div className="pt-10 flex flex-wrap align-center justify-center gap-4 sm:gap-8 dark:bg-gray-900 overflow-hidden pb-16">
        <div className="w-screen bg-indigo-500 backdrop-blur-lg dark:bg-gray-800 dark:text-gray-100 px-2 py-3 text-white flex items-center justify-between px-3 lg:px-4 mb-4">
         
          <p className="text-center flex align-center font-small">
            Our Latest + Products 
          </p>
         
          <a className="bg-gradient-to-r from-blue-800 to-violet-500 text-white border-gray-400 dark:text-white dark:from-violet-700 dark:to-fuchsia-800 inline-block rounded-md border border-transparent px-5 py-2 text-center font-small hover:bg-indigo-700 shadow-2xl border-0 w-48">
            Explore Products
          </a>
         </div>
            
     





        
        {data &&
          data?.products?.map((product) => (
            <a
              key={product.id}
              className="group relative block overflow-hidden bg-gradient-to-r from-violet-100 to-blue-200 text-white rounded-lg dark:text-white dark:from-slate-700 dark:to-zinc-600 w-96 sm:w-60 md:w-72 lg:w-80 mb-4"
            >
              <button className="absolute start-5 top-5 z-10 rounded-full bg-transparent  text-red-600 hover:bg-gray-700 transition" >
                {product?.userEmail === authData?.email ?  <MdDeleteForever className='bg-gray-200/75 rounded-2xl p-1' size={42} onClick={() => deletPost(product?.id)}/> : ""}
              </button>
           
              <button className="absolute end-5 top-5 z-10 rounded-full bg-white p-3 text-gray-900 transition hover:bg-slate-600 hover:text-yellow-400">
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
          
              <img
                src={product?.thumbnail}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-800 dark:text-white p-6">
                <div className="flex justify-between align-center">
                  <span className="whitespace-nowrap bg-gradient-to-r from-blue-800 to-violet-500 text-white border-black dark:text-white dark:from-violet-700 dark:to-yellow-600 shadow-xl px-3 py-1.5 text-md font-medium rounded-md">
                    New
                  </span>
        <div className='flex m-0 text-gray-900 p-0 gap-2 items-center'>
                    <label htmlFor='seller' className="m-0 p-0 dark:text-gray-100" >Seller:</label> 
                    {product?.userEmail ? <img src={authData?.email === product?.userEmail ? authData?.photoURL : product?.userImage} className="ring-1 shadow-2xl rounded-2xl h-10 w-10" id='seller' alt="image not found"/> : <p className="dark:text-gray-100 m-0 ">{product?.userName}</p>}
                  
                  </div> 
                                   
                </div>
                
                <div className="flex justify-between align-center">
                  <h3 className="mt-3 text-md font-medium text-gray-900 dark:text-gray-200">
                    <i>Title: </i>
                    {product?.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-700 dark:text-white">
                    Price: {product?.price}
                  </p>
                </div>
                <small className="mt-1.5 text-sm text-gray-700 dark:text-white">
                  {product?.description}
                </small>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => addItem(product)}
                    className="w-72 p-4 text-sm font-medium transition hover:scale-105 bg-gradient-to-r from-blue-800 to-violet-500 text-white border-gray-400 dark:text-white dark:from-violet-700 dark:to-yellow-400 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium hover:bg-indigo-700 shadow-2xl border-0"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => navigate(`/product/${product?.id}`)}
                    className="w-28 text-sm font-medium transition hover:scale-105 text-white border-gray-500 dark:bg-gray-500 bg-zinc-500 inline-block rounded-md border border-transparent text-center dark:text-white font-medium hover:bg-indigo-600 dark:hover:bg-blue-600 shadow-2xl border-0"
                  >
                    Details
                  </button>
                </div>
              </div>
            </a>
          ))}
      </div>
      {loading ? <CardsSkeleton /> : ""}
    </div>
  );
};

export default Products;


