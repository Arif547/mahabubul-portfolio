import React from 'react';
import { DotLoader, RingLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center bg-black h-screen items-center align-middle'>
            <DotLoader color="#626dff" />
            {/* <RingLoader color="#363eff" /> */}
        </div>
    );
};

export default Loading;