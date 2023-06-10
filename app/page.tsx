import Image from "next/image";
import data from "./data/data";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <main>
      <div>
        <Image
          src="/images/illustration-sign-up-mobile.svg"
          alt="illustation"
          className="w-full md:hidden"
          width={375}
          // width="100%"
          height={284}
        />
      </div>

      <div className="px-6 mt-14">
        <Heading text="Stay updated!" />
        <p className="my-8">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="mb-14">
          {data.map((item) => (
            <li className="flex items-start gap-[17px]">
              <Image
                src="/images/icon-list.svg"
                alt="check"
                width={22}
                height={22}
                className="just0fy-start"
              />
              <p className="pl-[17px]">{item}</p>
            </li>
          ))}
        </ul>

        <form>
          <Input
            placeholder="email@company.com"
            label="Email address"
            type="text"
            id="email"
          />

          <Button text="Subscribe to monthly newsletter" />
        </form>
      </div>
    </main>
  );
}
