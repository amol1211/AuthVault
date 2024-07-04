import React from "react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-4 py-12 max-w-2xl mx-auto flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-slate-800 text-center">
          About and why I built AuthVault!
        </h1>
        <p className="mb-4 text-slate-700 text-justify">
          In the realm of digital security, robust{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            authorization
          </span>{" "}
          systems are indispensable, safeguarding access to{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            sensitive data
          </span>{" "}
          and ensuring compliance with stringent{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            security
          </span>{" "}
          standards. SaaS products like{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            Clerk
          </span>{" "}
          and{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            Keycloak
          </span>{" "}
          exemplify advanced authorization solutions, offering streamlined user
          management, sophisticated role-based{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            access control
          </span>
          , and seamless{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            integration capabilities
          </span>
          .
        </p>

        <p className="mb-4 text-slate-700 text-justify">
          However,{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            I believe learning to build authentication and authorization
          </span>{" "}
          is crucial and serves as{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            entry point
          </span>{" "}
          for any web application. This belief led to the creation of AuthVault,
          a bespoke web application meticulously crafted using the MERN stack.
          AuthVault transcends generic offerings by providing bespoke
          authentication functionalities, including{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            Google's OAuth
          </span>{" "}
          and{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            JWT
          </span>
          -based secure routes. This custom-built solution ensures unparalleled
          scalability, efficiency, and security, catering to specific business
          requirements. It stands as a testament to the power of customized
          authorization, delivering a{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            refined
          </span>
          ,{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            secure
          </span>{" "}
          and{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            reliable alternative
          </span>{" "}
          in a landscape dominated by{" "}
          <span className="font-bold text-blue-600 bg-yellow-300 rounded-lg p-0.5">
            generic SaaS products
          </span>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
