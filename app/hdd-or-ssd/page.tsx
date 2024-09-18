import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
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
              هارد اکسترنال SSD یا HDD: کدام برای شما مناسب‌تر است?
            </h1>
            <p className="text-regular mx-auto mt-2">
              وقتی حرف از خریدن هارد اکسترنال می‌شه، اولین سوالی که برای همه پیش
              میاد اینه که  SSD بخرم یا HDD؟ هرکدوم از این هاردها مزایا و معایب
              خاص خودشون رو دارن. بیاین یه مقایسه کامل و جامع داشته باشیم تا
              ببینیم کدوم هارد به درد شما می‌خوره.
            </p>
          </div>
          <div className=" grid justify-center grid-cols-1 mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-center">
            <div className="grid justify-center flex-cols-1 mx-auto width-auto my-2 px-1.5 py-1.5 rounded-lg text-white">
              <p className="text-black">
                در ابتدا یه توضیح مختصر در مورد این دو مدل هارد بهتون میدیم تا
                با دید درست تری به مقایسه شون بپردازیم.
              </p>
              <br />
              <hr />
              <h3 className="text-gray-800 bg-orange-200 font-bold my-2 shadow-orange-600 rounded-lg border-4 border-orange-400 shadow-2xl">
                HDD چیه؟ کلاسیک، قدیمی اما کار درست!
              </h3>
              <p className="text-black my-2">
                هارد HDD مخفف Hard Disk Drive هست، همون هاردهای سنتی که سال‌هاست
                داریم ازشون استفاده می‌کنیم. این هاردها یه دیسک چرخنده دارن که
                دیتا هارو رو روش ذخیره می‌کنی. درست مثل اون CD و DVD های قدیمی،
                ولی با ظرفیت ذخیره سازی خیلی بیشتر.
              </p>
              <h3 className="text-gray-800 bg-orange-200 font-bold my-2 shadow-orange-600 rounded-lg border-4 border-orange-400 shadow-2xl">
                SSD چیه؟ نسل جدید و سرعتی شبیه سرعت نور!{" "}
              </h3>
              <p className="text-black my-2">
                هارد SSD که مخفف Solid State Drive هست، یه نوع حافظه جدیده که
                هیچ قطعه متحرکی داخلش نداره. یعنی خبری از چرخیدن دیسک یا صدا
                نیست، همه چی توی چیپ‌های الکترونیکی ذخیره می‌شه.
              </p>
              <hr />
              <h2 className="text-xl font-bold px-8 text-black my-2">
                هارد اکسترنال SSD یا HDD: کدوم به درد شما می‌خوره؟
              </h2>
              <ul className="grid justify-center my-4">
                <li className="hover:bg-orange-500 text-white bg-orange-400 rounded-lg p-4 grid-cols-12">
                  ۱. سرعت: موشک یا لاک‌پشت؟
                </li>
                <span className="text-gray-500 grid-cols-12 mt-3">
                  اگه سرعت انتقال فایل هاتون خیلی براتون مهم و حیاتیه، قطعا SSD
                  بهترین انتخابه. هارد اکسترنال SSD با سرعتی مثل سرعت نور
                  فایل‌ها رو جابجا می‌کنن. مثلاً اگه یه فیلم چند گیگابایتی
                  دارید، هارد اکسترنال SSD تو چند ثانیه میتونه  انتقالش بده. از
                  اون طرف، هارد اکسترنال HDD یه کم کندتر عمل میکنه و شاید برای
                  انتقال فایل‌های بزرگ، مجبور بشید چند دقیقه بیشتر صبر کنید.
                  خلاصه اگه صبورید، HDD؛ اگه عجله دارید، SSD!
                </span>
                <li className="hover:bg-orange-500 text-white bg-orange-400 rounded-lg p-4 grid-cols-12 mt-4">
                  ۲. ظرفیت: بیشتر یا کمتر؟
                </li>
                <span className="text-gray-500 grid-cols-12 mt-3 mb-3">
                  اگه اهل ذخیره و سیو کردن کلی فیلم، سریال، عکس و بازی هستید،
                  هارد اکسترنال HDD انتخاب بهتریه. چون با همون مقدار هزینه، فضای
                  ذخیره سازی خیلی بیشتری بهتون می‌ده. ولی هارد اکسترنال SSD
                  ظرفیت کمتری داره و به نسبت گرون‌تره. برای مثال اگه با بودجه
                  مشخصی دنبال ۲ ترابایت فضا هستید، HDD براتون اقتصادی‌تره.
                </span>
                <button className="text-black bg-gray-500 rounded-lg p-3 hover:bg-gray-900 transition ease-in-out">
                  <Link href="/" className="text-white font-bold">
                    برای خرید هارد اکسترنال کلیک کنید.
                  </Link>
                </button>
                <li className="hover:bg-orange-500 text-white bg-orange-400 rounded-lg p-4 grid-cols-12 mt-4">
                  ۳. مقاومت: شیشه یا کوه؟هارد اکسترنال ضد ضربه{" "}
                </li>
                <span className="text-gray-500 grid-cols-12 mt-3">
                  در این مسئله SSD قهرمانه! چون هیچ قطعه متحرکی نداره و در برابر
                  ضربه، شوک و حتی افتادن از دست، خیلی مقاوم‌تره(هارد اکسترنال
                  SSD ضد ضربه است). از اون طرف، هارد اکسترنال HDD به خاطر داشتن
                  دیسک داخلی، حساس‌تره و اگه ضربه ای بخوره، ممکنه بهش صدمه بزنه
                  و آسیب ببینه. پس اگه توی محیط‌های پرتلاطم و شلوغ کار می‌کنید
                  یا هاردتون دائم در حال جابجاییه و استفادست ، SSD انتخاب مطمئن
                  تریه.
                </span>
                <li className="hover:bg-orange-500 text-white bg-orange-400 rounded-lg p-4 grid-cols-12 mt-4">
                  ۴. قیمت: جیب پر یا سبک؟{" "}
                </li>
                <span className="text-gray-500 grid-cols-12 mt-3">
                  به طور کلی هاردهای اکسترنال HDD خیلی ارزون‌تر از SSD‌ها هستن.
                  اگه بودجه محدودی و کمی دارید ولی به فضای زیادی احتیاج دارید،
                  HDD خیلی گزینه بهتری میتونه باشه. در عین حال که  SSD گرونه،
                  اما بابت سرعت و مقاومت بالاش پول بیشتری می‌پردازید.
                </span>
                <span className="text-gray-800 text-lg font-bold">
                  انتخاب با شماست: سرعت بیشتر با هزینه بالاتر یا فضای بیشتر با
                  قیمت کمتر؟
                </span>
                <li className="hover:bg-orange-500 text-white bg-orange-400 rounded-lg p-4 grid-cols-12 mt-4">
                  ۵. صدا: بی‌صدا یا زمزمه‌دار؟{" "}
                </li>
                <span className="text-gray-500 grid-cols-12 mt-3">
                  هارد SSD کاملاً بی‌صداست. چون هیچ قطعه مکانیکی داخلش نداره،
                  وقتی از SSD استفاده می‌کنید، هیچ صدایی نمی‌شنوید. ولی هارد HDD
                  گاهی ازش صدای چرخش دیسک‌ شنیده می‌شه. اگه دنبال یه تجربه
                  کاملاً بی‌صدا و آروم هستید، SSD برنده این بخشه.
                </span>
              </ul>
              <h4 className="my-3 text-xl font-bold hover:bg-orange-500 text-white bg-orange-400 rounded-lg p-4">
                نتیجه‌گیری: کدوم رو انتخاب کنم؟
              </h4>

              <div className="bg-gray-600 rounded-lg p-4">
                <p className=" rounded-2xl my-4">
                  SSD: برای کارهای حرفه‌ای، سرعت بالا و مقاومت عالیه. اگه براتون
                  کیفیت و سرعت مهم‌تر از قیمت و ظرفیت هست، هارد اکسترنال SSD رو
                  انتخاب کنید.
                </p>
                <p className=" rounded-2xl my-4">
                  HDD: اگه فضای بیشتر می‌خواین و حاضرید کمی سرعت رو قربانی کنید،
                  هارد اکسترنال HDD به جیب و کارتون می‌خوره.
                </p>
              </div>
              <div className="my-4">
                <h5 className="text-orange-400 text-xl font-bold">
                  حالا انتخاب با شماست!
                </h5>
                <br />
                <hr />
                <p className="text-gray-800 mt-3">
                  همون‌طور که دیدین، هم SSD و هم HDD هرکدوم مزایا و معایب خودشون
                  رو دارن. اگه دنبال سرعت و مقاومت بالا هستین،
                  <span className="font-bold text-orange-500">
                    هارد اکسترنال SSD
                  </span>
                  رفیق شماست. ولی اگه فضای بیشتر با قیمت کمتر براتون اولویت
                  داره،
                  <span className="font-bold text-orange-500">
                    هارد اکسترنال HDD
                  </span>
                  گزینه‌ی مناسب‌تریه. در نهایت، همه چی به نیاز و بودجه شما بستگی
                  داره. امیدوارم این راهنمای کوچیک بهتون کمک کرده باشه تا تصمیم
                  بهتری بگیرید.
                  <br />
                  <span className="font-bold text-xl mt-2">
                    {" "}
                    پس بدون استرس انتخاب کنید و لذت ببرید!
                  </span>
                </p>
                <br />
                <Link className="font-bold text-orange-300 mt-3 hover:text-blue-500" href="/">کنکاش</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
