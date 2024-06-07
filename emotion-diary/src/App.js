import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { getEmotionImgById } from './util';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';
import React, {useEffect, useReducer, useRef, useState } from 'react';

export const DiaryStateContext=React.createContext();
export const DiaryDispatchContext=React.createContext();

function reducer(state, action){
  switch(action.type){
    case "INIT": {return action.data ;}
    case "CREATE":{return [action.data, ...state]}
    case "UPDATE":{return state.map((it)=>String(it.id)===String(action.data.id)? {...action.data}:it);}
    case "DELETE":{return state.filter((it)=>String(it.id) !== String(action.targetId));}
    default : return state;
  }
  //return state;
}

const mockData=[
  {id:"mock1", date:new Date().getTime()-1, content:"mock1", emotionId:1},
  {id:"mock2", date:new Date().getTime()-2, content:"mock2", emotionId:2},
  {id:"mock3", date:new Date().getTime()-3, content:"mock3", emotionId:3},
];


function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [data, dispatch]=useReducer(reducer,[])
  const idRef=useRef(0);

  const onCreate=(date, content, emotionId) =>{
    dispatch({
      type:"CREATE",
      data:{
        id : idRef.current,
        date : new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current +=1;
  }
  const onUpdate=(targetId, date, content, emotionId) =>{
    dispatch({
      type:"UPDATE",
      data:{
        id : targetId,
        date : new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  }
  const onDelete=(targetId) =>{
    dispatch({
      type : "DELETE",
      targetId,
    });
  }

  useEffect(() =>{
    dispatch({
      type:"INIT", data:mockData,
    });
    setIsDataLoaded(true);
  },[])

  if(!isDataLoaded){
    return <div>데이터를 불러오는 중입니다.</div>
  }else{
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <div className='App'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New/>} />
              <Route path="/diary/:id" element={<Diary/>} />
              <Route path="/edit/:id" element={<Edit/>} />
            </Routes>
            {/* <div>
              <Link to={"/"}>Home</Link>
              <Link to={"/new"}>New</Link>
              <Link to={"/diary"}>Diary</Link>
              <Link to={"/edit"}>Edit</Link>
            </div> */}
            {/* <h1>감정 일기장</h1>
            <img alt='감정1' src={getEmotionImgById(1)} />
            <img alt='감정1' src={getEmotionImgById(2)} />
            <img alt='감정1' src={getEmotionImgById(3)} />
            <img alt='감정1' src={getEmotionImgById(4)} />
            <img alt='감정1' src={getEmotionImgById(5)} /> */}
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
