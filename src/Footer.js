import React from "react";
import "./styles.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <SocialIcon
        url="https://github.com/MayurKumbhar226"
        className="FooterIcons"
      />
      <SocialIcon
        url="https://www.linkedin.com/in/mayur-kumbhar-9a4100232"
        className="FooterIcons"
      />
      <SocialIcon
        url="https://instagram.com/mayur_prajapati_001?igshid=NGExMmI2YTkyZg=="
        className="FooterIcons"
      />
      <p className="FooterItems">
        This website is created by me, Mayur. If you like my work and would
        like to support me or hiring me for jobs, please visit one of my social
        media or go "link here later" for contact.
      </p>
    </div>
  );
}
