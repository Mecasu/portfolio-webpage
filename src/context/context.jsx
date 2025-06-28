import { createContext, useEffect, useState } from "react";
import {
  headerData,
  profileData,
  projectsData,
  skillsData,
  footerData,
} from "../data";
import useLocalStorage from "../hooks/useLocalStorage";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("language", "tr");
  const [data, setData] = useState([]);

  useEffect(() => {
    const lowerLang = lang.toLowerCase();
    const newData = [
      {
        headerData: headerData[lowerLang],
        profileData: profileData[lowerLang],
        projectsData: projectsData[lowerLang],
        skillsData: skillsData[lowerLang],
        footerData: footerData[lowerLang],
      },
    ];
    setData(newData);
  }, [lang]);

  return (
    <Context.Provider
      value={{
        data,
        lang,
        setLang,
        loading: false,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
