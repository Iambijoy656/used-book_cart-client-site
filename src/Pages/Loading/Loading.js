import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex justify-center my-10">
            <BounceLoader color="skyblue" size={60}></BounceLoader>
        </div>
    );
};

export default Loading;