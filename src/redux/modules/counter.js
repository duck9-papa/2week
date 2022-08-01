// src/modules/counter.js

// 초기 상태값
const todoValue = [{
    id : "기본0",
    input: '리액트',
    work : '리액트를 배워봅시다!',
    done : false
  }];
  const ADD_TODO = "ADD_TODO"
  const Del_TODO = "Del_TODO"
  const CHANGE_TODO = "changeTodo"
  export const addTodo = (payload) => { 
    
    return {
      type: ADD_TODO,
      payload,

    };
    

  };
  export const delTodo = (payload) => { 
    
    return {
      type: Del_TODO,
      payload,

    };
    

  };

  export const changeTodo = (payload) => { 
    
    return {
      type: CHANGE_TODO,
      payload,

    };
    

  };



  // 리듀서
  const counter = (state, action) => {

    if (state === undefined){
      return todoValue
    }
    // console.log(action.payload)
    switch (action.type) {

        case ADD_TODO:
            return([...state,
            action.payload ])
          
          case Del_TODO:
            return    ([
              ...action.payload ])
          case CHANGE_TODO:
            return([
              ...action.payload ])
    
      default:    
        return state;
    }
  };
  
  // 모듈파일에서는 리듀서를 export default 한다.
  export default counter;

  //onChange={(event)=>{setWorkValue(event.target.value)}}