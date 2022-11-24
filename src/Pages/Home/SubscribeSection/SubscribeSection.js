import React from 'react';

const SubscribeSection = () => {
    return (
        <section className="py-6 bg-gray-100 text-gray-900 mt-20">
            <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                <div className="flex flex-col space-y-4 text-center lg:text-left">
                    <h1 className="text-2xl font-bold leading-none text-orange-500">SUBSCRIBE TO OUR NEWS LETTER</h1>
                    <p className="">
                        Enter your email address to receive regular updates, as well as news on upcoming events <br /> and specific offers.</p>
                </div>
                <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-orange-500 text-white">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;