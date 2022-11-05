import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-body">
        <div className="header-container">
            <div className="header-logo">
                <h1>Pixel Hero</h1>
            </div>
            <div className="header-menu">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        <div className="user-menu">
                            <div className="user-menu-header">
                                <div className="user-menu-name">
                                    <p>John Doe</p>
                                </div>
                                <div className="user-menu-avatar">
                                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
                                </div>
                                <div className="user-menu-options">
                                <ul>
                                    <li>
                                        <a href="/profile">Profile</a>
                                    </li>
                                    <li>
                                        <a href="/settings">Settings</a>
                                    </li>
                                    <li>
                                        <a href="/logout">Logout</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
export default Header;