import React from 'react';

export default function GettingStarted(){
  return(
    <>
      <h2>Getting Started</h2>
      <p>Welcome to the Getting Started guide for ruBee!</p>

      <p>1. Install ruBee</p>
      <code>gem install ru.Bee</code>

      <p>2. Create your first project</p>
      <code>rubee project my_project</code>

      <p>3. install dependenciees</p>
      <code>bundle install</code>

      <p>4. Run ruBee server. Default port is 7000</p>
      <code>rubee start or rubee start_dev</code>

      <p>5. Open your browser and navigate to <a href="http://localhost:7000">http://localhost:7000</a></p>
    </>
  )
}