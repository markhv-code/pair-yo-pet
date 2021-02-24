import { createContext, useContext } from 'react'

const BrowseContext = createContext();

export const useBrowseContext = () => useContext(BrowseContext);

export default function BrowseProvider({children}) {
    return (
        <BrowseContext.Provider>
            {children}
        </BrowseContext.Provider>
    )
}