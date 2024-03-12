import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  RssFeed,
  Chat,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  ExitToApp,
} from "@material-ui/icons";
import "./sidebar.css";

export default function Sidebar() {
  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState("Feed");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    if (itemName === "Logout") {
      handleLogout(); // Redirect to logout page
    } else {
      history.push(`/${itemName.toLowerCase()}`); // Redirect to the corresponding page
    }
  };

  const handleLogout = () => {
    // Redirect to logout page
    history.push("/logout");
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li
            className={`sidebarListItem ${
              selectedItem === "Feed" && "selected"
            }`}
            onClick={() => handleItemClick("Feed")}
          >
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li
            className={`sidebarListItem ${
              selectedItem === "Chats" && "selected"
            }`}
            onClick={() => handleItemClick("chat")}
          >
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li
            className={`sidebarListItem ${
              selectedItem === "Groups" && "selected"
            }`}
            onClick={() => handleItemClick("Groups")}
          >
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li
            className={`sidebarListItem ${
              selectedItem === "Bookmarks" && "selected"
            }`}
            onClick={() => handleItemClick("Bookmarks")}
          >
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li
            className={`sidebarListItem ${
              selectedItem === "Questions" && "selected"
            }`}
            onClick={() => handleItemClick("Questions")}
          >
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li
            className={`sidebarListItem ${
              selectedItem === "Jobs" && "selected"
            }`}
            onClick={() => handleItemClick("Jobs")}
          >
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li
            className={`sidebarListItem ${
              selectedItem === "Events" && "selected"
            }`}
            onClick={() => handleItemClick("Events")}
          >
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li
            className={`sidebarListItem ${
              selectedItem === "Courses" && "selected"
            }`}
            onClick={() => handleItemClick("Courses")}
          >
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
          <li
          
            className={`sidebarListItem ${
              selectedItem === "Logout" && "selected"
            }`}
            onClick={() => handleItemClick("Logout")}
          >
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>
          
          </li>
        </ul>
      </div>
    </div>
  );
}
