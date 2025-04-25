import React from 'react';

import Aside from './aside';
import Header from './header';

export default function Layout(props) {
  return (
    <>
      <Header />
      <Aside />
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