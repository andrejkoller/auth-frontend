import { ButtonBase } from "@mui/material";
import styles from "./CountrySelect.module.css";
import Flag from "react-world-flags";
import { ChevronDown } from "lucide-react";

export const CountrySelect = () => {
  return (
    <ButtonBase
      className={styles.countrySelectButton}
      aria-label="Select country"
    >
      <Flag className={styles.flagIcon} code="DE" />
      <ChevronDown className={styles.chevIcon} />
    </ButtonBase>
  );
};
