import React, { useEffect, useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux';
import Img from '../../../Components/lazyLoadImage/Img'
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper'


const HeroBanner = () => {

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  const {url} = useSelector((state)=> state.home)

  const {data,loading} = useFetch('/movie/upcoming')

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
    }
};

  useEffect(()=>{
    const bg = url.backdrop + data?.results[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bg)
  },[data])

  return (
    <div className="heroBanner">

      <div className="backdrop-img">
        <Img src={background}/>
      </div>

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">
                  Millions of Movies, TV shows to discover.
                  Explore now.
          </span>
          <div className="searchInput">
            <input type="text"
              value={query}
              onChange={(e)=> setQuery(e.target.value)}
              placeholder='search any movie or tv shows...'
              onKeyUp={searchQueryHandler}
            />
            <button>search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner