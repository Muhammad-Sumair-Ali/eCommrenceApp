import Categories from "../reUsesble/Categories"

const Hero = () => {
 
  return (
    <div className="text-dark dark:text-white dark:bg-gray-900">
      <div className="relative overflow-hidden ">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg ">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl ">
                  <span className="text-violet-700 dark:text-indigo-700">

                   Discover 
                  </span> the <span className="text-indigo-700 dark:text-yellow-400">Latest</span> Trends in <span className="text-violet-700 dark:text-indigo-700">
                
                Fashion
                </span>
              </h1>
              <p className="mt-4 text-xl text-gray-800 dark:text-gray-300">
                Shop Now and Elevate Your Style!
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://i.pinimg.com/736x/d7/dc/a3/d7dca3fbe98afe808043cf2c05606120.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbu0rksCt3hibgi8VoNOwXCDsZWLXqJ1Wuwg&s"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://janan.com/cdn/shop/collections/MENS_2_new_banner.jpg?v=1556015008"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://i.ebayimg.com/images/g/LcYAAOSws-ZhGrH-/s-l400.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://i.pinimg.com/564x/e2/61/72/e261722a149688a1402e8445e6b3775b.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-biL9gE3zXvfbdE_BdCVSredMIDx4xDZKGXmNVPMHoYOvynGG-5VJiP24VuRV6QQ8jE&usqp=CAU"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgj-P3tY9BIz3KaweZO2Zzas8qVzf5atZFvPt9Axegc-sfiOGT7wOLSXuihv_jsqcDXQ&usqp=CAU"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="bg-gradient-to-r from-blue-800 to-violet-500 text-white border-gray-400  dark:text-white dark:from-violet-700 dark:to-yellow-400 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium hover:bg-indigo-700 shadow-2xl border-0"
                >
                  Explore Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories/>
    </div>
   
  )
}
export default Hero