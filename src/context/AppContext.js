import { createContext, useState } from "react";
import { baseURL } from "../baseUrl";


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loader, setLoader] = useState(false);
    const [posts, setPosts] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [currTheme, setCurrTheme] = useState('light');


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
        startupTheme();
    }
    
    function startupTheme(){
        if(localStorage.getItem('theme')){
            let temp = localStorage.getItem('theme');
            if(temp==='dark'){
                document.documentElement.style.setProperty('--background-color', 'rgb(255, 255, 255)');
                document.documentElement.style.setProperty('--heading-color', 'rgb(0, 0, 0)');
                document.documentElement.style.setProperty('--text-color', 'rgb(0, 0, 0)');
                document.documentElement.style.setProperty('--tag-color', '#1d4ed8');
                document.documentElement.style.setProperty('--bulb-glow', 'rgba(255, 255, 255, 0)');
                setCurrTheme('light');
            }
            else{
                document.documentElement.style.setProperty('--background-color', '#000C14');
                document.documentElement.style.setProperty('--heading-color', 'rgb(226, 253, 226)');
                document.documentElement.style.setProperty('--text-color', 'rgb(255, 255, 255)');
                document.documentElement.style.setProperty('--tag-color', '#5d7ccf');
                document.documentElement.style.setProperty('--bulb-glow', 'rgb(255, 251, 0)');
                setCurrTheme('dark');
            }
        }
    }

    function changeTheme(){
        if(currTheme === 'dark'){
            document.documentElement.style.setProperty('--background-color', 'rgb(255, 255, 255)');
            document.documentElement.style.setProperty('--heading-color', 'rgb(0, 0, 0)');
            document.documentElement.style.setProperty('--text-color', 'rgb(0, 0, 0)');
            document.documentElement.style.setProperty('--tag-color', '#1d4ed8');
            document.documentElement.style.setProperty('--bulb-glow', 'rgba(255, 255, 255, 0)');
            localStorage.setItem('theme', 'dark');
            setCurrTheme('light');
        }
        else{
            document.documentElement.style.setProperty('--background-color', '#000C14');
            document.documentElement.style.setProperty('--heading-color', 'rgb(226, 253, 226)');
            document.documentElement.style.setProperty('--text-color', 'rgb(255, 255, 255)');
            document.documentElement.style.setProperty('--tag-color', '#5d7ccf');
            document.documentElement.style.setProperty('--bulb-glow', 'rgb(255, 251, 0)');
            localStorage.setItem('theme', 'light');
            setCurrTheme('dark');
        }
    }
    
    const value = {
        loader, setLoader,
        posts, setPosts, 
        currPage, setCurrPage,
        totalPage, setTotalPage,

        changePageHandler,

        changeTheme, 
        currTheme,
    }


    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}
