import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import GlobalStyle from './../styled/Global';
import GalleryList from './GalleryList';
import GallerySearch from './GallerySearch';

const Container  = styled.div`
    width:1400px; margin:auto;
`

const Gallery = () => {
    const [ data , setData ] = useState([])
    const [ loading , setLoading ] = useState(true)
    const [ error , setError ] = useState('')

    useEffect( () => {
        const API_KEY  =''
        const url = ``
        axios.get(url)
             .then( res => {})
             .catch( error => {})
    },[])

    return (
        <>
           <GlobalStyle />
            <Container>
                <GallerySearch />
                <GalleryList />
            </Container>
        </>
    );
};

export default Gallery;