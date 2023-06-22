import React, { useState } from 'react'

function FormComp() {
    const [odor, setOdor] = useState('');
    const [sporePrintColor, setSporePrintColor] = useState('');
    const [gillColor, setGillColor] = useState('');
    const [stalkSurfaceAboveRing, setStalkSurfaceAboveRing] = useState('');
    const [stalkSurfaceBelowRing, setStalkSurfaceBelowRing] = useState('');
    const [ringType, setRingType] = useState('');


    async function PostData(e) {
        e.preventDefault()
        try {
            // Perform validation checks
            if (!odor || !sporePrintColor || !gillColor || !stalkSurfaceAboveRing || !ringType) {
                // Display an error message or handle the validation error
                console.log('Please fill in all fields.');
                return;
            }

            const m = {
                "odor": odor,
                "spore-print-color": sporePrintColor,
                "gill-color": gillColor,
                "stalk-surface-above-ring": stalkSurfaceAboveRing,
                "stalk-surface-below-ring": stalkSurfaceBelowRing,
                "ring-type": ringType
            }

            const info = await fetch('https://mushroomclassification.onrender.com/predict', {
                method: 'POST',
                body: JSON.stringify(m),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data = info.json()

            data.random_forest === 0 ? alert("its Edible") : alert("its poisounous")

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <section id="Classify" style={{ width: "98vw", textAlign: "left", background: '#251e18' }} class="bg-white dark:bg-gray-900">
                <div class="flex justify-center min-h-screen">
                    <div class="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1630921121767-81e86d066a5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2hyb29tfGVufDB8fDB8fHww&w=1000&q=80)" }}>
                    </div>

                    <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div class="w-full">
                            <h3 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Get your mushroom classified
                            </h3>

                            <p class="mt-4 text-gray-500 dark:text-gray-400">
                                Mushroom Classifier: Use ML to determine if a mushroom is poisonous or safe with just a click. Choose from 6 buttons.
                            </p>

                            <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Odor</label>
                                    <select style={{ background: "#807663" }} type="text" value={odor} onChange={(e) => setOdor(e.target.value)} placeholder="Select color" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                        <option value="0">Almond (a)</option>
                                        <option value="1">Creosote (c)</option>
                                        <option value="2">Foul (f)</option>
                                        <option value="3">Anise (l)</option>
                                        <option value="4">Musty (m)</option>
                                        <option value="5">None (n)</option>
                                        <option value="6">Pungent (p)</option>
                                        <option value="7">Spicy (s)</option>
                                        <option value="8">Fishy (y)</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Spore-Priint-Color</label>
                                    <select style={{ background: "#807663" }} type="text" value={sporePrintColor} onChange={(e) => setSporePrintColor(e.target.value)} placeholder="Select color" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                        <option value="0">Buff (b)</option>
                                        <option value="1">Chocolate (h)</option>
                                        <option value="2">Black (k)</option>
                                        <option value="3">Brown (n)</option>
                                        <option value="4">Orange (o)</option>
                                        <option value="5">Green (r)</option>
                                        <option value="6">Purple (u)</option>
                                        <option value="7">White (w)</option>
                                        <option value="8">Yellow (y)</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Gill color</label>
                                    <select style={{ background: "#807663" }} type="text" value={gillColor} onChange={(e) => setGillColor(e.target.value)} placeholder="Select color" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                        <option value="0">Buff (b)</option>
                                        <option value="1">Red (e)</option>
                                        <option value="2">Gray (g)</option>
                                        <option value="3">Chocolate (h)</option>
                                        <option value="4">Black (k)</option>
                                        <option value="5">Brown (n)</option>
                                        <option value="6">Orange (o)</option>
                                        <option value="7">Pink (p)</option>
                                        <option value="8">Purple (r)</option>
                                        <option value="9">Green (u)</option>
                                        <option value="10">White (w)</option>
                                        <option value="11">Yellow (y)</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">stalk-surface-above-ring</label>
                                    <select style={{ background: "#807663" }} type="text" value={stalkSurfaceAboveRing} onChange={(e) => setStalkSurfaceAboveRing(e.target.value)} placeholder="Select color" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                        <option value="0">Fibrous (f)</option>
                                        <option value="1">Scaly (k)</option>
                                        <option value="2">Silky (s)</option>
                                        <option value="3">Smooth (y)</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">stalk-surface-below-ring</label>
                                    <select style={{ background: "#807663" }} type="text" value={stalkSurfaceBelowRing} onChange={(e) => setStalkSurfaceBelowRing(e.target.value)} placeholder="Select color" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                        <option value="0">Fibrous (f)</option>
                                        <option value="1">Scaly (k)</option>
                                        <option value="2">Silky (s)</option>
                                        <option value="3">Smooth (y)</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Ring type</label>
                                    <select style={{ background: "#807663" }} type="text" value={ringType} onChange={(e) => setRingType(e.target.value)} placeholder="Select color" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                        <option value="0">Evanescent (e)</option>
                                        <option value="1">Flaring (f)</option>
                                        <option value="2">Large (l)</option>
                                        <option value="3">None (n)</option>
                                        <option value="4">Pendant (p)</option>
                                    </select>
                                </div>

                                <button onClick={PostData} style={{ background: "#c39870" }}
                                    class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Classify </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormComp