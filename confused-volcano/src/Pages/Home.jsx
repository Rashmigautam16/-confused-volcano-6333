import React from "react";
import {useState, useEffect} from "react"
import GetHomedata from "./Components/GetHomedata";

function Home(){
const [data, setData] = useState([])

const getdata=()=>{
    return fetch(`https://newsapi.org/v2/top-headlines?country=In&category=business&apiKey=d9f630f1445343698df2b4f2ac67ea35`)
    .then((res)=>res.json())
    .then((res)=>{
        setData(res.articles)
        console.log(res.articles)
    })
}

useEffect(()=>{
    getdata();
},[])

    return (
        <>
        <h1>Home</h1>
            <div style={{width:"80%", margin:"auto"}}>
               <div>
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

export default Home;