import * as React from 'react';
const ArrowDown = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}>
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m22 12-7 6-1.75-1.5M8 12l2.333 2"
        />
    </svg>
);
export default ArrowDown;
