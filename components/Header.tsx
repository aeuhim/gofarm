"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <header className={"bg-taupe-800"}>
      <div className="max-w-screen-sm flex flex-wrap items-center justify-between py-4 px-8 mx-auto">
        <Link href="/" className="flex items-center">
          <img src="/gofarm.png" className="h-7 mb-1" alt="GoFarm Logo" />
          <span className="text-3xl font-semibold text-taupe-200">
            o
          </span>
          <span className="text-3xl font-semibold text-taupe-100">
            Farm
          </span>
        </Link>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-taupe-400 hover:bg-taupe-700 rounded-lg text-sm p-2 w-10 h-10 inline-flex items-center justify-center">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <nav className={isCollapsed ? "fixed w-full h-full transition-all duration-700 ease-in overflow-y-hidden bg-taupe-800" : "fixed w-full h-0 transition-all duration-700 ease-out overflow-y-hidden bg-taupe-800"}>
        <ul className="max-w-screen-sm flex flex-col font-medium px-8 mx-auto">
          <li>
            <Link href="https://overseer.gofarm.today" className="block my-1 p-2 rounded bg-taupe-600 font-semibold text-taupe-950 outline outline-taupe-950 outline-2 hover:bg-taupe-700 hover:text-taupe-200 hover:outline-taupe-300">
              Try Overseer
            </Link>
          </li>
          {
            [
              { "path": "/", "title": "Home" },
              { "path": "/about", "title": "About" },
              { "path": "/services", "title": "Services" },
              { "path": "/contact", "title": "Contact" },
            ].map((link) => {
              return (
                <Link href={link["path"]} key={link["title"]} className={pathname == link["path"] ? "hidden" : "block my-1 p-2 rounded text-taupe-400 hover:bg-taupe-700 hover:text-taupe-200"}>
                  {link["title"]}
                </Link>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}
