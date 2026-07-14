import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import whatsapp from "/src/assets/whatsapp.svg";
import { FaChevronCircleUp } from "react-icons/fa";


const Root = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let throttleTimeout = null;

    // ২০২৬ পারফরম্যান্স স্ট্যান্ডার্ড: Throttled Scroll Function
    const handleScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          setShow(window.scrollY > 600);
          throttleTimeout = null;
        }, 120); // প্রতি ১২০ মিলিসেকেন্ডে একবার স্টেট চেক হবে, প্রতি ফ্রেমে নয়
      }
    };

    // passive: true ব্রাউজারকে স্ক্রোলিং পারফরম্যান্স সর্বোচ্চ করতে সাহায্য করে
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
          {/* Back-to-top Button (শর্তসাপেক্ষে স্ট্যাকের ওপরে রেন্ডার হবে) */}
          {show && (
            <button
              onClick={scrollTop}
              className="cursor-pointer"
              aria-label="Scroll to top"
            >
              <FaChevronCircleUp className="text-2xl text-primary" />
            </button>
          )}

          {/* WhatsApp Icon Widget */}
          <div className="relative w-12 h-12 md:w-13 md:h-13 bg-green-600 rounded-full flex items-center justify-center shadow-xl">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 w-full h-full p-2 flex items-center justify-center transition-transform hover:scale-110"
              aria-label="Chat on WhatsApp"
            >
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="w-full h-full object-contain"
              />
            </a>
            {/* মডার্ন ক্লিন পিং অ্যানিমেশন (Tailwind-Safe Standard) */}
            <span
              className="absolute inset-0 bg-green-600 rounded-full animate-ping opacity-60"
              style={{ animationDuration: "2s" }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Root;
