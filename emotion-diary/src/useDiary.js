import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "./App";

const useDiary=(id)=>{
    const data=useContext(DiaryStateContext);
    const [diary, setDiary]=useState();

    useEffect(()=> {
        const matchDiary=data.find((it)=>String(it.id)===String(id));
        if(matchDiary){
            setDiary(matchDiary)
        }else{
            alert("일기가 존재하지 않습니다.")
            navigator("/",{replace:true})
        }
    },[id,data])

    return diary;
};
export default useDiary;