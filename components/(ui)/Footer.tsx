"use client"
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <div className="fixed bottom-0 flex justify-around shadow-lg py-2 rounded-lg text-white border-orange-500 border-2 text-center bg-gray-800 w-full">
            <Link href={'/'}>
                <div className='flex flex-col itens0center gap-1 font-bold text-white  rounded-lg shadow-lg px-2 py-2 w-16'>
                    <div className='text-center  py-2 px-2 rounded-full shadow-full flex flex-col items-center'>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg></div>

                    <div className='text-center text-white flex flex-col '>ورود</div>

                </div>
            </Link>


            <Link href={'/'}>
                <div className='flex flex-col itens0center gap-1 font-bold text-orange-500 rounded-lg shadow-lg px-2 py-2 '>
                    <div className='text-center  py-2 px-1 rounded-full shadow-full flex flex-col items-center'>
                        <svg width="25px" height="27px" viewBox="0 -0.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#f97316"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>shopping_cart_plus [#f97316]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -3160.000000)" fill="#f97316"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M15,3011.98412 L17,3011.98412 L17,3013.98866 L15,3013.98866 L15,3015.9932 L13,3015.9932 L13,3013.98866 L11,3013.98866 L11,3011.98412 L13,3011.98412 L13,3009.97959 L15,3009.97959 L15,3011.98412 Z M19.306,3016.99546 L8.694,3016.99546 L7.361,3008.97732 L20.82,3008.97732 L19.306,3016.99546 Z M21,3006.97278 L16.977,3000.01203 L15.245,3001.00227 L18.691,3006.97278 L9.309,3006.97278 L12.755,3001.0143 L11.023,3000 L7,3006.97278 L4,3006.97278 L4,3008.97732 L5.333,3008.97732 L7,3019 L21,3019 L22.667,3008.97732 L24,3008.97732 L24,3006.97278 L21,3006.97278 Z" id="shopping_cart_plus-[#f97316]"> </path> </g> </g> </g> </g></svg></div>

                    <div className='text-center text-white flex flex-col '>سبد خرید</div>

                </div>
            </Link>

            <Link href={'/'}>
                <div className='flex flex-col itens0center gap-1 font-bold text-orange-500  rounded-lg shadow-lg px-2 py-2'>
                    <div className='text-center  py-2 px-1 rounded-full shadow-full flex flex-col items-center'>
                        <svg width="25px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5562 15.5477L14.1007 16.0272C14.1007 16.0272 13.0181 17.167 10.0631 14.0559C7.10812 10.9448 8.1907 9.80507 8.1907 9.80507L8.47752 9.50311C9.18407 8.75924 9.25068 7.56497 8.63424 6.6931L7.37326 4.90961C6.61028 3.8305 5.13596 3.68795 4.26145 4.60864L2.69185 6.26114C2.25823 6.71766 1.96765 7.30945 2.00289 7.96594C2.09304 9.64546 2.81071 13.259 6.81536 17.4752C11.0621 21.9462 15.0468 22.1239 16.6763 21.9631C17.1917 21.9122 17.6399 21.6343 18.0011 21.254L19.4217 19.7584C20.3806 18.7489 20.1102 17.0182 18.8833 16.312L16.9728 15.2123C16.1672 14.7486 15.1858 14.8848 14.5562 15.5477Z" fill="#f97316"></path> <path fillRule="evenodd" clipRule="evenodd" d="M22 7C22 9.76142 19.7614 12 17 12C16.2002 12 15.4442 11.8122 14.7738 11.4783C14.5956 11.3895 14.392 11.36 14.1997 11.4114L13.0867 11.7092C12.6035 11.8385 12.1615 11.3965 12.2908 10.9133L12.5886 9.80031C12.64 9.60803 12.6105 9.4044 12.5217 9.22624C12.1878 8.55582 12 7.79984 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7ZM17 4.8125C17.5178 4.8125 17.9375 5.23223 17.9375 5.75V6.0625H18.25C18.7678 6.0625 19.1875 6.48223 19.1875 7C19.1875 7.51777 18.7678 7.9375 18.25 7.9375H17.9375V8.25C17.9375 8.76777 17.5178 9.1875 17 9.1875C16.4822 9.1875 16.0625 8.76777 16.0625 8.25V7.9375H15.75C15.2322 7.9375 14.8125 7.51777 14.8125 7C14.8125 6.48223 15.2322 6.0625 15.75 6.0625H16.0625V5.75C16.0625 5.23223 16.4822 4.8125 17 4.8125Z" fill="#f97316"></path> </g></svg></div>

                    <div className='text-center text-white flex flex-col '>پشتیبانی</div>

                </div>
            </Link>

            <Link href={'/'}>
                <div className='flex flex-col itens0center gap-1 font-bold text-orange-500  rounded-lg shadow-lg px-2 py-2'>
                    <div className='text-center  py-2 px-2 rounded-full shadow-full flex flex-col items-center'>
                        <svg fill="#f97316" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 492.308 492.308" xmlSpace="preserve" stroke="#f97316"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M485.507,171.298L412.209,42.952h-71.942V0H152.065v42.952H80.122L6.642,171.635c-8.625,16.538-8.519,36.317,0.279,52.904 c6.587,12.441,17.178,21.308,29.808,25.474v242.296H96.44h133.394h225.779V250.002c12.636-4.169,23.217-13.032,29.798-25.464 C494.209,207.952,494.315,188.173,485.507,171.298z M171.757,19.692h148.817v23.26H171.757V19.692z M210.142,472.615h-94.01 V320.394h94.01V472.615z M435.92,472.615H229.834V300.702H96.44v171.913H56.42v-220c18.909-0.863,35.501-10.76,45.451-25.538 c10.413,15.471,28.083,25.673,48.097,25.673c20.014,0,37.684-10.202,48.097-25.673c10.416,15.471,28.091,25.673,48.105,25.673 c20.013,0,37.682-10.2,48.096-25.671c10.414,15.471,28.084,25.671,48.096,25.671c20.014,0,37.688-10.202,48.105-25.673 c9.949,14.781,26.54,24.68,45.453,25.538V472.615z M468.017,215.317c-5.24,9.875-14.337,16.24-25.019,17.481 c-1.452,0.183-2.933,0.26-4.433,0.26c-21.087,0-38.25-17.163-38.25-38.25h-19.692c0,21.087-17.163,38.25-38.26,38.25 c-21.087,0-38.25-17.163-38.25-38.25H284.42c0,21.087-17.163,38.25-38.25,38.25c-21.096,0-38.26-17.163-38.26-38.25h-19.692 c0,21.087-17.164,38.25-38.25,38.25c-21.087,0-38.25-17.163-38.25-38.25H92.026c0,21.087-17.163,38.25-38.26,38.25 c-1.5,0-2.981-0.077-4.471-0.26c-10.644-1.24-19.74-7.606-24.981-17.481c-5.76-10.865-5.837-23.788-0.394-34.25L91.545,62.644 h60.519h188.202h60.519l67.442,118.086C473.853,191.529,473.776,204.452,468.017,215.317z"></path> </g> </g> <g> <g> <path d="M264.786,300.702v98.221h134.221v-98.221H264.786z M379.315,379.231h-94.837v-58.837h94.837V379.231z"></path> </g> </g> </g></svg></div>

                    <div className='text-center text-white text-orange-500 flex flex-col '>خانه</div>

                </div>
            </Link>

        </div>



    );
};

export default Footer;
