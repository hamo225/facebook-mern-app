import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      {/* Story >> img profile pic and title */}
      <Story
        className="story"
        image="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/7493938?v=4"
        title="Tarek Hamaoui"
      ></Story>
      <Story
        className="story"
        image="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2915&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/7493948?v=4"
        title="Elon Musk"
      ></Story>
      <Story
        className="story"
        image="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/7491958?v=4"
        title="Sarah Sawan"
      ></Story>
      <Story
        className="story"
        image="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/7493968?v=4"
        title="The Boss"
      ></Story>
      <Story
        className="story"
        image="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/7493968?v=4"
        title="Anja Eskow"
      ></Story>
      <Story
        className="story"
        image="https://images.unsplash.com/photo-1479064312651-24524fb55c0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/7493968?v=4"
        title="Harry"
      ></Story>
    </div>
  );
};

export default StoryReel;
