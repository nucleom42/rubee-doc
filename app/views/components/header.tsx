import React from 'react';

export default function Header(){
  return(
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
  )
}