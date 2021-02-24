import React, { createContext, useState, useContext } from 'react'

const BrowseContext = createContext();

export const useBrowseContext = () => useContext(BrowseContext);

export default function BrowseProvider({children}) {
    const [input, setInput] = useState('');

    return (
        <BrowseContext.Provider value={{ input, setInput }}>
            {children}
        </BrowseContext.Provider>
    );
}