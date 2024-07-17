import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { IoMdClose, IoMdPhotos } from 'react-icons/io';
import { useAddPost } from '../../action/usePost';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';

const AddPost = () => {
  const [authData] = useAuth();
  const [open, setOpen] = useState(false);
  const {
    title,
    setTitle,
    description,
    setDescription,
    photo,
    setPhoto,
    price,
    setPrice,
    addPost,
    handleFileChange,
    error,
  } = useAddPost();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost();
    if (!error) {
      setOpen(false); 
      setPrice('');
      setDescription('');
      setPhoto(null);
    }
  };

  return (
    <>
      {authData ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-violet-400 text-white border-gray-400 dark:text-white dark:from-violet-700 dark:to-fuchsia-700 inline-block rounded-md border border-transparent px-3 py-2 text-center font-medium hover:bg-indigo-700 border-0 md:mx-2"
        >
          Sell Product
        </button>
      ) : (
        <NavLink to="/login">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-violet-400 text-white border-gray-400 dark:text-white dark:from-violet-700 dark:to-fuchsia-700 inline-block rounded-md border border-transparent px-3 py-2 text-center font-medium hover:bg-indigo-700 border-0 md:mx-2"
          >
            Sell Product
          </button>
        </NavLink>
      )}

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10   ">
        <DialogBackdrop className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-5 py-8 text-center">
            <DialogPanel className="relative w-full md:w-3/4 max-w-3xl transform overflow-hidden rounded-2xl dark:bg-gray-600/25 bg-slate-50 backdrop-blur-sm dark:backdrop-blur-2xl  dark:text-white p-8 text-left shadow-xl transition-all bg-white text-dark z-10">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 hover:text-gray-500 text-2xl"
                aria-label="Close dialog"
              >
                <IoMdClose />
              </button>
              <div>
                <h2 className="text-lg font-semibold leading-7 ">Add Post Details</h2>
                <p className="mb-1 text-sm leading-2">
                  This Product will be displayed publicly so be careful what you share.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label htmlFor="title" className="block text-sm font-medium leading-6">
                      Product Title
                    </label>
                    <input
                      required
                      id="title"
                      name="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Product Title"
                      autoComplete="title"
                      className="mt-2 block w-full dark:bg-transparent p-2 rounded-md border-0 py-1.5 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className=" col-span-full">
                    <label htmlFor="price" className="block text-sm font-medium leading-6">
                      Product Price
                    </label>
                    <input
                      required
                      id="price"
                      name="price"
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Product Price"
                      autoComplete="price"
                      className="mt-2 block w-full dark:bg-transparent p-2 rounded-md border-0 py-1.5 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="description" className="block text-sm font-medium leading-6">
                      Product Description
                    </label>
                    <textarea
                      minlength="10"
                      required
                      id="description"
                      name="description"
                      rows={2}
                      placeholder="Product Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-2 block w-full rounded-md border-0 dark:bg-transparent p-2 py-1.5 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <p className="mt-3 text-sm leading-6">Write a few details about the product.</p>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="photo" className="block text-lg font-medium leading-6">
                      Product photo
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-2 py-2">
                      <div className="text-center">
                        <div className="mt-4 flex text-sm leading-6 ">
                        <IoMdPhotos aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                          <label
                            htmlFor="photo"
                            className="relative cursor-pointer rounded-md -700 p-2 font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="photo"
                              name="photo"
                              type="file"
                              onChange={handleFileChange}
                              required
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 mb-1">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-5 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Upload Post
                </button>
                {error && <p className="text-red-500 text-sm mt-2">Error: {error.message}</p>}
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AddPost;
