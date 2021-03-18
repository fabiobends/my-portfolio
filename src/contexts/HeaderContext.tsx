import { createContext, ReactNode, useState } from "react";

interface HeaderContextData {
  selectedTag: string;
  handleSelectedTag: (selectedTag: string) => void;
}

interface HeaderProps {
  children: ReactNode;
}

export const HeaderContext = createContext({} as HeaderContextData);

export function HeaderProvider({ children }: HeaderProps) {
  const [selectedTag, setSelectedTag] = useState(null);

  function handleSelectedTag(selectedTag: string) {
    setSelectedTag(selectedTag);
  }

  return (
    <HeaderContext.Provider
      value={{
        selectedTag,
        handleSelectedTag,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
