"use client";
import React from "react";
import Image from "next/image";
const LaptopWarranty = () => {
    return (
      <div className="grid grid-cols-1 text-center rounded-lg">
        <h2 className="text-center font-bold my-4 text-orange-500 text-2xl">
          گارانتی لپ‌تاپ
        </h2>
        <p className="text-gray-400 bg-slate-100 rounded-xl p-4">
          گارانتی لپ‌تاپ به نوعی تعهد از سوی تولیدکننده یا فروشنده است که برای
          مدت مشخصی پس از خرید، در صورت بروز مشکلات فنی یا نقص در قطعات، دستگاه شما تحت پوشش تعمیرات یا تعویض قرار می‌گیرد. معمولاً این
          گارانتی شامل مشکلات سخت‌افزاری می‌شود که به دلیل نقص تولید به وجود
          آمده‌اند، مانند خرابی مادربرد، هارد دیسک، صفحه نمایش و دیگر قطعات
          اصلی.
          <br />
          همچنین، شرایط گارانتی ممکن است محدودیت‌هایی داشته باشد؛ به‌عنوان
          مثال، مشکلاتی که به دلیل استفاده نادرست از لپ‌تاپ (مانند آسیب‌های
          فیزیکی یا ریختن مایعات) به وجود آمده باشد، تحت پوشش قرار نمی‌گیرند.
          طول مدت گارانتی نیز متفاوت است و معمولاً بین یک تا سه سال است.
          <br />
          <br />
          برای استفاده از گارانتی، لازم است برگه یا کارت گارانتی و فاکتور خرید
          معتبر داشته باشید. بعضی شرکت‌ها نیز گارانتی‌های قابل تمدید ارائه
          می‌دهند که بعد از اتمام دوره اصلی گارانتی، شما می‌توانید با پرداخت
          هزینه، این خدمات را تمدید کنید.
        </p>
        <div className="mx-auto w-full my-2 py-1.5 bg-white rounded-lg">
          <Image
            src="/assets/images/labtop-size.webp"
            width={4000}
            height={4000}
            alt="لپ‌تاپ"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    );
  };
  export default LaptopWarranty