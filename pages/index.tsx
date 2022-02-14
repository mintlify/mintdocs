/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import {
  SearchIcon,
  SunIcon,
  MoonIcon,
  ArrowRightIcon
} from '@heroicons/react/solid';

const menuSections = [
  {
    title: 'Setting Up',
    pages: [
      { name: 'Introduction', href: '#', current: true },
      { name: 'Quickstart', href: '#', current: false },
      { name: 'How to start', href: '#', current: false },
    ]
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div>
        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-56 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col py-4 overflow-y-auto">
              <div className="w-full flex items-center flex-shrink-0 px-4">
                <div className="flex-1">
                <img
                  className="h-6 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
                </div>
                <div className="flex-1 flex items-center justify-end">
                <Switch
                  checked={isDarkMode}
                  onChange={setIsDarkMode}
                  className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none"
                >
                  <span className="sr-only">Use setting</span>
                  <span aria-hidden="true" className="pointer-events-none absolute bg-white w-full h-full rounded-md" />
                  <span
                    aria-hidden="true"
                    className={classNames(
                      isDarkMode ? 'bg-indigo-600' : 'bg-gray-200',
                      'pointer-events-none absolute h-3 w-6 mx-auto rounded-full transition-colors ease-in-out duration-200'
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className={classNames(
                      isDarkMode ? 'translate-x-5' : 'translate-x-0',
                      'flex items-center justify-center pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white transform ring-0 transition-transform ease-in-out duration-200'
                    )}
                  >
                    {
                      isDarkMode ? 
                        <MoonIcon
                          className="h-4 w-4 text-gray-500"
                        />
                        :
                        <SunIcon
                          className="h-4 w-4 text-yellow-400"
                        />
                    }
                  </span>
                </Switch>
                </div>
              </div>
              <div className="mt-2">
                <button type="button" className="px-3 mt-1 relative flex items-center">
                  <div className="absolute left-5">
                    <SearchIcon className="h-4 w-4 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Find anything"
                    disabled
                    className="cursor-pointer py-1 pl-7 pr-12 bg-gray-50 block w-full sm:text-vs border font-light border-gray-200 rounded-md focus:outline-none hover:border-gray-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex py-1 pr-4">
                    <kbd className="inline-flex items-center border border-gray-200 rounded px-1 text-sm font-sans font-light text-gray-400">
                      ⌘K
                    </kbd>
                  </div>
                </button>
              </div>
              <nav className="mt-5 flex-1 pr-3 bg-white">
                {menuSections.map((section) => (
                  <>
                  <div className="mb-1 px-4 uppercase text-xs font-medium text-gray-700">
                    {section.title}
                  </div>
                  <div className="mt-2">
                  {
                    section.pages.map((page) =>
                      <a
                        key={page.name}
                        href={page.href}
                        className={classNames(
                          page.current ? 'bg-green-50 text-green-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center pl-4 py-1 text-vs rounded-r-lg'
                        )}
                      >
                        {page.name}
                      </a>
                    )}
                  </div>
                  </>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:pl-56 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            Menu
          </div>
          <main className="flex-1">
            <nav className="flex flex-row justify-end space-x-6 px-16 py-5 text-sm">
            <div className="flex items-center text-green-700">
                <h1 className="mr-1">
                  About
                </h1>
              </div>
            <div className="flex items-center text-green-700">
                <h1 className="mr-1">
                  Docs
                </h1>
              </div>
              <div className="flex items-center text-green-700">
                <h1 className="mr-1">
                  Dashboard
                </h1>
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </nav>
            <div className="w-full py-20 border-b border-gray-200 flex justify-center">
              <div className="max-w-[68rem]">
                <h1 className="text-gray-800 text-2xl tracking-tight">Stripe.js reference</h1>
                <div className="mt-5 flex text-gray-700 space-x-14 leading-relaxed">
                <div className="flex-1">
                  <p>
                    This reference documents every object and method available in Stripe’s browser-side JavaScript library, Stripe.js. Use our React <a className="text-green-700">Stripe.js reference</a> if you want to add Elements to your React based app.
                  </p>
                  <br />
                  <p>
                    You can use Stripe.js APIs to tokenize customer information, collect sensitive payment details using customizable Stripe Elements, and accept payments with browser payment APIs like Apple Pay and the Payment Request API.
                  </p>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-800 uppercase font-medium">Looking for a step by step guide?</h2>
                  <p className="mt-2 text-gray-500">Learn to accept a payment or use the Payment Request Button.</p>
                </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
