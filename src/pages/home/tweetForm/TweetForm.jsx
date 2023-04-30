import React from "react";
import { useState } from "react";
import style from "./TweetForm.module.css";
import { CgProfile } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import TextField from "@mui/material/TextField";
import { useSetRecoilState } from "recoil";
import { tweetsAtom } from "../../../recoil/tweets";
function TweetForm() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const setTweets = useSetRecoilState(tweetsAtom);

  function handleSubmit(e) {
    e.preventDefault();

    if (name && content) {
      const newtweet = {
        id: Date.now(),
        content:content,
          
        createdAt: "2022-06-27T21:45:25.612Z",
        image: `https://picsum.photos/1000/500?q=${Date.now()}`,
        tweetedBy: {
          id: "eead1d48-1586-44d7-8bf8-ff076d6ee35e",
          name: name,
        },
        likeCount: 0,
        commentCount: 0,
        reTweetsCount: 0,
        isLiked: false,
      };
      setTweets((tweets)=>{
        return [newtweet,...tweets]
      })
      setContent("")
      setContent("")
    }
  
  }
  return (
    <div className={style.container}>
      <h1>
        <form onSubmit={handleSubmit}>
          <div>
            <CgProfile />
          </div>
          <div className={style.textField}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
              id="standard-basic"
              placeholder="name"
              variant="standard"
            />
          </div>
          <div className={style.textarea}>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              name="content"
              value={content}
              placeholder="Whats happening?"
              className={style.textArea}
            />
          </div>
          <div className={style.lowerPart}>
            <div className={style.emogeStyle}>
              <CiImageOn className={style.emogies} />
              <AiOutlineFileGif className={style.emogies} />
              <BiPoll className={style.emogies} />
              <BsEmojiSmile className={style.emogies} />
              <CiLocationOn className={style.emogies} />
            </div>
            <div className={style.button}>
              <button type="submit" className={style.btn}>
                Tweet
              </button>
            </div>
          </div>
        </form>
      </h1>
    </div>
  );
}

export default TweetForm;
