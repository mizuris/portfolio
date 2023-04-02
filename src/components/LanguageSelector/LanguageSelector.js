import i18next from "i18next";
import {
  StyledLanguageElement,
  StyledLanguageSelector,
} from "./LanguageSelector.styled";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <StyledLanguageSelector>
      <StyledLanguageElement
        isSelected={i18next.language === "en"}
        onClick={() => handleLanguageChange("en")}
      >
        {t("language-selector:english")}
      </StyledLanguageElement>
      &nbsp;|&nbsp;
      <StyledLanguageElement
        isSelected={i18next.language === "pl"}
        onClick={() => handleLanguageChange("pl")}
      >
        {t("language-selector:polish")}
      </StyledLanguageElement>
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
