import React, { FC } from 'react';

export const Loader: FC = () => {
    return (
        <div className="loader">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, key) => (
                <div key={key} className="circle"></div>
            ))}
        </div>
    );
};
