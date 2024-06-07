import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";
import DiaryList from "../component/DiaryList";

const Home=()=>{
    const data=useContext(DiaryStateContext)
    // console.log(data);
    const [pivotDate, setPivotDate]=useState(new Date());
    const [filteredData, setFilteredData]=useState([]);

    const headerTitle=`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`;
    const onIncreaseMonth=()=>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    };
    const onDecreaseMonth=()=>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    }
    useEffect(()=>{
        // console.log(data.length);
        if(data.length >=1){
            console.log(data.length);
            const {beginTimeStamp, endTimeStamp}=getMonthRangeByDate(pivotDate);
            setFilteredData(data.filter((it)=> beginTimeStamp <= it.date && it.date <= endTimeStamp));
        }else{
            setFilteredData([])
        }
        // console.log(filteredData, {beginTimeStamp}, {endTimeStamp});
    },[data,pivotDate]);
    // const [searchParams, setSearchParams]=useSearchParams();
    // console.log(searchParams.get("sort"));

    return (
        <div>
            <Header title={headerTitle} 
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />} 
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />} />
            <DiaryList data={filteredData}/>
            {/* Home 페이지입니다 */}
            {/* <Editor initData={{
                date: new Date().getTime(),
                emotionId:1,
                content:"이전에 작성했던 일기"
             }}
             onSubmit={()=>("작성완료")} /> */}
            {/* <Header
                title={"Home"}
                leftChild={
                    <Button 
                        type="positive"
                        text={'긍정 버튼'} 
                        onClick={()=>{
                        alert("positive button");
                    }}/>
                }
                rightChild={
                    <Button
                        type="negative"
                        text={'부정 버튼'} 
                        onClick={()=>{
                        alert("negative button");
                    }}/>
                }
            /> */}

            {/* // <Editor onSubmit={()=>{
            //     alert("작성 완료 버튼을 클릭했음")
            // }}/> */}
            {/* <div>Home 페이지입니다.</div>
            <Button
                text={'기본 버튼'} 
                onClick={()=>{
                alert("default button");
            }}/>
            <Button 
                type="positive"
                text={'긍정 버튼'} 
                onClick={()=>{
                alert("positive button");
            }}/>
            <Button
                type="negative"
                text={'부정 버튼'} 
                onClick={()=>{
                alert("negative button");
            }}/> */}
        </div>
    );
};
export default Home;