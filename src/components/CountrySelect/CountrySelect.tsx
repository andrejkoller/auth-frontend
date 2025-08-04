import { ButtonBase } from "@mui/material";
import styles from "./CountrySelect.module.css";
import Flag from "react-world-flags";
import { ChevronDown } from "lucide-react";
import { useLanguageDialog } from "@/contexts/LanguageDialog/LanguageDialogContext";

export const CountrySelect = () => {
  const { openDialog } = useLanguageDialog();

  return (
    <ButtonBase
      className={styles.countrySelectButton}
      aria-label="Select country"
      onClick={openDialog}
    >
      <Flag className={styles.flagIcon} code="US" />
      <ChevronDown className={styles.chevIcon} />
    </ButtonBase>
  );
};
