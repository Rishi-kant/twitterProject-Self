import React from "react";

import style from "./TweetCard.module.css";

import { AiFillHeart, AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

function TweetCard(props) {
  const tweet = props.tweet;
  return (
    <div className={style.container}>
      <div>
        <h3>{tweet.tweetedBy.name}</h3>
        <p className={style.content}>{tweet.content}</p>
      </div>

      <img className={`${style.image} ${style.hand}`} src={tweet.image}  onDoubleClick={props.onToggleLike}/>
      <div className={style.TweetData}>
        <div className={`${style.col} ${style.hand}`}>
          <FaRegComment />
          {tweet.commentCount}
        </div>
        <div className={`${style.col} ${style.hand}`}>
          <AiOutlineRetweet />
          {tweet.reTweetsCount}
        </div>
        <div className={`${style.col} ${style.hand}`}>
          <span onClick={props.onToggleLike}>
            {tweet.isLiked ? (
              <AiFillHeart color="red" />
            ) : (
              <AiOutlineHeart color="red" />
            )}
          </span>
          {tweet.likeCount}
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
