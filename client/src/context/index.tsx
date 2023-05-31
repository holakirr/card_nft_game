import { createContext, useContext } from 'react';

interface GlobalContextType {}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);
export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
	return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
