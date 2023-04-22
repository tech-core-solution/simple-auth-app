import React from "react";
import { useTranslation } from "react-i18next";

import { languageOptions } from "@/constants";

interface LanguageOptionsMobileProps {
  changeLanguageNotifier?: (language: string) => void;
}

function LanguageOptionsMobile({
  changeLanguageNotifier,
}: LanguageOptionsMobileProps) {
  const { i18n } = useTranslation();
  const activeLang = i18n.language;

  const handleLanguageSwitch = (language: string) => {
    i18n.changeLanguage(language);
    if (changeLanguageNotifier) changeLanguageNotifier(language);
  };

  return (
    <div className="w-full text-center mt-4">
      <ul className="mt-2 text-center mx-auto">
        {languageOptions.map((languageOption) => (
          <li
            key={languageOption.id}
            className="inline-block px-4 cursor-pointer group"
            onClick={() =>
              handleLanguageSwitch(languageOption.name.toLowerCase())
            }
          >
            <span
              className={`text-lg ${
                activeLang.toLowerCase() === languageOption.name.toLowerCase()
                  ? "text-primary-lavenderBlue"
                  : "text-primary-darkPurple"
              } transform hover:scale-[1.1] group-hover:text-primary-lavenderPurple transitions-animation font-bold`}
            >
              {languageOption.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageOptionsMobile;
