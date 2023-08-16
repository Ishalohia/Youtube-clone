import React from 'react'
import VideoContainer from './VideoContainer'
import FilterButtonList from './FilterButtonList'

const MainContainer = () => {
  return (
    <div className='col-span- 11 ml-4'>
     <FilterButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
