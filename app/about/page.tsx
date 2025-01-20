import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import medarjeeling from "public/gallery/me-darjeeling.jpg";
import punehill from "public/gallery/doremon-hill.jpg";
import growthxLogo from "public/company/growthx.svg";
import onlinesalesLogo from "public/company/onlinesales.svg";
import matrixLogo from "public/company/matrix.svg";

export const metadata: Metadata = {
  title: "Me? | Araon",
  description: "very gpu-poor optimist, loves cs, hardware, retro and bikes",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          Who Me?
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Okay so..
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={medarjeeling}
            alt={"me in darjeeling"}
            width={220}
            height={260}
            className="pointer-events-none relative inset-0 -top-2 h-60 -rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={punehill}
            alt={"guitar from k-on"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-40 left-[45%] w-48 rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>Hey, I&apos;m Soumik!</p>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              IPA /sɔːmɪk/ • सौमिक • সৌমিক • ソウミク
            </p>{" "}
            but I go by Araon for short. Araon has a nice ring to it. You’ll
            probably remember it
            <br></br>
            <p>
              I love building cool things with code and I&apos;m all about
              engineering, history, and hardware.
            </p>
            <p>
              I write on my{" "}
              <Link className="underline" href="https://araon.space/blog">
                blog
              </Link>{" "}
              about computers, life and anything that peaks my interest.
            </p>
            <p>
              When I&apos;m not at my desk, I am probably taking{" "}
              <Link
                className="underline"
                href="https://www.instagram.com/ara0n/"
              >
                photos
              </Link>{" "}
              or riding my bike somewhere.
            </p>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I started my career freelancing for seniors, building discord bots
              and renting out game servers.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>

        <Section heading="Resume" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Want to know more about my professional experience? Check out my
              resume below.
            </p>
            <Link
              href="/resume/Soumik_Ghosh_24_02_09.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
              View Resume
            </Link>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <Link href="https://twitter.com/ara0n_">text me</Link>. Try
              finding me anywhere else at @araon.
            </p>
            <ul className="animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-2">
              {ConnectLinks.map((link) => (
                <li className="col-span-1 transition-opacity" key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-grid w-full rounded-lg border border-primary p-4 no-underline transition-opacity"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-auto h-5 w-5 text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "SDE",
    company: "GrowthX",
    time: "Present",
    imageSrc: growthxLogo,
    link: "https://www.growthx.club",
  },
  {
    title: "SDE",
    company: "Onlinesales.ai",
    time: "3 Years",
    imageSrc: onlinesalesLogo,
    link: "https://Onlinesales.ai",
  },
  {
    title: "Intern",
    company: "Matrix",
    time: "1 Year",
    imageSrc: matrixLogo,
    link: "https://www.linkedin.com/company/matrix-international-/?originalSubdomain=in",
  },
];
