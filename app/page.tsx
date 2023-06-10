"use client";

import Image from "next/image";
import data from "./data/data";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className="h-screen md:flex md:items-center md:justify-center ">
      <div className="md:flex flex-row-reverse bg-white max-w-[928px] rounded-3xl md:p-6 md:gap-6">
        <div className="md:w-1/2">
          <Image
            src="/images/illustration-sign-up-mobile.svg"
            alt="illustation"
            className="w-full md:hidden"
            width={375}
            // width="100%"
            height={284}
          />

          <Image
            src="/images/illustration-sign-up-desktop.svg"
            alt="illustation"
            className="hidden w-full md:block"
            width={400}
            // width="100%"
            height={593}
          />
        </div>

        <div className="px-6 md:px-0 mt-14 md:flex-1">
          <Heading text="Stay updated!" />
          <p className="my-8 font-medium">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="mb-14 flex flex-col gap-3">
            {data.map((item, idx) => (
              <li className="flex items-start gap-[17px]" key={idx}>
                <Image
                  src="/images/icon-list.svg"
                  alt="check"
                  width={22}
                  height={22}
                  className="justify-start"
                />
                <p className="pl-[17px] font-medium">{item}</p>
              </li>
            ))}
          </ul>

          <Form />
        </div>
      </div>
    </main>
  );
}
