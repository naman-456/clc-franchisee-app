"use client"

import Link from "next/link";
export const WelcomeScreen = () => {
    return (
        <>
          <div className="bg-[#1a3a5c] min-h-12 px-2 py-4">
               <span>CLC</span>
               <span className="ml-6 bg-[#276FF5] p-2 rounded-2xl">Franchise Portal</span>
          </div>
          <div className="mt-10">
              <span className="text-white ml-25">CAREER LAB CONSULTING</span>
              <div className="mt-8">
                  <span className="ml-25">Grow with CLC Franchise Program</span>
                  <p className="mt-5 ml-25">Partner with India's leading AI/ML EdTech brand. Expand your institute's reach with world-class curriculum.</p>
              </div>
          </div>
          
          <Link  href="/create-franchise" className="bg-[#1a3a5c] p-4 mt-4 w-sm rounded-2xl ml-25 hover:cursor-pointer flex justify-center">Apply for Franchise</Link>
          <button className="p-4 mt-4 w-sm rounded-2xl border-2 border-[#1a3a5c] ml-25 hover:cursor-pointer">Login</button>
        </>
    )
}