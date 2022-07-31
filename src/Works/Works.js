import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router'
function Works(){


    const navigate = useNavigate();
    const todoState = useSelector((state) => state.counter);
    const param = useParams();
    const detail = todoState.filter((item)=>{return item.id===param.id})
    console.log(todoState)
    console.log(detail)
    return(
        <div id="root">
            <div className="hjvVIS">
                <div>
                    <div className="gIyIMD">
                    <div>
                        id:
                        {param.id.slice(-1)}
                        
                    </div>
                    <button className="dcERit" onClick={() => {navigate('/');}}>이전으로</button>
                    </div>
                    <h1>{detail[0].input}</h1>
                    <main>{detail[0].work}</main>
                </div>
            </div>
        </div>
    )
}
export default Works