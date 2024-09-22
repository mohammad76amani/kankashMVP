"use client";
import React from "react";
import Image from "next/image";
const HardDriveWarranty = () => {
  return (
    <div className="grid grid-cols-1 text-center rounded-lg">
      <h2 className="text-center font-bold my-4 text-orange-500 text-2xl">
        گارانتی هارد
      </h2>
      <p className="text-gray-400 bg-orange-100 rounded-xl p-4">
        گارانتی هارد دیسک یا SSD یک تعهد از سوی تولیدکننده یا فروشنده است که به
        مدت معینی تضمین می‌کند در صورت بروز مشکلات فنی یا نقص‌های تولیدی، هارد
        تحت تعمیر یا تعویض قرار گیرد. این گارانتی معمولاً برای مشکلاتی مانند
        خرابی قطعات داخلی، از کار افتادن بخش‌های ذخیره‌سازی یا مشکلات در سرعت
        عملکرد اعمال می‌شود.
        <br />
        مدت زمان گارانتی هارد بسته به نوع و برند آن متفاوت است و معمولاً بین 1
        تا 5 سال است. برای استفاده از گارانتی، مشتری باید کارت گارانتی معتبر و
        فاکتور خرید را ارائه دهد. مشکلات ناشی از استفاده نادرست، مثل آسیب‌های
        فیزیکی یا نفوذ آب، معمولاً تحت پوشش گارانتی قرار نمی‌گیرند.
        <br />
        <br />
        بعضی برندها خدمات گارانتی پیشرفته‌تری ارائه می‌دهند که شامل بازیابی
        اطلاعات از دست رفته نیز می‌شود، در صورتی که هارد دچار خرابی شدید شود.
      </p>
      <div className="mx-auto w-full my-2 py-1.5 bg-white rounded-lg">
        <Image
          src="/assets/images/hard-size.webp"
          width={4000}
          height={4000}
          alt="هارد دیسک"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
};
export default HardDriveWarranty;
