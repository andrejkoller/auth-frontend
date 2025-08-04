import { createContext, useContext, useState, ReactNode } from "react";

type LanguageDialogContextType = {
  open: boolean;
  openDialog: () => void;
  closeDialog: () => void;
};

const LanguageDialogContext = createContext<
  LanguageDialogContextType | undefined
>(undefined);

export const useLanguageDialog = () => {
  const ctx = useContext(LanguageDialogContext);
  if (!ctx)
    throw new Error(
      "useLanguageDialog must be used within LanguageDialogProvider"
    );
  return ctx;
};

export const LanguageDialogProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <LanguageDialogContext.Provider value={{ open, openDialog, closeDialog }}>
      {children}
    </LanguageDialogContext.Provider>
  );
};
