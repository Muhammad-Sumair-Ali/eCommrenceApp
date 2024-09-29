import React, { useState,useEffect } from 'react';
import { useGetAllPosts } from '../../action/usePost';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { MdSell } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const SearchItems = () => {
  const { posts, loading, error } = useGetAllPosts();
  const [searchQuery, setSearchQuery] = useState(null)
  const [data, setData] = useState(null)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("search...")
  const navigate = useNavigate();


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(item => setData(item));
  }, []);
  
  const filteredTodos = data?.products?.filter(item =>
    item.title?.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  // console.log(filteredTodos)
  const updateMessage = () => {
    if (searchQuery === '') {
      setMessage("  ");
    } else if (filteredTodos?.length === 0) {
      setMessage("Search Not Found !!!")
    } else {
      setMessage("Products Found")
    }
  };

  React.useEffect(() => {
    updateMessage();
  }, [searchQuery, filteredTodos]);

  //if (error) {
  //  return <div>Error loading posts: //{error.message}</div>;}

  return (
    <div>  
      <IoSearchOutline className='rounded-lg text-gray-700 mx-2 bg-gray-200/50  dark:text-gray-100 dark:bg-gray-700/75 p-1 hover:text-blue-700 dark:hover:text-fuchsia-700 ' size={36} onClick={() => setOpen(true)}/>
    
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10   ">
        <DialogBackdrop className="fixed inset-0 bg-gray-700/25 backdrop-blur-sm bg-opacity-75 transition-opacity" />
      
        <div className="fixed inset-x-0 top-0 z-10 w-screen ">
          <div className="flex min-h-full items-center justify-center px-5 py-8 text-center">
            <DialogPanel className="relative w-full md:w-3/4 max-w-3xl transform rounded-2xl dark:bg-gray-600/25 bg-slate-50 backdrop-blur-sm dark:backdrop-blur-2xl  dark:text-white p-8 text-left shadow-xl transition-all bg-gray-200 text-dark z-10">

              <div className='flex items-center align-center justify-between m-0 text-gray-900 w-9/12 p-1 rounded-lg ring-2 m-auto'>
                <input
                  type="text"
                  className="p-2 rounded-lg text-gray-900 w-full outline-none "
                  placeholder="Search All Over Pakistan"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <IoIosCloseCircle className='ml-2' size={35} onClick={() => setSearchQuery(null)}/>
                </div>
              <h2 className='text-blue-900 text-lg text-center p-1 dark:text-fuchsia-700'>{message} </h2>

              
              <div className="relative w-full mt-4">
         
              {filteredTodos && filteredTodos?.map((item) => ( 
                <div key={item?.id}  onClick={() => navigate(`/product/${item.id}`)} className="bg-gray-200 dark:bg-gray-800 text-gray-700  rounded-lg inset-y-0 r cursor-pointer">
                  <div className="w-full flex justify-center align-center px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 mb-2">
                    <div className="flex-shrink-0 relative ">
                      <img
                        className="rounded-full w-11 h-11"
                        src={item?.thumbnail}
                        alt="image"
                      />
                      <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                        <MdSell
                          className="w-2 h-2 text-white"
                          fill="currentColor"
                        />
                    
                      </div>
                    </div>
                    <div className="w-full ps-3">
                      <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white mr-1">
                          {item?.title}
                        </span>
                        { item?.description}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-500">
                        {/* Price: {item?.price} */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>








      



      
    </div>
  );
};

export default SearchItems;
