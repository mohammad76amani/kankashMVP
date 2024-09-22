"use client";

import React, { useState, useRef, useEffect } from 'react';

const DraggableSidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const startXRef = useRef<number | null>(null);
    const [showWelcomeModal, setShowWelcomeModal] = useState(true);

    const handleTouchStart = (e: React.TouchEvent) => {
        startXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (startXRef.current === null) return;

        const currentX = e.touches[0].clientX;
        const diff = currentX - startXRef.current;

        if (diff > -50 && !isOpen) {
            setIsOpen(true);
        }
    };

    const handleTouchEnd = () => {
        startXRef.current = null;
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const icons = document.querySelectorAll('.icon');
        icons.forEach(icon => {
          icon.addEventListener('click', () => {
            icon.classList.toggle("open");
          });
        });
      
        return () => {
          icons.forEach(icon => {
            icon.removeEventListener('click', () => {
              icon.classList.toggle("close");
            });
          });
        };
      }, []);
      
    

    const toggleSidebar = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
        const icon = document.querySelector('.icon');
        if (icon) {
            icon.classList.toggle('open');
        }
    };
    
    
   

    const closeWelcomeModal = () => {
        setShowWelcomeModal(false);
    };

    return (
        <div className="relative h-screen">
            {/* Welcome Modal */}
            {showWelcomeModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
                        <h2 className="text-2xl text-center font-bold mb-4">خوش آمدید</h2>
                        <p className="mb-4">.برای انتخاب کردن ما از شما تشکر می کنیم</p>
                        <button
                            onClick={closeWelcomeModal}
                            className="bg-blue-500 text-white px-4 py-2 mx-auto rounded hover:bg-blue-600"
                        >
                            بستن
                        </button>
                    </div>
                </div>
            )}

            <div className='fixed right-0 md:h-1/2'>
               
                <button
                    className=" fixed right-0 top-20  z-50 opacity-80 text-white  rounded "
                    onClick={toggleSidebar}
                >
                    <div className="icon nav-icon-1" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>  
                        </button>
            </div>

            <div
                ref={sidebarRef}
                className={`fixed top-32  rounded-s-xl right-0 h-fit w-64 opacity-90 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4 text-end pe-3">منوی کاربری</h2>
                    <ul>
                        <li className="mb-2 text-end ">لیست سفارشات</li>
                        <li className="mb-2 text-end ">پیگری سفارشات</li>
                    </ul>
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Main Content</h1>
            </div>
        </div>
    );
}

export default DraggableSidebar;