import { createContext, useContext, useState } from "react"


const SearchContext = createContext()
export const useSearchContext=()=>useContext(SearchContext).Search


export default function SearchProvider({children}) {
   
    const [search, setSearch] = useState('')

  return (<SearchContext.Provider value={{Search: [search, setSearch]}}>
        {children}
  </SearchContext.Provider>)
}
