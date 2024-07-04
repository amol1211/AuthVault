import React from "react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-4 py-12 max-w-2xl mx-auto flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-slate-800 text-center">
          Welcome to AuthVault - The Auth App!
        </h1>

        <p className="mb-4 text-slate-700 text-justify">
          <span className="font-bold text-blue-600">AuthVault</span> is a robust
          web application crafted using the{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            MERN
          </span>{" "}
          stack —{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            MongoDB
          </span>
          ,{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            Express
          </span>
          ,{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            React
          </span>{" "}
          and{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            Node.js
          </span>
          . This dynamic site offers seamless authentication capabilities,
          allowing users to easily{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            sign up
          </span>
          ,{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            sign in
          </span>{" "}
          securely,{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            sign out
          </span>
          . It offers{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            Google's OAuth
          </span>{" "}
          functionality and also has{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            delete user
          </span>{" "}
          functionality. Access to protected routes is exclusively granted to
          authenticated users. User can also{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            update
          </span>{" "}
          their credentials like{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            profile picture
          </span>
          ,{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            username
          </span>
          ,{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            email
          </span>{" "}
          and{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            password
          </span>
          .
        </p>
        <p className="mb-4 text-slate-700 text-justify">
          The{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            front-end
          </span>{" "}
          is powered by React with intuitive client-side routing facilitated by{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            React Router
          </span>
          . On the{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            backend
          </span>
          , Node.js and Express handle the heavy lifting, while{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            Redux toolkit
          </span>{" "}
          is used for streamlined{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            state management
          </span>{" "}
          to effortlessly maintain global states. MongoDB serves as the reliable
          database. Authentication features are implemented using{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            JSON Web Tokens (JWT)
          </span>
          , ensuring a smooth and secure user experience.
        </p>
        <p className="text-slate-700">
          Click to view the source code on{" "}
          <a
            href="https://github.com/amol1211/AuthVault"
            className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5"
          >
            GitHub
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}

/*
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow px-4 py-12 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome to AuthVault - The Auth App!
        </h1>
        <p className="mb-4 text-gray-700 text-justify">
          Welcome to AuthVault, a robust web application crafted using the MERN
          stack — MongoDB, Express, React, and Node.js. This dynamic site offers
          seamless authentication capabilities, allowing users to easily sign
          up, sign in securely, and sign out. It also includes user deletion
          functionality. Access to protected routes is exclusively granted to
          authenticated users.
        </p>
        <p className="mb-4 text-gray-700 text-justify">
          The front-end is powered by React with intuitive client-side routing
          facilitated by React Router. On the backend, Node.js and Express
          handle the heavy lifting, while MongoDB serves as the reliable
          database. Authentication features are implemented using JSON Web
          Tokens (JWT), ensuring a smooth and secure user experience.
        </p>
      </div>
    </div>
  );
}
*/
