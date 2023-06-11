import React, { useState } from 'react'
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../Components/switchTab/SwitchTab'
import Carousel from '../../../Components/carousel/Carousel'
import useFetch from '../../../hooks/useFetch'

const Trending = () => {

  const [endPoint, setEndPoint] = useState("day")

  const {data,loading} = useFetch(
    `/trending/all/${endPoint}`
  )

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week"  )
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  )
}

export default Trending