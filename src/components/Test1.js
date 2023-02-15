import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test1 = () => {
    const [ data , setData ] = useState([])
    
    //비동기 통신  - useEffect 
    /*
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res  =>  res.json() )
        .then( res => setData( res ))
    },[])
  
   useEffect ( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then( res => setData( res.data ))
   },[])
   */
   
   /*
   useEffect ( () => {
        //함수
        const getData = async()  => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData( res.data )
        }  
        getData() 
   },[])
   */
  
   useEffect ( () => {
    //함수
    const getData = async()  => {
        const res = await  fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json() 
        setData( data )
    }  
        getData() 
    },[])

    return (
        <div>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        { item.id } / { item.title }
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test1;

/*
    open API 

    비동기통신  - AJAX 
    서버에 새로고침 없이 요청할 수있게 도와줌 
    서버로 네트워크 요청을 보내고 응답을 받을수 있도록 함 

    1. jQuery - $.ajax()
    2. js  - fetch() - json 
       js 설치  - axios.get() - object 

 
       fetch( url , [options])
       .then( 콜백 ) - 응답성공
       .catch( 콜백 ) - 응답실패 


       axios.get(url)
            .then( 콜백 ) - 응답성공 
            .catch( 콜백 ) - 응답실패 

*/