import { useState } from "react";

function Exam03(){
    const [number, setNumber] = useState(0);
   
    return(
        <>
            <h1>출금 금액</h1>
            <h2>￦{number}원</h2>
            <button onClick={()=>setNumber(number+100000)}>10만원</button>
            <button onClick={()=>setNumber(number+50000)}>5만원</button>
            <button onClick={()=>setNumber(number+10000)}>1만원</button>
            <button onClick={()=>setNumber(0)}>초기화</button>

            
        </>
    )
}

export default Exam03;