import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800 text-center">
        Welcome to AuthVault - The Auth App!
      </h1>
      <p className="mb-4 text-slate-700 text-justify">
        Welcome to AuthVault, a robust web application crafted using the MERN
        stack — MongoDB, Express, React and Node.js. This dynamic site offers
        seamless authentication capabilities, allowing users to easily sign up,
        sign in securely, sign out. It offers Google's OAuth functionality and
        also has delete user functionality. Access to protected routes is
        exclusively granted to authenticated users.
      </p>
      <p className="mb-4 text-slate-700 text-justify">
        The front-end is powered by React with intuitive client-side routing
        facilitated by React Router. On the backend, Node.js and Express handle
        the heavy lifting, while MongoDB serves as the reliable database.
        Authentication features are implemented using JSON Web Tokens (JWT),
        ensuring a smooth and secure user experience.
      </p>
    </div>
  );
}
