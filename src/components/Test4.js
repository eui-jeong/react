import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test4 = () => {
    const [ post , setPost ] = useState({})
    const [ id , setId ] = useState( 3 )
    const [ num , setNum ] = useState( 3 )

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        axios.get( url )
             .then( res => setPost( res.data) )
    },[ num ])

    const onShow  = ()  => {
        setNum( id )
    }

    return (
        <div>
             <p>
                <input type="text" value={id} onChange={ e => setId( e.target.value )} />
                <button onClick = { onShow }>검색</button>
             </p>         
             <h2> id: { post.id } </h2>
             <h3> title: {post.title } </h3>
        </div>
    );
};

export default Test4;