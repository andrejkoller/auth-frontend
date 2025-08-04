import Flag from "react-world-flags";
import styles from "./LanguageDialog.module.css";
import { ButtonBase } from "@mui/material";
import { useLanguageDialog } from "@/contexts/LanguageDialog/LanguageDialogContext";
import { XIcon } from "lucide-react";

const topLanguages = [
  {
    code: "DE",
    name: "Deutschland",
  },
  {
    code: "US",
    name: "United States",
  },
  {
    code: "GB",
    name: "United Kingdom",
  },
  {
    code: "AU",
    name: "Australia",
  },
  {
    code: "FR",
    name: "France",
  },
  {
    code: "ES",
    name: "España",
  },
  {
    code: "IT",
    name: "Italia",
  },
];

const otherLanguages = [
  {
    code: "CN",
    name: "中国",
  },
  {
    code: "JP",
    name: "日本",
  },
  {
    code: "KR",
    name: "한국",
  },
  {
    code: "RU",
    name: "Россия",
  },
];

export const LanguageDialog = () => {
  const { open, closeDialog } = useLanguageDialog();

  return (
    <div
      className={`${styles.languageDialog} ${open ? styles.open : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-dialog-title"
    >
      <div className={styles.languageDialogContainer}>
        <div className={styles.languageDialogHeader}>
          <h2 id="language-dialog-title">Presenter</h2>
          <ButtonBase
            className={styles.closeButton}
            aria-label="Close"
            onClick={closeDialog}
          >
            <XIcon className={styles.closeIcon} />
          </ButtonBase>
        </div>
        <ul className={styles.topLanguagesList}>
          {topLanguages.map((language) => (
            <li key={language.code} className={styles.languageItem}>
              <ButtonBase
                type="button"
                className={styles.languageButton}
                aria-label={`Select language: ${language.name}`}
              >
                <Flag code={language.code} className={styles.languageFlag} />
                <span className={styles.languageName}>{language.name}</span>
              </ButtonBase>
            </li>
          ))}
        </ul>
        <ul className={styles.otherLanguagesList}>
          {otherLanguages.map((language) => (
            <li key={language.code} className={styles.languageItem}>
              <ButtonBase
                type="button"
                className={styles.languageButton}
                aria-label={`Select language: ${language.name}`}
              >
                <Flag code={language.code} className={styles.languageFlag} />
                <span className={styles.languageName}>{language.name}</span>
              </ButtonBase>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
