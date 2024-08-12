import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { IoMdClose } from 'react-icons/io';
import { BsCartPlus } from "react-icons/bs";
import toast from 'react-hot-toast';

export const AddToCart = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
 const total = products?.reduce((acc, product) => acc + Number.parseInt(product.price), 0);
  useEffect(() => {
    if (open) {
      const cartItems = JSON.parse(localStorage.getItem("carts")) || [];
      setProducts(cartItems);
    }
  }, [open]);

  const removeCart = (item) => {
    const updatedCart = products.filter(product => product.id !== item.id);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
    toast.success("Product removed from cart");
  };

  return (
    <>
      <BsCartPlus size={32} onClick={() => setOpen(true)} />
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 backdrop-blur-sm bg-opacity-50 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white/50 backdrop-blur-2xl shadow-xl dark:bg-gray-900 dark:text-gray-200">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium ">Shopping cart</DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <IoMdClose aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {products && products.map((product,index) => (
                            <li key={index} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  alt={product.title}
                                  src={product.photoURL}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium ">
                                    <h3>
                                      <a>{product.title}</a>
                                    </h3>
                                    <p className="ml-4">{product?.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm ">black, blue</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty 1</p>
                                  <div className="flex">
                                    <button onClick={() => removeCart(product)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-2 py-4 sm:px-6">
                  <b className='text-lg'> Total Amount : {total}</b>
                    <div className="mt-3">
                      <a
                      
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                       
                        Checkout
                      </a>
                    </div>
                   
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
