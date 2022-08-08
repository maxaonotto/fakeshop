import { useTranslation } from "react";

export default function useTranslation() {
  const { t, i18n } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
}
