import React, { useState } from "react";
import { Avatar, Input } from "@material-ui/core";
import "./MessageSender.css";

import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../StateProvider";

import firebase from "firebase";
import db from "../firebase";

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");

  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });

    setInput("");
    setImageURL("");
  };

  // function handleChange(e) {
  //   if (e.target.files[0]) {
  //     setImageURL(e.target.files[0]);
  //   }
  // }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}></Avatar>
        <form action="">
          <input
            placeholder={`Whats on your mind, ${user.displayName}?`}
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            // type="file"
            className="messageSender__fileSelector"
            placeholder="image URL (Optional)"
            // onChange={handleChange}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }}></VideocamIcon>
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }}></PhotoLibraryIcon>
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }}></InsertEmoticonIcon>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
