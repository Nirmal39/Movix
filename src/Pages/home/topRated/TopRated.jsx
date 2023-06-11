import React, { useState } from 'react'
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../Components/switchTab/SwitchTab'
import Carousel from '../../../Components/carousel/Carousel'
import useFetch from '../../../hooks/useFetch'

const TopRated = () => {

  const [endPoint, setEndPoint] = useState("movie")

  const {data,loading} = useFetch(
    `/${endPoint}/top_rated/`
  )

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv"  )
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTab data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  )
}

export default TopRated