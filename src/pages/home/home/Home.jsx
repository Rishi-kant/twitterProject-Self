
import React from 'react'
import style from "./Home.module.css"
import HomeNav from '../homeNavbar/HomeNav'
import { useRecoilValue } from 'recoil'
import { tweetsAtom } from '../../../recoil/tweets'
import TweetForm from '../tweetForm/TweetForm'
import Feeds from '../feeds/Feeds'

function Home() {

  // const tweets=useRecoilValue(tweetsAtom)
  
  return (
    <div className={style.container}>
        <div className={style.MiddleContainer}>
         <HomeNav/>
         <TweetForm/>
         <Feeds/>
        </div>
    </div>
  )
}

export default Home