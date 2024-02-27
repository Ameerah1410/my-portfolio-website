import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const gitProfileUrl = "https://github.com/Ameerah1410";
const linkedInUrl = "https://www.linkedin.com/in/ameerah-moos-49875b148/";

const ContactSection = () => {
  return (
    <div id="contact">
      <h1 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
        Let's Connect
      </h1>
      <p className="text-center text-xl font-bold text-white mt-4 mb-8 md:mb-12">
        I'm currently looking for new opportunities. If you have a question or
        want to get in touch, feel free to contact me!
      </p>

      <div className="text-white">
        <div className="flex flex-row justify-center items-center gap-2 py-2 mb-8">
          <EnvelopeIcon className="h-10 w-10 text-primary-500" />
          <p>ameerah14moos3@gmail.com</p>
        </div>

        <div className="flex flex-row justify-center items-center gap-2 py-2 mb-8">
          <PhoneIcon className="h-10 w-10 text-primary-500" />
          <p>+27 63-627-9185</p>
        </div>

        <div className="flex flex-row justify-center items-center gap-2 py-2 mb-8">
          <Link
            href={linkedInUrl}
            className="hover:cursor-pointer flex items-center"
          >
            <LinkIcon className="h-10 w-10 text-primary-500" />
            <p className="ml-2">Ameerah Moos</p>
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center gap-2 py-2 mb-8">
          <Link
            href={gitProfileUrl}
            className="hover:cursor-pointer flex items-center"
          >
            <CodeBracketIcon className="h-10 w-10 text-primary-500" />
            <p className="ml-2">Ameerah1410</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
