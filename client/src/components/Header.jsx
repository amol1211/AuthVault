import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">AuthVault</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}

/* import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-navy-blue">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-7 text-white ">
        <Link to="/">
          <h1 className="font-bold text-2xl font-serif">
            <span className="bg-navy-blue text-white px-1">Auth</span>
            <span className="bg-white text-navy-blue px-1">Vault</span>
          </h1>
        </Link>
        <ul className="flex gap-12 uppercase">
          <Link
            to="/"
            className="hover:underline hover:underline-offset-8 hover:decoration-2"
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:underline-offset-8 hover:decoration-2"
          >
            <li>About</li>
          </Link>
          <Link
            to="/profile"
            className="hover:underline hover:underline-offset-8 hover:decoration-2"
          >
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
 */
