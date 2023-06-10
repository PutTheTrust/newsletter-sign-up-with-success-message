"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { useEmailContext } from "@/context/context";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const { email } = useEmailContext();
  const router = useRouter();
  const dismiss = () => {
    router.back();
  };
  return (
    <div className="md:flex md:items-center md:justify-center md:h-screen">
      <div className="h-screen  pt-[149px] md:pt-12  md:max-w-[504px] md:max-h-[520px] rounded-3xl  bg-white">
        <div className="h-full px-6">
          <Image
            src="/images/icon-success.svg"
            alt="success"
            width={64}
            height={64}
            className=" mb-[53px] md:mb-[50px]"
          />

          <Heading text="Thanks for subscribing!" />

          <p className="mt-[39px] ">
            {` A confirmation email has been sent to ${email}. Please
    open it and click the button inside to confirm your subscription.`}
          </p>

          <div className="relative h-1/2 md:mt-12">
            <div className="absolute w-full bottom-5 md:static">
              <Button text="Dismiss message" onClick={dismiss} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
