import React from 'react';

import { NavLink } from "react-router-dom";

export default function Aside(){
  return(
    <aside>
      <div>
        <input name="search" type="text" placeholder="Search..." />
      </div>
      <ul>
        <li><NavLink  to='/'>Home</NavLink ></li>
        <li><NavLink  to='/getting_started'>Getting Started</NavLink ></li>
        <li><NavLink  to='/routing'>Routing</NavLink ></li>
        <li><NavLink  to='/generation'>Generation</NavLink ></li>
        <li><NavLink  to='/views'>Views</NavLink ></li>
        <li><NavLink  to='/js-css-images'>JS, CSS, and Images</NavLink ></li>
        <li><NavLink  to='/testing'>Testing</NavLink ></li>
        <li><NavLink  to='/builing-a-hive-of-your-own'>Building a hive of your own</NavLink ></li>
      </ul>
      <button class="close-button menu-button" onclick="toggleMenu()">
        <span class="material-symbols-outlined">
          close
        </span>
      </button>
    </aside>
  )
}