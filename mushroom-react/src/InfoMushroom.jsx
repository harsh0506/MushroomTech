import React from 'react'

const data = [
    { "name": "Harvest", "data": "Carefully pluck or cut mature mushrooms for optimal flavor and texture." },
    { "name": "Cooking", "data": "Explore their earthy flavor and meaty texture in various culinary creations." },
    { "name": "Propagation", "data": "Cultivate mushrooms from spores or mycelium on nutrient-rich substrates." },
    { "name": "Storage", "data": "Maintain freshness by storing mushrooms in a cool, dark place with proper moisture control." },]

function InfoMushroom() {
    return (
        <>
            <section id="Know" style={{ width: "98vw", paddingBottom: "10vh", background: '#2a231e' }} class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Know more <br /> about Awesome mushrooms</h1>

                    <div class="mt-2">
                        <span style={{ background: "#c39870" }} class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span style={{ background: "#c39870" }} class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span style={{ background: "#c39870" }} class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>

                    <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                        <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                            {
                                data.map((item, index) => (
                                    <div key={index} class="space-y-3">
                                        <span style={{ background: "#c39870", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }} class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </span>
                                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">{item.name}</h1>

                                        <p class="text-gray-500 dark:text-gray-300">
                                            {item.data}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>

                        <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                            <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] " 
                            src="https://plus.unsplash.com/premium_photo-1676879544802-469059cf0414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
                             alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfoMushroom