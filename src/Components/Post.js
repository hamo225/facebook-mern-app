import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

const Post = ({ profilePic, image, imgName, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar"></Avatar>
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
          {/* image later from backend */}
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt={imgName} />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon></ThumbUpIcon>
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon></NearMeIcon>
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon></AccountCircleIcon>
          <ExpandMoreOutlined></ExpandMoreOutlined>
        </div>
      </div>
    </div>
  );
};

export default Post;
