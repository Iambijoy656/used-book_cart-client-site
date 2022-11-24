import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";



const Banner = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={4000}
            className="h-[85vh]"
        >
            <div data-src="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/slider.jpg?v=1613722505">
                <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                <div className="absolute left-0 right-0 top-32 text-center ">
                    <h1 className="text-6xl md:text-8xl text-gray-200 ">
                        Get Your Book
                    </h1>
                    <h1 className="text-4xl font-semibold text-gray-200 my-4 "> With Best Price</h1>
                    <h1 className="text-6xl text-gray-200 ">Find Your Book Now</h1>
                    <p className="text-slate-300 mt-6 hidden  md:block">
                        Find Out More About New Books Published by the Royal Botanic Garden Edinburgh. <br />
                        Get Your Copy of the Lastest Launch, The Yew Hedge by Martin Gardner. Learn With RBGE.
                    </p>
                </div>
            </div>
            <div data-src="https://media.istockphoto.com/id/1126667586/photo/man-reading-book-on-the-table.jpg?s=612x612&w=0&k=20&c=dLkihy1eZXLD2rrpUkbD2zFIBlm3fr3sg1a003ky_rA=">
                <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                <div className="absolute left-0 right-0 top-32  text-center">
                    <h1 className="text-6xl md:text-8xl text-gray-200 ">
                        Get Your Book
                    </h1>
                    <h1 className="text-4xl font-semibold text-gray-200 my-4 ">With Best Price </h1>
                    <h1 className="text-6xl text-gray-200 ">Find Your Book Now</h1>
                    <p className="text-slate-300 mt-6 hidden  md:block">
                        Find Out More About New Books Published by the Royal Botanic Garden Edinburgh. <br />
                        Get Your Copy of the Lastest Launch, The Yew Hedge by Martin Gardner. Learn With RBGE.
                    </p>
                </div>
            </div>
            <div data-src="https://c4.wallpaperflare.com/wallpaper/266/642/517/reading-books-women-brunette-wallpaper-preview.jpg">
                <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                <div className="absolute left-0 right-0 top-32  text-center">
                    <h1 className="text-6xl md:text-8xl text-gray-200 ">
                        Get Your Book
                    </h1>
                    <h1 className="text-4xl font-semibold text-gray-200 my-4 ">With Best Price</h1>
                    <h1 className="text-6xl text-gray-200 "> Find Your Book Now</h1>
                    <p className="text-slate-300 mt-6 hidden  md:block">
                        Find Out More About New Books Published by the Royal Botanic Garden Edinburgh. <br />
                        Get Your Copy of the Lastest Launch, The Yew Hedge by Martin Gardner. Learn With RBGE.
                    </p>
                </div>
            </div>
            <div data-src="https://p1.pxfuel.com/preview/21/900/918/student-library-books-book-learn-education.jpg">
                <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
                <div className="absolute left-0 right-0 top-32  text-center">
                    <h1 className="text-6xl md:text-8xl text-gray-200 ">
                        Get Your Book
                    </h1>
                    <h1 className="text-4xl font-semibold text-gray-200 my-4 ">With Best Price</h1>
                    <h1 className="text-6xl text-gray-200 ">  Find Your Book Now</h1>
                    <p className="text-slate-300 mt-6 hidden  md:block">
                        Find Out More About New Books Published by the Royal Botanic Garden Edinburgh  <br />
                        Get Your Copy of the Lastest Launch, The Yew Hedge by Martin Gardner. Learn With RBGE.
                    </p>
                </div>
            </div>
        </AutoplaySlider>
    );
};

export default Banner;