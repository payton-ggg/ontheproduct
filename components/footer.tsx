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
          <div id="footer-top-menu-container" role="menubar">
              <ul id="footer-top-menu" role="menu">
                  <li className="footer-top-menu-item" role="menuitem">
                      <a href="#" className="footer-top-menu-link">IT Services</a>
                  </li>
                  <li className="footer-top-menu-item footer-top-menu-item-active" role="menuitem">
                      <a href="#" className="footer-top-menu-link">Web development</a>
                  </li>
                  <li className="footer-top-menu-item" role="menuitem">
                      <a href="#" className="footer-top-menu-link">SEO</a>
                  </li>
                  <li className="footer-top-menu-item" role="menuitem">
                      <a href="#" className="footer-top-menu-link">UI/UX</a>
                  </li>
              </ul>
          </div>
          <div id="footer-buttons-container">
              <a href="#" className="footer-button" role="button">View our Projects</a>
          </div>
      </section>

      <section className="horizontal-footer-section" id="footer-middle-section">
          <div id="footer-about" className="footer-columns footer-columns-large">
              <h1> Our Newsletter</h1>
              <a href="#" className="footer-button" role="button">Subscribe</a>
          </div>
          <div className="footer-columns">
              <h1>Overview</h1>
              <ul className="footer-column-menu" role="menu">
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">Services </a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">Pricing</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">Portfolio</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">News</a>
                  </li>
              </ul>
          </div>
          <div className="footer-columns">
              <h1>Resources</h1>
              <ul className="footer-column-menu" role="menu">
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">FAQ</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">Media</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">Guides</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">Free Resources</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">Testimonials</a>
                  </li>
              </ul>
          </div>
          <div className="footer-columns">
              <h1>Information</h1>
              <ul className="footer-column-menu" role="menu">
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">About Us</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">Terms of Use</a>
                  </li>
                  <li className="footer-column-menu-item">
                      <a href="#" className="footer-column-menu-item-link" role="menuitem">Legal Information</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">Message Us</a>
                  </li>
                  <li className="footer-column-menu-item" role="menuitem">
                      <a href="#" className="footer-column-menu-item-link">Leave a Feedback</a>
                  </li>
              </ul>
          </div>
      </section>

      <section className="horizontal-footer-section" id="footer-bottom-section">
          <div id="footer-copyright-info">
              &copy; Reimu Inc. 2022. All rights reserved.
          </div>
      </section>

      </footer>
    </motion.div>
  );
}
