import './App.css';
import Heading from "./components/Heading";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { useEffect } from 'react';

function App() {
  const {changePageHandler} = useContext(AppContext);

  useEffect(() => {
    changePageHandler();
  }, []);
  

  return (
    <div className="App">
      <Heading/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
