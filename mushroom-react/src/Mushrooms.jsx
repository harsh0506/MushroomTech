import React, { useState } from 'react'

const mushrooms = {
    "Poisounous": [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Amanita_phalloides_1.JPG/800px-Amanita_phalloides_1.JPG",
            head: "Death Cap",
            para: "Poisounous"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg/640px-Amanita_muscaria_3_vliegenzwammen_op_rij.jpg",
            head: "Fly Algeric",
            para: "Poisounous"
        }, {
            img: "https://upload.wikimedia.org/wikipedia/commons/3/30/Coprinopsis_atramentaria_3_-_Lindsey.jpg",
            head: "Inky cap",
            para: "Poisounous"
        }
    ],
    "Edible": [
        {
            img: "https://hips.hearstapps.com/hmg-prod/images/12-types-of-mushrooms-button-mushrooms-1652126844.jpg?crop=1xw:0.9426743602609132xh;center,top&resize=980:*",
            head: "Button Mushrooms",
            para: "Edible"
        },
        {
            img: "https://hips.hearstapps.com/hmg-prod/images/12-of-the-most-common-types-of-mushtooms-cremini-mushroom-1652126085.jpg?crop=1.00xw:0.879xh;0,0.0303xh&resize=980:*",
            head: "Crimini Mushrooms",
            para: "Edible"
        }, {
            img: "https://hips.hearstapps.com/hmg-prod/images/12-of-the-most-common-types-of-mushtooms-portabello-mushroom-1652125268.jpg?crop=1.00xw:0.832xh;0,0.168xh&resize=980:*",
            head: "Portabello Mushrooms",
            para: "Branding"
        }
    ],
};

function Mushrooms() {
    const [activeLink, setActiveLink] = useState("Poisounous");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const currentCategory = mushrooms[activeLink];

    return (
        <>
            <section id="Mushrooms" style={{ width: "98vw", paddingBottom: "10vh", background: '#2e2721' }} class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-12 mx-auto">
                    <h1 style={{ color: "#c39870", fontSize: 45 }} class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Mushrooms</h1>
                    <p style={{ fontSize: 20 }} class="mt-6 text-gray-500 dark:text-gray-300">Discover the Magic of Mushrooms: Cultivate, Harvest, Savor.<br /> Embark on an incredible journey to unlock nature's bounty and enhance your culinary delights.</p>
                    <div class="mt-2">
                        <span style={{ background: "#c39870" }} class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span style={{ background: "#c39870" }} class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span style={{ background: "#c39870" }} class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                    <div class="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                        <div class="lg:mx-12">
                            <h1 style={{ color: "#c39870" }} class="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>

                            <div className="mt-4 space-y-4 lg:mt-8">
                                <a

                                    className={`block ${activeLink === "Poisounous" ? "text-blue-500 dark:text-blue-400" : "text-gray-500 dark:text-gray-300"} hover:underline`}
                                    onClick={() => handleLinkClick("Poisounous")}
                                >
                                    Poisounous
                                </a>
                                <a

                                    className={`block ${activeLink === "Edible" ? "text-blue-500 dark:text-blue-400" : "text-gray-500 dark:text-gray-300"} hover:underline`}
                                    onClick={() => handleLinkClick("Edible")}
                                >
                                    Edible
                                </a>
                            </div>
                        </div>

                        <div class="flex-1 mt-8 lg:mx-12 lg:mt-0">
                            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                                {currentCategory.map((item, index) => (
                                    <div key={index} class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                                        style={{ backgroundImage: `url('${item.img}')` }}>
                                        <div
                                            class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                            <h2 class="mt-4 text-xl font-semibold text-white capitalize">{item.head}</h2>
                                            <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">{item.para}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mushrooms