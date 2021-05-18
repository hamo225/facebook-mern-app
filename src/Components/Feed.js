import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel></StoryReel>
      <MessageSender></MessageSender>
      <Post
        profilePic="https://avatars.githubusercontent.com/u/7493938?v=4"
        message="Hello from the other side "
        timestamp="time"
        imgName="imgName"
        username="Tarek"
        image="https://images.unsplash.com/photo-1533713692156-f70938dc0d54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
      ></Post>
      <Post
        profilePic="https://avatars.githubusercontent.com/u/7493938?v=4"
        message="Hello from the other side "
        timestamp="time"
        imgName="imgName"
        username="Tarek"
      ></Post>
      <Post
        profilePic="https://avatars.githubusercontent.com/u/7493938?v=4"
        message="Hello from the other side "
        timestamp="time"
        imgName="imgName"
        username="Tarek"
        image="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
      ></Post>
      <Post
        profilePic="https://avatars.githubusercontent.com/u/7493938?v=4"
        message="Hello from the other side "
        timestamp="time"
        imgName="imgName"
        username="Tarek"
      ></Post>
    </div>
  );
};

export default Feed;
