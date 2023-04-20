import * as React from 'react';
const SocialIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}>
        <path
            fill="#C802FA"
            d="M19.445 0H1.55C.693 0 0 .677 0 1.513v17.97C0 20.318.693 21 1.55 21h17.895c.858 0 1.555-.68 1.555-1.514V1.514C21 .677 20.303 0 19.445 0ZM6.23 17.895H3.113V7.871H6.23v10.024ZM4.672 6.505a1.806 1.806 0 1 1-.007-3.611 1.806 1.806 0 0 1 .007 3.611Zm13.223 11.39h-3.113v-4.872c0-1.161-.02-2.658-1.62-2.658-1.62 0-1.866 1.267-1.866 2.575v4.955h-3.11V7.871h2.987v1.37h.04c.415-.788 1.432-1.62 2.946-1.62 3.154 0 3.736 2.075 3.736 4.774v5.5Z"
        />
    </svg>
);
export default SocialIcon;
