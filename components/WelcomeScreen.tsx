"use client"

import Link from "next/link";
import { MetricsSection } from "./MetricsSection";
import { WhyPartnerWithCLC } from "./WhyPartnerWithCLC";
import { HowItWorks } from "./HowItWorks";
import { FAQSection } from "./FAQSection";
import { FooterSection } from "./FooterSection";
export const WelcomeScreen = () => {
    return (
        <>
          <div className="bg-[#1a3a5c] min-h-12 px-2 py-4">
               <span>CLC</span>
               <span className="ml-6 bg-[#276FF5] p-2 rounded-2xl">Franchise Portal</span>
          </div>
          <div className="mt-10">
               <div>
                    <span className="text-white ml-8 sm:ml-8 lg:ml-24 ">CAREER LAB CONSULTING</span>
                    <div className="mt-8">
                        <span className="lg:ml-25 md:ml-25 ml-8">Grow with CLC Franchise Program</span>
                        <p className="mt-5 lg:ml-25 md:ml-25 ml-8">Partner with India's leading AI/ML EdTech brand. Expand your institute's reach with world-class curriculum.</p>
                    </div>
               </div>
          <Link  href="/create-franchise" className="bg-[#1a3a5c] p-4 mt-4 w-sm rounded-2xl lg:ml-25 md:ml-25 ml-6 mr-8 lg:mr-0 md:mr-0 hover:cursor-pointer flex justify-center">Apply for Franchise</Link>
          <Link href="/sign-in" className="p-4 mt-4 w-sm rounded-2xl border-2 border-[#1a3a5c] lg:ml-25 md:ml-25 ml-6 mr-8 lg:mr-0 md:mr-0 hover:cursor-pointer flex justify-center block">Login</Link>
          </div>
          <MetricsSection />
          <WhyPartnerWithCLC />
          <HowItWorks />
          <FAQSection />
          <FooterSection />
        </>
    )
}