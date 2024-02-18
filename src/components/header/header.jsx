import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import { navigations } from "./navigtaions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
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

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <NavLink to="/">
                  <span className="sr-only">Page logo</span>
                  <img
                    className="h-8 w-auto rounded-full"
                    src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/426427521_3498511290438956_7462136380476691883_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeG2eMJCCgsrJ0nwsWScoj16aLHOciArEBposc5yICsQGuetMaRwMDyD0MvMMbtLp3IfbDzhsyjMIAdvJMADQ_aR&_nc_ohc=Fsl_KcEJWSMAX88dkCL&_nc_ht=scontent.fdac24-2.fna&oh=00_AfB2Qou9hens7rNKre0lUSbo4ZeBiQGr8DJ-Nf7appkanw&oe=65CF9D9D"
                    alt=""
                  />
                </NavLink>
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
