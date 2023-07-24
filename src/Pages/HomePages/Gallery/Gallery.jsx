
const Gallery = () => {
    return (
        <div>
            <div className="lg:pt-3 bg bg-indigo-400 ">
                <h1 className="text-center lg:text-5xl mx-auto w-1/2 lg:w-1/4 lg:px-2 p-2 text-2xl rounded-lg font-bold bg bg-sky-400 text-white">
                    Our Gallery
                </h1>
                <div className="lg:container mx-auto  py-2  lg:pt-5">
                    <div className="-m-1 lg:flex flex-wrap md:-m-2   relative  overflow-hidden bg-cover bg-no-repeat">
                        <div className="flex lg:w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">

                                <img
                                    alt="gallery"
                                    src="https://images.unsplash.com/photo-1496469888073-80de7e952517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                                    className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                                />

                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

                                />
                            </div>
                            <div className="w-full p-1 md:p-2">

                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                />

                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                                    src="https://images.unsplash.com/photo-1533854775446-95c4609da544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                />
                            </div>
                        </div>
                        <div className="flex lg:w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    src="https://images.unsplash.com/photo-1627556704243-5f0771d90783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    src="https://images.unsplash.com/photo-1627556704353-016baeb12c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                                />
                            </div>

                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                                    src="https://images.unsplash.com/photo-1658235081452-c2ded30b8d9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=814&q=80"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                                    src="https://images.unsplash.com/photo-1658235081033-ccd89cdfe77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;