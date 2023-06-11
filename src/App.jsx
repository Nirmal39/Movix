import React, { useEffect } from 'react'
import './App.css'
import {fetchDataFromApi} from './utils/api.js'
import { useSelector,useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice.js'
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import Home from './Pages/home/Home'
import Details from './Pages/details/Details'
import SearchResult from './Pages/searchResult/SearchResult'
import Explore from './Pages/explore/Explore'
import PageNotFound from "./Pages/404/PageNotFound";
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  const dispatch = useDispatch()

  const {url} = useSelector((state)=> state.home);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
    .then(res => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
    };
      dispatch(getApiConfiguration(url))
    })
  }

  useEffect(()=>{
    fetchApiConfig()
    genresCall()
  },[])

  const genresCall = async() =>{
    let promises = []
    let endpoints = ["tv", "movie"]
    let allGenres = {}

    endpoints.forEach((url)=>{
      return  promises.push(fetchDataFromApi(`/genre/${url}/list`));
    })

    const data = await Promise.all(promises)
    data.map(({genres})=>{
      return genres.map((item)=>(allGenres[item.id] = item))
    })
    
    dispatch(getGenres(allGenres))
  }

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/search/:query" element={<SearchResult/>}/>
        <Route path="/explore/:mediaType" element={<Explore/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
