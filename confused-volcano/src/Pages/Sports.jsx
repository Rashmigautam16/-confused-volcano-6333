import React from "react";
import {useState, useEffect} from "react"
import GetHomedata from "./Components/GetHomedata";

function Sports(){
    const [data, setData] = useState([])

const getdata=()=>{
    return fetch(`https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`)
    .then((res)=>res.json())
    .then((res)=>{
        setData(res.articles)
        console.log(res.articles)
    })
}

useEffect(()=>{
    getdata();
},[])

const styledata={
    display:"grid",
    gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",
    gap:"20px"
}
    return (
        <>
        <h1>Home</h1>
            <div style={{width:"80%", margin:"auto"}}>
               <div style={styledata}>
                    {
                        data.map((el)=>(
                            <GetHomedata img={el.urlToImage} title={el.title} des={el.description} />
                        ))
                    }
               </div>
            </div>
        </>
    )
}

export default Sports;