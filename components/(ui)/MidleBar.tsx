import Image from "next/image";
import Link from "next/link";

const MidleBar = () => {
  return (
    <div>
      <section className="bg-zinc-50 overflow-hidden flex flex-row">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-4 md:px-6 mx-auto py-6 lg:py-12 space-y-12 flex flex-col justify-center">
        <div className="flex flex-nowrap justify-center items-center gap-4 mx-auto overflow-x-auto scrollbar-hide snap-x h-48 px-2 gap-4">
                <Link href="/">
                  <Image
                    width={200}
                    height={150}
                    src="/assets/images/ssd.jfif"
                    className="rounded-xl  shadow-xl hover:rotate-0 duration-500 hover:-translate-y-4 sm:hover:-translate-y-8 object-cover transform origin-bottom transition-transform hover:scale-110"
                    alt="External Hard Drive 1"
                  />
                  <p className="text-center mt-2 px-2 mb-2 font-semibold text-xs">
                    انواع هارد اینترنال و اکسترنال
                  </p>
                </Link>
                <Link href="/">
                  <Image
                    width={200}
                    height={150}
                    src="/assets/images/case.jfif"
                    className="rounded-xl  shadow-xl hover:rotate-0 duration-500 hover:-translate-y-4 sm:hover:-translate-y-8 object-cover transform origin-bottom transition-transform hover:scale-110"
                    alt="External Hard Drive 2"
                  />
                  <p className="text-center mt-2 px-2 mb-2 font-semibold text-sm">
                    کیس و سیستم دسکتاپ
                  </p>
                </Link>

                <Link href="/">
                  <Image
                    width={140}
                    height={100}
                    src="/assets/images/laptop.jfif"
                    className="rounded-xl  shadow-xl hover:rotate-0 duration-500 hover:-translate-y-4 sm:hover:-translate-y-8 object-cover transform origin-bottom transition-transform hover:scale-110"
                    alt="External Hard Drive 2"
                  />
                  <p className="text-center mt-2 px-2 mb-2 font-semibold text-sm">
                    انواع لپتاپ استوک 
                  </p>
                </Link>
                <Link href="/">
                  <Image
                    width={150}
                    height={110}
                    src="/assets/images/allinone.jfif"
                    className="rounded-xl  shadow-xl hover:rotate-0 duration-500 hover:-translate-y-4 sm:hover:-translate-y-8 object-cover transform origin-bottom transition-transform hover:scale-110"
                    alt="External Hard Drive 2"
                  />
                  <p className="text-center mt-2 px-2 mb-2 font-semibold text-sm">
                  all in one
                  </p>
                </Link>
                <Link href="/">
                  <Image
                    width={140}
                    height={100}
                    src="/assets/images/laptop.jfif"
                    className="rounded-xl  shadow-xl hover:rotate-0 duration-500 hover:-translate-y-4 sm:hover:-translate-y-8 object-cover transform origin-bottom transition-transform hover:scale-110"
                    alt="External Hard Drive 2"
                  />
                  <p className="text-center mt-2 px-2 mb-2 font-semibold text-sm">
                    انواع لپتاپ استوک 
                  </p>
                </Link>


                {/* Add more images as needed */}
              </div>
        </div>
      </section>
    </div>
  );
};

export default MidleBar;
