import React from "react";
import { useTranslation } from "react-i18next";

import { languageOptions } from "@/constants";

interface LanguageOptionsStanderProps {
  changeLanguageNotifier?: (language: string) => void;
}

function LanguageOptionsStander({
  changeLanguageNotifier,
}: LanguageOptionsStanderProps) {
  const { i18n } = useTranslation();
  const activeLang = i18n.language;

  const handleLanguageSwitch = (language: string) => {
    i18n.changeLanguage(language);
    if (changeLanguageNotifier) changeLanguageNotifier(language);
  };

  return (
    <div className="w-10 fixed z-50 right-[2.5vw] bottom-0 hidden md:block">
      <ul className="mt-8 mb-10 text-center mx-auto">
        {languageOptions.map((languageOption) => (
          <li
            key={languageOption.id}
            className="block p-2 mr-4 mb-1 cursor-pointer w-full group"
            onClick={() =>
              handleLanguageSwitch(languageOption.name.toLowerCase())
            }
          >
            <span
              className={`text-lg ${
                activeLang.toLowerCase() === languageOption.name.toLowerCase()
                  ? "text-primary-lavenderBlue"
                  : "text-primary-darkPurple"
              } transform hover:scale-[1.2] group-hover:text-primary-lavenderPurple transitions-animation font-bold`}
            >
              {languageOption.name}
            </span>
          </li>
        ))}
      </ul>
      <div className="w-1 h-10 bg-primary-lavenderBlue rounded-full mx-auto -mt-6"></div>
    </div>
  );
}

export default LanguageOptionsStander;
