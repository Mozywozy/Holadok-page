const Gambar = () => {
    return (
        <>
            <div className="h-full w-full pt-2 flex justify-end pr-28 relative">
                <div className="w-[400px] h-[90vh] bg-[#9BEAE0] -skew-x-6">
                </div>
                <img src="/dokterori.png" alt="" className="absolute h-4/5 bottom-0 z-10" />
                <div className="card absolute w-[310px] bg-white rounded-md drop-shadow-xl -left-20 top-32">
                    <div className="flex items-center p-5">
                        <img src="/rajipixel.jpeg" alt="" className="w-8 rounded-full" />
                        <p className="font-semibold pl-3 pr-40">Raji</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="2em"
                            viewBox="0 0 512 512"
                        >
                            <path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48m-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48" className="" />
                        </svg>
                    </div>
                    <div className="p-2 text-sm">
                        <p>“The doctor appointment app has been great for me. Scheduling appointments and getting medication reminders is much easier, and I love the option for virtual consultations. I recommend this app to others.” </p>
                    </div>
                </div>
            </div>
            <div className="w-5/6 flex mx-auto bg-[#203271] h-52 absolute left-32 top-[90%] z-10">
                <div className="card w-[300px] my-10 mx-10">
                    <div className="flex items-center">
                        <img src="/calendar.png" alt="" />
                        <p className="font-semibold text-white px-2">Online appointment scheduling</p>
                    </div>
                    <div className="py-2 text-white text-sm pl-12 align-items-start pt-0">
                        <p>Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                </div>
                <div className="card w-[300px] my-10 mx-10">
                    <div className="flex items-center">
                        <img src="/lonceng.png" alt="" />
                        <p className="font-semibold text-white px-2">Medication reminders</p>
                    </div>
                    <div className="py-2 text-white text-sm pl-12 align-items-start pt-0">
                        <p>Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                </div>
                <div className="card w-[300px] my-10 mx-10">
                    <div className="flex items-center">
                        <img src="/camera.png" alt="" />
                        <p className="font-semibold text-white px-2">Virtual consultations</p>
                    </div>
                    <div className="py-2 text-white text-sm pl-12 align-items-start pt-0">
                        <p>Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gambar
