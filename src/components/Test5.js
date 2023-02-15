import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Container  = styled.div`
    width:1400px; margin:15px auto; display:flex ; justify-content:space-between ;
    flex-wrap:wrap ;
`
const Article  = styled.article`
    width:300px; padding:5px; margin-bottom:20px; border:1px solid #999;
    a { text-decoration:none ; color:#000;
        h2 { font-size:20px; margin-bottom:10px; text-overflow:ellipsis; white-space:nowrap; overflow:hidden}
        img { width:300px; height:200px}
        p {padding:0 10px}
    }
`

const Test5 = () => {
    const [ data , setData ] = useState([])

    useEffect( () => {
        const API_KEY = '개인키'
        const url  = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
        axios.get(url)
             .then( res  => setData( res.data.articles ))
    }, [] )

    return (
        <Container>
            {
                data.map( (item, index ) => <Article key={index}>
                    <a href={ item.url }>
                        <h2> {item.title} </h2>    
                        <img src={ item.urlToImage } />
                        <p> {item.description} </p>
                    </a> 
                </Article>)
            }
        </Container>
    );
};

export default Test5;