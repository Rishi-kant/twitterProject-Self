import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tweetsAtom } from "../../../recoil/tweets";
import TweetCard from "../tweetCard/TweetCard";

function Feeds() {
  const tweets = useRecoilValue(tweetsAtom);
  const  setTweet=useSetRecoilState(tweetsAtom)


   function toggleLike(index){
    const tweet={...tweets[index]}
    const updated=[...tweets]
    tweet.isLiked=!tweet.isLiked
    tweet.isLiked ? tweet.likeCount++:tweet.likeCount--
    updated[index]=tweet
    setTweet(updated)
   }
  return (
    <div>
      
        {tweets.map((tweet,index) => (
          <div key={tweet.id} >
            <TweetCard 
            onToggleLike={()=>toggleLike(index)}
            key={tweet.id} tweet={tweet} />
          </div>
        ))}
     
    </div>
  );
}

export default Feeds;
