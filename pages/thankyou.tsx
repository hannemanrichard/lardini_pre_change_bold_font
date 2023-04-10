import Head from "next/head";
import bg from "../public/bg.jpg";
import Image from "next/image";
import { useState } from "react";
import { db } from "../firebase-config";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Lardini - Elevate your look</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="facebook-domain-verification"
          content="ynykw1m2veggq9pspm51wz52v86v1m"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-auto bg-no-repeat bg-[#151515] bg-center min-h-screen">
        <header className="bg-white bg-[#151515] border-b fixed top-0 h-20 w-full">
          <div className="w-full flex justify-between px-3 py-3">
            <div className="py-3">
              <img src="logo-lardini.png" className="h-8" alt="" />
            </div>
            <div className="mt-3">
              <Link href="/">
                <a className=" bg-blue-500 text-white px-6 py-3 rounded-lg font-bold">
                  أطلبي الآن
                </a>
              </Link>
            </div>
          </div>
        </header>
        <main className="w-full bg-[#151515] mt-20 px-6">
          <div className="w-full pt-4 pb-8 text-center  z-10 ">
            <div className="pt-20 w-2/3 mx-auto">
              <h1 className="text-5xl font-bold text-white">تهانينا</h1>
              <h6 className="text-2xl text-white">
                شكرا جزيلا على ثقتكم سيتم الإتصال بكم في غضون 24 ساعة لتأكيد
                طلبكم فالرجاء إبقاء الهاتف مفتوح{" "}
              </h6>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
