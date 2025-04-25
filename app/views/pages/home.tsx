import React from "react";

export default function Home() {
  return (
    <>
      <h2>ruBee: Features</h2>
      <ul>
        <li>Lightweight: A minimal footprint that focuses on serving Ruby applications efficiently.</li>
        <li>Contract driven: Define your API contracts in a simple, declarative manner. And generate the files for you.</li>
        <li>Fast: Optimized for speed, providing a quick response to requests. Everything is relative, I know!</li>
        <li>Rack: Rack backed. All Rack api is available for integration.</li>
        <li>Databases: Sqlite3, Postgres, Mysql and many more supported by sequel gem.</li>
        <li>Views: Json, ERB and plain HTML and ..</li>
        <li>React is supported out of the box as a rubee view</li>
        <li>Bundlable Charge your ruBee with any gem you need and update your project with bundle.</li>
        <li>ORM All models are natively ORM objects, however you can use it as a blueurpint for any datasources.</li>
        <li> Authentificatable Add JWT authentification easily to any controller action.</li>
        <li>Hooks Addlogic before, after and around any action.</li>
        <li>Test Run all or selected tests witin minitest.</li>
        <li>Asyncable Add async adapter and pick any popular background job queue enginee.</li>
      </ul>
    </>
  )
}