import { createContext, useState } from "react";
import { baseURL } from "../baseUrl";


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loader, setLoader] = useState(false);
    const [posts, setPosts] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);


    async function getData(page = 1){
        setLoader(true);

        let url = baseURL;
        try{
            const rawData = await fetch(`${url}?page=${page}`);
            const jsonData = await rawData.json();
            setCurrPage(jsonData.page);
            setTotalPage(jsonData.totalPages);
            setPosts(jsonData.posts);
        }
        catch(error){
            setCurrPage(1);
            setTotalPage(null);
            setPosts([]);
            console.log("Error");
        }

        setLoader(false);
    }

    function changePageHandler(page){
        
        getData(page);
    }

    const value = {
        loader, setLoader,
        posts, setPosts, 
        currPage, setCurrPage,
        totalPage, setTotalPage,

        changePageHandler
    }

    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}
