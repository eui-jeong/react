import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test3 = () => {
    const [ data , setData ] = useState([])
    const [ loading , setLoading ] = useState( false )
    const [ error , setError ] = useState( null )

    useEffect( () => {
       setLoading( true )
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then( res => res.json() )
       .then( res => setData( res ))
       .catch( error  => setError( error ))
       .finally( () => setLoading( false ))            
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