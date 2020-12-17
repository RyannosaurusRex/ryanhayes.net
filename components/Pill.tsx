import React from 'react';

const Pill: React.FC = props => {
    
    return <span className="bg-blue-500 rounded-full p-1 px-2 text-white">
            {props.children}
        </span>;
}

export default Pill;