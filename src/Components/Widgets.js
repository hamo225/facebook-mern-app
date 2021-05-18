import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechinsider%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=294974537649442"
        width="340"
        height="515"
        style={{ border: "none", overflor: "hidden" }}
        scrolling="no"
        overflow="hidden"
        allow="encrypted-media"
        title="facebooklive"
      ></iframe>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbusinessinsider&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=294974537649442"
        width="340"
        height="1500"
        style={{ border: "none", overflor: "hidden" }}
        scrolling="no"
        overflow="hidden"
        allow="encrypted-media"
        title="facebooklive"
      ></iframe>
    </div>
  );
};

export default Widgets;
