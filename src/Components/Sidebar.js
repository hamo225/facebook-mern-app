import React from "react";
import "./Sidebar.css";

import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "../StateProvider";

// import { useStateValue } from "../StateProvider";

const Sidebard = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName}></SidebarRow>
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      ></SidebarRow>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"></SidebarRow>
      <SidebarRow Icon={PeopleIcon} title="Friends"></SidebarRow>
      <SidebarRow Icon={ChatIcon} title="Messenger"></SidebarRow>
      <SidebarRow Icon={StoreFrontIcon} title="Marketplace"></SidebarRow>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"></SidebarRow>
      <SidebarRow Icon={ExpandMoreOutlined} title="More"></SidebarRow>
    </div>
  );
};

export default Sidebard;
