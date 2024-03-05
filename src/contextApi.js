import { createContext, useContext, useState } from "react";

// Create a context for storing global state
const itemContext = createContext();

// Custom hook to access the context value
export default function UseValue() {
    const value = useContext(itemContext);
    return value;
}

// CustomProvider component provides the context value to its children
export function CustomProvider({ children }) {
    // State to store filter and user data
    const [dependency,setDependency] = useState(false)
    const [filter, setFilter] = useState([]);
    const [userData, setUserData] = useState([]);


    return (
        <itemContext.Provider value={{ filter, setFilter, userData, setUserData,dependency,setDependency }}>
            {children}
        </itemContext.Provider>
    );
}
