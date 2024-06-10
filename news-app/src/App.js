import './App.css';
import { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';


function App() {
  // const [data, setData]=useState(null);
  // const onClick= async()=>{
  //   try{
  //     const response =await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=8dbfc9ae24f844d2bb9fd848cf3b90ba',);
  //     setData(response.data);
  //   }catch(e){
  //     console.error(e);
  //   }
  // }
  const [category, setCategory]=useState("all");
  const onSelect=useCallback(category=> setCategory(category),[]);
  return (
    <>
      <Categories  category={category} onSelect={onSelect}/>
      <NewsList category={category} />
    </>
  )
};
export default App;
