import { useEffect, useState } from "react";
import axios from "axios";

const Book = (props)=>{

    const [bookList, setBookList] = useState([]);
    useEffect(()=>{
        //서버에서 pocketmon list를 불러와서 state에 설정하는 코드
        axios({
            url:"http://localhost:8080/book/",
            method:"get"
        })
        .then(response=>{
            // console.log(response);
            setBookList(response.data);
        })
        .catch(err=>{});
    },[]);

    return(
        <>
            <h1>도서 관리화면</h1>
        </>
    )

};

export default Book;