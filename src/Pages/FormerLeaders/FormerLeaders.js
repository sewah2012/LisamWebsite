import './FormerLeader.css'
import React, { useEffect } from 'react'
import Banner from '../../Components/Header/Banner/Banner'
import Footer from '../../Components/Header/Footer/Footer'
import Header from '../../Components/Header/Header'
import FormerLeader from './FormerLeader'
import { useDispatch, useSelector } from 'react-redux'
import { getPastLeaders } from '../../Redux/actions/newsActions'

const FormerLeaders = () => {
  const dispatch = useDispatch()
  const { loading, pastLeaders } = useSelector((state) => state.data)
  useEffect(() => {
    dispatch(getPastLeaders())
    return () => {}
  }, [dispatch])
  return (
    <div className="formerLeaders">
      <Header />
      <Banner title="Former Executives" image="/assets/imgs/study.jpg" />
      <h1>LISAM FORMER LEADERS</h1>

      {loading ? (
        <h1>Loading data</h1>
      ) : (
        <div className="formerLeaders__list">
          {pastLeaders.map((leader, index) => (
            <FormerLeader
              key={index}
              president={leader.presidentName}
              vicePresident={leader.vicePresidentName}
              startYear={leader.startYear}
              endYear={leader.endYear}
              presImage={leader.presImage}
              vpImage={leader.vpImage}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  )
}

export default FormerLeaders
