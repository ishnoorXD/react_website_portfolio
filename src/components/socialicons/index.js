import React from "react";
import "./style.css";
import {
  FaVoicemail,
  FaInstagram,
  FaBan,
  FaTelegramPlane,
} from "react-icons/fa";
import { socialprofils, contactConfig } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.email && (
          <li>
            <a href={socialprofils.email}>
              <FaVoicemail />
            </a>
          </li>
        )}
        {socialprofils.instagram&& (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.rick && (
          <li>
            <a href={socialprofils.rick}>
              <FaBan />
            </a>
          </li>
        )}
        {socialprofils.telegram && (
          <li>
            <a href={socialprofils.telegram}>
              <FaTelegramPlane />
            </a>
          </li>
        
        )}
      </ul>
      <p>Follow Me FAST</p>
    </div>
  );
};
