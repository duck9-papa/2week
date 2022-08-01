import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router'
function Works(){


    const navigate = useNavigate();
    const cardstate = useSelector((state) => state.counter);
    const param = useParams();
    const detail = cardstate.filter((item)=>{return item.id===param.id})
    const real = detail[0]
    console.log(cardstate)
    return(
        <div id="root">
            <div className="hjvVIS ietRZh">
                <div>
                    <div className="gIyIMD">
                    <div>
                        id:
                        {param.id.slice(-1)}
                        
                    </div>
                    <button className="dcERit" onClick={() => {navigate('/');}}>이전으로</button>
                    </div>
                    <h1 className="textaling">{real.input}</h1>
                    <main className="textaling">{real.work}</main>
                </div>
            </div>
        </div>
    )
}
export default Works