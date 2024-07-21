import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import UserPic from "../panel/demo.png";
import { Link } from "react-router-dom";
import { _useAuth } from "../../action/useAuth";
import { UpdateProfile } from "../../action/usePost";

const UserProfile = () => {
  const { signOutUser } = _useAuth();
  const [open, setOpen] = useState(false);  
  const [authData] = useAuth();
  const { handleUpdateProfile, handleFileChange, displayName,  setDisplayName, email,  setEmail,phonenumber, setPhonenumber,loading, error,} = UpdateProfile()

  return (
    <>
      <img
        onClick={() => setOpen(true)}
        src={authData?.photoURL || UserPic}
        className="ring-1 ring-indigo-500 dark:ring-indigo-600 h-11 w-11 hover:text-blue-700 cursor-pointer bg-transparent rounded-full"
        style={{ marginLeft: "4px" ,marginRight:"2px"}}
        alt="User Avatar"
      />

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full dark:bg-gray-600/25 dark:backdrop-blur-sm bg-white/0 backdrop-blur-sm items-center justify-center p-4 text-center sm:p-6">
            <DialogPanel className="relative w-full max-w-xl transform overflow-hidden rounded-2xl dark:bg-zinc-700/75 bg-white/75 backdrop-blur-md p-6 text-left m-2 md:m-12 shadow-xl transition-all">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close dialog"
              >
                <IoMdClose />
              </button>
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Profile Settings
                </h2>

                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  <div className="flex flex-col items-center sm:flex-row sm:space-x-6">
                    <img
                      className="w-32 h-32 rounded-full object-cover ring-2 ring-indigo-500 dark:ring-indigo-600"
                      src={authData?.photoURL || UserPic}
                      alt="User Avatar"
                    />
                    <div className="flex flex-col items-center sm:items-start space-y-4 mt-4 sm:mt-0">
                      {authData?.uid ? (
                        <>
                          <label
                            htmlFor="photoFileInput"
                            className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                          >
                            Change Picture
                            <input
                              type="file"
                              id="photoFileInput"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                          <button
                            onClick={signOutUser}
                            type="button"
                            className="py-2 px-4 text-base font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50 dark:text-red-500 dark:border-red-500 dark:hover:bg-red-600 dark:hover:text-white"
                          >
                            Logout
                          </button>
                        </>
                      ) : (
                      
                          <Link to="/login"
                            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 z-10"
                          >
                            Login to View Profile
                          </Link>
                        
                      )}
                    </div>
                  </div>
                  {authData?.uid ? (
                    <>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white p-2"
                            placeholder={authData?.displayName}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white p-2"
                            placeholder={authData?.email}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phoneNumber"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            id="phoneNumber"
                            value={phonenumber}
                            onChange={(e) => setPhonenumber(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white p-2"
                            placeholder={authData?.phoneNumber || "Not Available"}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center text-center">
                        <button
                          type="submit"
                          disabled={loading}
                          className="p-2 w-3/4 text-center items-center px-4 py-2 border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                        >
                          {loading ? "Updating..." : "Update Profile"}
                        </button>
                      </div>
                      {error && <p className="text-red-500">{error}</p>}
                    </>
                  ) : (
                    <b className="dark:text-white text-center p-10 mt-5">
                      First login to view profile and change profile settings
                    </b>
                  )}
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default UserProfile;
