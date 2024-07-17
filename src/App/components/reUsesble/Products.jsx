import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllPosts } from '../../action/usePost';
import CardsSkeleton from '../panel/CardsSkeleton';

const Products = () => {
  const navigate = useNavigate();
  const { posts, loading, error, fetchPosts } = useGetAllPosts();

  useEffect(() => {
    fetchPosts();
  }, []);


  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-screen overflow-hidden">
      <div className="pt-10 flex flex-wrap align-center justify-center gap-4 sm:gap-8 dark:bg-zinc-800 overflow-hidden">
        <div className="w-screen bg-indigo-500 dark:bg-zinc-700 dark:text-white px-2 py-3 text-white flex items-center justify-between px-3 lg:px-4 mb-4">
          <p className="text-center flex align-center font-small">
            Our Latest + Products 
          </p>

          <a className="bg-gradient-to-r from-blue-800 to-violet-500 text-white border-gray-400 dark:text-white dark:from-violet-700 dark:to-fuchsia-800 inline-block rounded-md border border-transparent px-5 py-2 text-center font-small hover:bg-indigo-700 shadow-2xl border-0 w-48">
            Explore Products
          </a>
        </div>
       
      
        {posts &&
          posts.map((product) => (
            <a
              key={product.id}
              className="group relative block overflow-hidden bg-gradient-to-r from-violet-100 to-blue-200 text-white rounded-lg dark:text-white dark:from-slate-700 dark:to-zinc-600 w-96 sm:w-60 md:w-72 lg:w-80 mb-4"
            >
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
                src={product?.photoURL}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 dark:border-gray-900 bg-white dark:bg-zinc-700 dark:text-white p-6">
                <div className='flex justify-between align-center'>
                  <span className="whitespace-nowrap bg-gradient-to-r from-blue-800 to-violet-500 text-white border-black dark:text-white dark:from-violet-700 dark:to-yellow-600 shadow-xl px-3 py-1.5 text-md font-medium rounded-md">
                    New

                  </span>
                   <small className="whitespace-nowrap  shadow-xl px-3 py-1.5 text-md font-medium rounded-md uppercase text-gray-800  dark:text-white">User : {product?.userName}</small>

                </div>
                <div className='flex justify-between align-center'>
                <h3 className="mt-3 text-md font-medium text-gray-900 dark:text-gray-200"> <i>Title : </i>
                  {product?.title}
                </h3>  
                <p className="mt-1.5 text-sm text-gray-700 dark:text-white">Price : {product?.price}</p>
                
                 
                </div>
                <div className='flex justify-between align-center'>
                
                </div>
                <small className="mt-1.5 text-sm text-gray-700 dark:text-white ">{product?.description}</small>
               
                <div className="mt-4 flex gap-2">  
                  <button className="w-72 p-4 text-sm font-medium transition hover:scale-105 bg-gradient-to-r from-blue-800 to-violet-500 text-white border-gray-400 dark:text-white dark:from-violet-700 dark:to-yellow-400 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium hover:bg-indigo-700 shadow-2xl border-0">
                    Add to Cart
                  </button>
     
                  <button
               
                    className="w-28 text-sm font-medium transition hover:scale-105 text-white border-gray-500 dark:bg-gray-500 bg-zinc-500 inline-block rounded-md border border-transparent text-center dark:text-white font-medium hover:bg-indigo-600 dark:hover:bg-blue-600 shadow-2xl border-0"
                  >
                    Details
                  </button>
                </div>
              </div>
            </a>
          ))}
        
      </div>
       {loading ? <CardsSkeleton/> : ""}
      
      <section className="overflow-hidden md:grid md:grid-cols-3 bg-gradient-to-r from-violet-100 to-blue-200 text-white dark:text-white dark:from-slate-700 dark:to-zinc-600">
        <img
          alt=""
          src="https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png"
          className="h-32 w-full object-cover md:h-72 bg-dark"
        />

        <div className="p-2 text-center sm:p-4 md:col-span-2 lg:p-4 bg-gradient-to-r from-violet-100 to-blue-100 text-zinc-800 dark:text-white dark:from-slate-700 dark:to-zinc-600">
          <p className="text-sm font-semibold uppercase tracking-widest">Run with the pack</p>

          <h2 className="mt-6 font-black uppercase text-4xl">
            Get<span className="font-black sm:text-5xl lg:text-6xl dark:text-fuchsia-700"> 20% </span>
            off
            <span className="mt-2 block text-sm">On your next order over $50</span>
          </h2>

          <a className="mt-8 inline-block py-4 hover:bg-zinc-100 w-full bg-gradient-to-r from-slate-800 to-zinc-700 text-white border-gray-400 dark:text-white dark:from-zinc-800 dark:to-gray-400 text-sm font-bold uppercase tracking-widest">
            Get Discount
          </a>

          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until 24th July, 2024 *
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
