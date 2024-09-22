import React from "react";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <div className=" grid mx-auto grid-cols-1 h-auto p-4" dir="rtl">
      <div className="px-4 mx-auto py-2 rounded-lg my-2 width-full grid grid-cols-1 gap-4">
        <div className="col-span-2 mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
          <div className="mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg">
            <Image
              src="/assets/images/hard-external.webp"
              width={4000}
              height={4000}
              alt="SSD یا HDD"
              className="rounded-lg shadow-lg w-full h-full"
            />
          </div>
          <div className=" grid justify-center flex-cols-1 mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center">
            <h1 className="text-xl font-bold mx-auto bg-gray-800 text-white rounded-lg p-2 px-6">
              "چطوری هارد دیسکمون رو نجات بدیم؟! تعمیرات هارد دیسک"
            </h1>
            <p className="text-regular mx-auto my-4">
              هارد دیسک‌هاتون ناگهان به هم می‌ریزه و مشکل ساز شده؟ نگران نباشید!
              در اینجا چند راهکار ساده و کاربردی برای نجات هارد دیسکتون داریم:
            </p>
          </div>
          <div className=" grid justify-center grid-cols-1 mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
            <div className="grid justify-center flex-cols-1 mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-white">
              <br />
              <hr />

              <h2 className="text-xl font-bold px-8 text-black my-2">
                "چطور هارد دیسک رو به زندگی برگردونیم؟"{" "}
              </h2>
              <ul className="grid justify-center my-4 gap-4 ">
                <li className="hover:bg-orange-500 text-white bg-orange-400 text-xl font-bold rounded-lg p-4 grid-cols-12">
                  ۱. دلایل خرابی هارد دیسک
                </li>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  عوامل فیزیکی:
                </span>
                <p className="text-black text-base ">
                  آسیب‌های ناشی از ضربه، سقوط یا ریختن مایعات.
                </p>

                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  عوامل حرارتی:{" "}
                </span>
                <p className="text-black text-base">
                  دماهای بالا می‌توانند باعث خرابی قطعات داخلی شوند.{" "}
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  استفاده نادرست:{" "}
                </span>
                <p className="text-black text-base">
                  خاموش کردن ناگهانی سیستم یا استفاده مکرر بدون تهویه مناسب.{" "}
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  عوامل الکتریکی:{" "}
                </span>
                <p className="text-black text-base">
                  نوسانات برق و قطع و وصل‌های ناگهانی.{" "}
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  عوامل نرم‌افزاری:{" "}
                </span>
                <p className="text-black text-base">
                  ویروس‌ها، بدافزارها یا مشکلات سیستم‌عامل.{" "}
                </p>
                <li className="hover:bg-orange-500 text-white bg-orange-400 text-xl font-bold rounded-lg p-4 grid-cols-12">
                  ۲. روش‌های تعمیر هارد دیسک
                </li>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  اسکن و تعمیر:{" "}
                </span>
                <p className="text-black text-base">
                  استفاده از نرم‌افزارهایی مانند CHKDSK در ویندوز یا Disk
                  Utility در macOS برای تعمیر سکتورهای خراب.{" "}
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  بازیابی داده:{" "}
                </span>
                <p className="text-black text-base">
                  نرم‌افزارهای بازیابی داده مانند Recuva یا Stellar برای بازیابی
                  اطلاعات از هارد دیسک‌های آسیب‌دیده.
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  تعویض قطعات:{" "}
                </span>
                <p className="text-black text-base">
                  در برخی موارد، ممکن است نیاز به تعویض موتور، هد یا سایر قطعات
                  داخلی باشد.
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  تعمیر در اتاق تمیز:{" "}
                </span>
                <p className="text-black text-base">
                  برای تعمیرات سخت‌افزاری، هارد باید در یک محیط بدون گرد و غبار
                  و تمیز (Clean Room) باز شود.
                </p>
                <button className="text-black bg-gray-500 rounded-lg p-3 hover:bg-gray-900 transition ease-in-out">
                  <Link href="/" className="text-white font-bold">
                    برای خرید هارد اکسترنال کلیک کنید.
                  </Link>
                </button>
                <li className="hover:bg-orange-500 text-white bg-orange-400 text-xl font-bold rounded-lg p-4 grid-cols-12">
                  ۳. نکات پیشگیری از خرابی هارد دیسک{" "}
                </li>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  پشتیبان‌گیری منظم:{" "}
                </span>
                <p className="text-black text-base">
                  از داده‌های مهم خود به طور منظم پشتیبان تهیه کنید.
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  استفاده از UPS:{" "}
                </span>
                <p className="text-black text-base">
                  برای جلوگیری از آسیب‌های ناشی از نوسانات برق، از منبع تغذیه
                  اضطراری (UPS) استفاده کنید.{" "}
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  اجتناب از فشار:{" "}
                </span>
                <p className="text-black text-base">
                  هارد دیسک را در مکان‌های امن و دور از آسیب‌های فیزیکی نگهداری
                  کنید.
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  دما و تهویه:{" "}
                </span>
                <p className="text-black text-base">
                  هارد دیسک باید در دماهای متعادل و با تهویه مناسب کار کند.
                </p>
                <li className="hover:bg-orange-500 text-white bg-orange-400 text-xl font-bold rounded-lg p-4 grid-cols-12">
                  ۴. بازیابی داده‌ها{" "}
                </li>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  خودتان امتحان کنید:{" "}
                </span>
                <p className="text-black text-base">
                  اگر مشکل نرم‌افزاری است، می‌توانید با استفاده از نرم‌افزارهای
                  بازیابی داده به خودتان کمک کنید.{" "}
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  کمک حرفه‌ای:{" "}
                </span>
                <p className="text-black text-base">
                  در صورتی که خرابی فیزیکی باشد یا داده‌های بسیار مهمی دارید،
                  بهتر است به مراکز تخصصی بازیابی داده مراجعه کنید.
                </p>
                <li className="hover:bg-orange-500 text-white bg-orange-400 text-xl font-bold rounded-lg p-4 grid-cols-12">
                  ۵. نکات نهایی{" "}
                </li>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  تشخیص زودهنگام:{" "}
                </span>
                <p className="text-black text-base">
                  همیشه به علائم هشداردهنده مانند صدای غیرمعمول، کند شدن سیستم و
                  عدم دسترسی به فایل‌ها توجه کنید.
                </p>
                <span className="text-gray-600 grid-cols-12 mt-3 text-xl font-bold">
                  آمادگی:{" "}
                </span>
                <p className="text-black text-base">
                  قبل از هر مشکلی، همیشه برنامه‌ای برای پشتیبان‌گیری و بازیابی
                  داشته باشید.
                </p>
              </ul>
              <h4 className="hover:bg-orange-500 my-3 text-white bg-orange-400 text-xl font-bold rounded-lg p-4 grid-cols-12">
                تعمیر هارد دیسک{" "}
              </h4>

              <div className="bg-gray-600 rounded-lg p-4">
                <p className=" rounded-2xl my-4">
                  برای تعمیر هارد دیسک می‌توانید با تیم حرفه‌ای کنکاش در تماس
                  باشید.
                </p>
                <button className="text-black rounded-lg bg-green-500 p-3 hover:bg-gray-900 transition ease-in-out">
                  <Link href="/" className="text-white font-bold">
                    برای تعمیرات هارد اکسترنال کلیک کنید.
                  </Link>
                </button>
              </div>
              <div className="my-4 flex flex-col items-center justify-center">
                <button className="my-3 flex justify-center bg-green-100 font-bold border-2 rounded-md p-3 text-center border-none">
                  <Link href="tel:+98">
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <path
                        d="M30,22.3l-2.5-2.5c-1.3-1.3-3.5-1.3-4.8,0l-0.8,0.8c-0.5,0.5-1.4,0.5-2,0l-4.2-4.2l-4.2-4.2 c-0.3-0.3-0.4-0.6-0.4-1s0.1-0.7,0.4-1l0.9-0.8c1.3-1.3,1.3-3.5,0-4.8L9.7,2C8.5,0.7,6.2,0.7,4.9,2L4.1,2.8c-2,2-3.1,4.6-3.1,7.5 s1.1,5.5,3.1,7.5l5.1,5.1l5.1,5.1c2,2,4.7,3.1,7.5,3.1s5.5-1.1,7.5-3.1l0.9-0.8c0.6-0.6,1-1.5,1-2.4C31,23.8,30.7,22.9,30,22.3z"
                        fill="#1f2937"
                      />
                    </svg>
                  </Link>
                </button>

                <p className="text-black">برای تماس با پشتیبانی کلیک کنید.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
