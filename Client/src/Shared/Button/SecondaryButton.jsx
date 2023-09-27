import React from 'react';

const SecondaryButton = ({children}) => {
    return (
            <button className="lg:px-8 lg:py-[1px] px-3 py-[1px]  rounded-full text-black outline-none bg-[#DCDCDC] font-bold">{children}</button>
    );
};

export default SecondaryButton;