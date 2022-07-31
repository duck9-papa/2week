import './App.css';
import { useSelector,useDispatch,Provider,connect } from "react-redux";
import { addTodo,delTodo,changeTodo } from './redux/modules/counter';
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router'



function Main() {
  const navigate = useNavigate();
  const todoState = useSelector((state) => state.counter);
  // const newState = [todoState]
  const dispatch = useDispatch();
  const [inputValue,setInputValue] = useState('')
  const [workValue,setWorkValue] = useState('')
  const dummy =  {id : inputValue+workValue+todoState.length,input : inputValue,work : workValue,done : false}
  console.log(todoState)



  const addItem=()=>{

    // setTodo([{id : inputValue+workValue,input : inputValue,work : workValue,done : false}]);
    dispatch(addTodo(dummy))
    setInputValue("")
    setWorkValue('')
  }
  const onRemove = (targetId) => {
    const newdone = todoState.filter((item) => {return item.id !== targetId});
    console.log(newdone)
    dispatch(delTodo(newdone))

    }

    const changeDone = (targetId) => {
      const changeState = todoState.map((item) => {
    if (item.id === targetId) {
      return {
        ...item,
        done: !item.done,
      };
    } else {
      return { ...item };
    }
  })
  dispatch(changeTodo(changeState))
};





  // useEffect(() => {
  //   addItem();
  //   }, []);




  return (
    
<div>

    <div>

    <div className='ietRZh'>

    <div className='gRcjgh'>
      <div>My Todo List</div>
      <div>React</div>
    </div>
    <div className='gbfVyZ'>
      <div className='iSeEJO'>
        <label className='cvohld'>제목</label>
        <input type="text" className='dcTfgk' name='title'value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}></input>
        <label className='cvohld'>내용</label>
        <input type="text" className='dcTfgk' value={workValue} onChange={(event)=>{setWorkValue(event.target.value)}}></input>
      </div>

    </div>
    <button className='duHnQT' onClick={addItem}>추가하기</button>

    <div className='ePkGrs'>
      <h2>Working...</h2>
      {todoState.map((item)=>{if(item.done===false){return <div className='fmCWVp' key={item.id}>
        <div className='cWuOfo'>
          <button className='bDrZBT' onClick={() => {navigate(`/work/${item.id}`);}} ><div>상세보기</div></button>
          <div>
            <h2>{item.input}</h2>
            <div>{item.work}</div>
          </div>
          <footer className='dAjrAc'>
            <button className='ezZXrw' onClick={()=>onRemove(item.id)}>삭제하기</button>
            <button className='jfbOqs' onClick={()=>changeDone(item.id)}>완료</button>
          </footer>
        </div>
      </div>} if(item.id===undefined) {return null}})}
    </div>
    <div className='ePkGrs'>
    <h2>Done!</h2>
    {todoState.map((item)=>{if(item.done===true){return <div className='fmCWVp' key={item.id}>
        <div className='cWuOfo'>
        <button className='bDrZBT' onClick={() => {navigate(`/work/${item.id}`);}} ><div>상세보기</div></button>
          <div>
            <h2>{item.input}</h2>
            <div>{item.work}</div>
          </div>
          <footer className='dAjrAc'>
            <button className='ezZXrw' onClick={()=>onRemove(item.id)} >삭제하기</button>
            <button className='jfbOqs' onClick={()=>changeDone(item.id)}>취소</button>
          </footer>
        </div>
      </div>} if(item.id===undefined) {return null}})}
    </div>
    <div className='fmCWVp'></div>


    </div>

    </div>

</div>
);
}
export default Main;