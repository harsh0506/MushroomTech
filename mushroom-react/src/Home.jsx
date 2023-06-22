import React , {useState} from 'react'

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
            <section style={{ width: "98.9vw" , background:'#395144' }} class="bg-white dark:bg-gray-900">
                <nav x-data={{ isOpen: false }} className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img className="w-auto h-6 sm:h-7"
                             src="https://firebasestorage.googleapis.com/v0/b/notes-5bb98.appspot.com/o/back1.jpg?alt=media&token=024dbe2c-d52f-4895-993e-9c60cebb1894"
                              alt="" />
                        </a>

                        <div className="flex lg:hidden">
                            <button
                                x-cloak
                                onClick={toggleMenu}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        x-cloak
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}
                    ><div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                            <a class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Home</a>
                            <a class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#Mushrooms">Mushrooms</a>
                            <a class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#Know">Know</a>
                            <a class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#Classify">Classify</a>
                            
                            <a class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#Team">Team</a>
                            <a class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#Contact">Contact</a>
                        </div>

                        <a class="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto" href="#Classify">
                            Get started
                        </a>
                    </div>
                </nav>

                <div class="container px-6 py-16 mx-auto text-center">
                    <div class="max-w-lg mx-auto">
                        <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Unleash the Fungi Fun: Discover, Grow, and Savor the Magic of Mushrooms!</h1>
                        <p class="mt-6 text-gray-500 dark:text-gray-300">Discover the Magic of Mushrooms: Cultivate, Harvest, Savor. Embark on an incredible journey to unlock nature's bounty and enhance your culinary delights.</p>
                        <button class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                          <a style={{color:"white"}} href="#Classify">Clssify your mushroom</a>  
                        </button>
                        
                    </div>

                    <div class="flex justify-center mt-10">
                        <img class="object-cover w-full h-96 rounded-xl lg:w-4/5"
                         src="https://imengine.public.prod.dur.navigacloud.com/?uuid=451E012A-72DD-4881-AC3A-E85CC24E89D4&function=original&type=preview"
                         />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home