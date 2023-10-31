import { useState } from "react";

const Exam04 = ()=>{
    const [number, setNumber] = useState(0);

    
    return(
        <>
            <h1>(Q)주말에 뭐하세요?</h1>    
            <textarea className="form-control w-50" rows="5" maxLength={1000} onChange={e=>setNumber(parseInt(e.target.textLength))}></textarea>
            <div className="text-end w-50">
                <h4>{number}/1000 bytes</h4>
            </div>
        </>
    );

};

export default Exam04;