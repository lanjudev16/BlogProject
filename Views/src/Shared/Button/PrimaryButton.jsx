import React from 'react';

const PrimaryButton = ({children}) => {
    return (
            <button className="lg:px-10 lg:py-3 px-5 py-2 rounded-full text-white outline-none bg-[#3D00B7]">{children}</button>
    );
};

export default PrimaryButton;