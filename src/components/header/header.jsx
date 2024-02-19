import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import { navigations } from "./navigtaions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  return (
    <div className=" lg:fixed w-full z-10">
      {/* Mobile menu */}
      <MobileMenu open={open} setOpen={setOpen} classNames={classNames} />

      <header className="relative bg-primaryHover text-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div>
            <div className="flex h-16 justify-between items-center">
              {!open && (
                <button
                  type="button"
                  className="relative rounded-md bg-textWhite p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}

              {/* User info */}
              <div className="ml-4 flex lg:ml-0">
                {user ? (
                  <>
                    <button onClick={() => navigate("/user")}>
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="user profile"
                          className="h-10 w-10 rounded-full"
                        />
                      ) : (
                        <FaUserAlt size={"25px"} />
                      )}
                    </button>
                  </>
                ) : (
                  <NavLink to="/signin">
                    <span className="sr-only">sign in</span>
                    <FaSignInAlt size={"25px"} />
                  </NavLink>
                )}
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-center">
                <div className="flex h-full space-x-8 gap-8">
                  {navigations.map((page) => (
                    <NavLink
                      key={page.name}
                      to={page.navlink}
                      className="flex items-center text-lg font-medium text-textWhite hover:text-gray-400"
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </Popover.Group>
              <div className="text-lg">
                <button>Light | Dark</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
