"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/app/favicon.ico"

export default function Footer() {
  return (
    <motion.div>
      <footer id="site-footer">
      <section className="horizontal-footer-section" id="footer-top-section">
          <div id="footer-logo">
              <picture>
                  <Image 
                    src={Logo} 
                    alt={"Logo"}
                  />
              </picture>
          </div>
          <div id="footer-buttons-container">
              <a href="https://www.figma.com/proto/42b63myLbWYz1qm8PWB7LH/OnTheProduct-%7C-Sample-work?type=design&node-id=0-1&t=HWJGSdiPHfNvyxZ5-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2" className="footer-button" role="button">View our Projects</a>
          </div>
      </section>

      <section className="horizontal-footer-section" id="footer-middle-section">
          <div id="footer-about" className="footer-columns footer-columns-large">
              <h1> Our Offers</h1>
              <a href="#pricing" className="footer-button" role="button">Subscribe</a>
          </div>
          <div className="footer-columns">
              <h1>Overview</h1>
              <ul className="footer-column-menu" role="menu">
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#pricing" className="footer-column-menu-item-link">Pricing</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#portfolio" className="footer-column-menu-item-link">Portfolio</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#skills" className="footer-column-menu-item-link">Skills</a>
                  </li>
              </ul>
          </div>
          <div className="footer-columns">
              <h1>Resources</h1>
              <ul className="footer-column-menu" role="menu">
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#faqs" className="footer-column-menu-item-link">FAQs</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#perks" className="footer-column-menu-item-link">Perks</a>
                  </li>
              </ul>
          </div>
          <div className="footer-columns">
              <h1>Information</h1>
              <ul className="footer-column-menu" role="menu">
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#about" className="footer-column-menu-item-link">About Us</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="https://www.notion.so/Regulations-of-OnTheProduct-0175fc3c2d60413ea147562391601d13?pvs=4" className="footer-column-menu-item-link">Terms of Use</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="https://calendly.com/" className="footer-column-menu-item-link">Book a Call</a>
                  </li>
              </ul>
          </div>
      </section>

      <section className="horizontal-footer-section" id="footer-bottom-section">
          <div id="footer-copyright-info">
              &copy; Ontheproduct Inc. 2023. All rights reserved.
          </div>
      </section>
      </footer>
    </motion.div>
  );
}
