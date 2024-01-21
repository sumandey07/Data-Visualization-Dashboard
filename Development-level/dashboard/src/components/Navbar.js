import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <nav className="bg-white justify-between sticky top-4 mt-4 mx-4 border-2 border-slate-200 rounded-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                className="opacity-70"
                type="button"
                data-drawer-target="drawer-navigation"
                data-drawer-show="drawer-navigation"
                aria-controls="drawer-navigation">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center"></div>
              <div className="hidden sm:ml-6 sm:block">
                {/* <div className="flex space-x-4"></div> */}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-500 hover:bg-gray-200 focus:">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-7 w-7" aria-hidden="true" />
              </button>

              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "items-center flex flex-row pe-6 ps-4 gap-4 py-5 text-sm text-gray-700"
                          )}>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="flex flex-col">
                            <span>John Doe</span>
                            <span className="text-gray-500 text-xs text-left">
                              admin
                            </span>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                    <hr />
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "text-left items-center gap-4 flex flex-row px-4 py-3 text-[15px] text-gray-700"
                          )}>
                          <UserIcon className="h-5 w-5 text-gray-500" />
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "text-left flex flex-row items-center gap-4 px-4 py-3 text-[15px] text-gray-700"
                          )}>
                          <Cog6ToothIcon className="h-5 w-5 text-gray-500" />
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "text-left flex flex-row items-center gap-4 px-4 py-3 text-[15px] text-gray-700"
                          )}>
                          <CreditCardIcon className="h-5 w-5 text-gray-500" />
                          Billing
                        </Link>
                      )}
                    </Menu.Item>
                    <hr />
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "text-left flex flex-row items-center gap-4 px-4 py-3 text-[15px] text-gray-700"
                          )}>
                          <CurrencyDollarIcon className="h-5 w-5 text-gray-500" />
                          Pricing
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "text-left flex flex-row items-center gap-4 px-4 py-3 text-[15px] text-gray-700"
                          )}>
                          <QuestionMarkCircleIcon className="h-5 w-5 text-gray-500" />
                          FAQ
                        </Link>
                      )}
                    </Menu.Item>
                    <hr />
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "flex-row flex items-center gap-4 px-4 py-3 text-[15px] text-gray-700"
                          )}>
                          <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-gray-500" />
                          <span>Logout</span>
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
        aria-labelledby="drawer-navigation-label">
        <h5
          id="drawer-navigation-label"
          className="mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          DASHBOARD
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="flex-1 ms-1 whitespace-nowrap">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-1 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-1 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-1 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
