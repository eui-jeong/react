import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test3 = () => {
    const [ data , setData ] = useState([])
    const [ loading , setLoading ] = useState( false )
    const [ error , setError ] = useState( null )

    useEffect( () => {
        const getData = async()  => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setData( res.data )
                setLoading( true )
                setError( null )
            } catch( e ) {                
                setError( e )
            } finally {
                setLoading( false )
            }            
        }
        getData() 
    },[])

   return (
        <div>
            { loading &&   <h2>로딩중... </h2> }
            {
            data && data.map( item => <p key={item.id}>
                    { item.id } / { item.title }
                </p>)
            }       
            { error &&  <h2>에러가 발생했습니다.</h2> }
        </div>
    );
};

export default Test3;