import React from "react";
import Logo from "../../assets/logo.png";
import css from "./Footer.module.css";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
          <span>Livin</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando, FL 32801 </span>
            </span>

            <span className={css.pngLine}>
              {" "}
              <PhoneIcon className={css.icon} />
              <a href="tel:352-254-5687">352-254-5687</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:suport@livin.com">suport@livin.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Sign in
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">About Us</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <p>Safety Privacy & Terms </p>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>&copy; 2023 By Livin, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
