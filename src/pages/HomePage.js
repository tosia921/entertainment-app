import React from 'react'

import PageWrapper from '../Components/PageWrapper'
import Recommended from '../Components/Recommended'
import TrendingMovies from '../Components/TrendingMovies'

const HomePage = () => {
  return (
    <PageWrapper>
      <TrendingMovies />
      <Recommended />
    </PageWrapper>
  )
}

export default HomePage