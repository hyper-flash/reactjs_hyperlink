import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="relative bg-white">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
            </div>
            <nav className="hidden space-x-10 md:flex">
                <Link
                  to='/'
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                  aria-expanded="false"
                >
                  <span>Home</span>
                </Link>
                <Link
                  to='/faq'
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                  aria-expanded="false"
                >
                  <span>FAQ</span>
                </Link>
              <Link
                to="/contact/kenil" state={{id:10,"name":"Test"}}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact-us
              </Link>
            </nav>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link
                to="/login"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Login

              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
