import React from 'react';

import { Link } from "react-router-dom";


export default function Layout(props) {
  return (
    <>
      <header>
        <h1>ruBee</h1>
        <img src="images/rubee.svg" alt="ruBee Logo" class="logo" />
        <button class="menu-button open" onclick="toggleMenu()"><span class="material-symbols-outlined">
          menu
          </span></button>
        <button class="close-button menu-button" onclick="toggleMenu()">
          <span class="material-symbols-outlined">
            close
          </span>
        </button>
      </header>
      <aside>
        <div>
          <input name="search" type="text" placeholder="Search..." />
        </div>
        <ul>
          <li class="active"><Link to='/'>Home</Link></li>
          <li><Link to='/getting_started.html'>Getting Started</Link></li>
          <li><Link to='/routing.html'>Routing</Link></li>
          <li><Link to='/generation.html'>Generation</Link></li>
          <li><Link to='/views.html'>Views</Link></li>
          <li><Link to='/js-css-images.html'>JS, CSS, and Images</Link></li>
          <li><Link to='/testing.html'>Testing</Link></li>
          <li><Link to='/builing-a-hive-of-your-own.html'>Building a hive of your own</Link></li>
        </ul>
        <button class="close-button menu-button" onclick="toggleMenu()">
          <span class="material-symbols-outlined">
            close
          </span>
        </button>
      </aside>
      <main>{props.children}</main>

      <div class="background-right">
        <img src="images/top-right-comb.svg" alt="" class="top-right-comb" />
        <img src="images/bottom-right-comb.svg" alt="" class="bottom-right-comb" />
        <img src="images/menu-left-bottom-comb.svg" alt="" class="bottom-left-comb" />
        <img src="images/menu-left-top-comb.svg" alt="" class="top-left-comb" />
        <img src="images/mobile-top-comb.svg" alt="" class="mobile-top-comb" />
        <img src="images/mobile-bottom-left-comb.svg" alt="" class="mobile-bottom-left-comb" />
        <img src="images/mobile-bottom-right-comb.svg" alt="" class="mobile-bottom-right-comb" />
      </div>
    </>
  );
}