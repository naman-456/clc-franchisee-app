"use client";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { IdentificationIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

interface btnTab {
    id: number,
    label: string,
    btn_label: string,
    isActive: boolean
}
const tabs = [
        {
            id: 101,
            label: "Basic",
            btn_label: "1",
            isActive: true
        },
        {
            id: 102,
            label: "Business",
            btn_label: "2",
            isActive: false
        },
        {
            id: 103,
            label: "Address",
            btn_label: "3",
            isActive: false
        },
        {
            id: 104,
            label: "Docs",
            btn_label: "4",
            isActive: false
        }
    ]
export default function CreateFranchiseePage() {
    const [btnTabs, setBtnTabs] = useState<btnTab[]>(tabs);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const [courses, setCourses] = useState([
        {
            cour_id: 'CORSE1',
            name:"AI/ML",
            isSlct: false
        },
        {
            cour_id: 'CORSE2',
            name:"Data Science",
            isSlct: false
        },
        {
            cour_id: 'CORSE3',
            name:"Cloud",
            isSlct: false
        },
        {
            cour_id: 'CORSE4',
            name:"DevOps",
            isSlct: false
        },
        {
            cour_id: 'CORSE5',
            name:"Gen AI",
            isSlct: false
        },
        {
            cour_id: 'CORSE6',
            name:"Full Stack",
            isSlct: false
        }
    ])


    const handleNext = () => {
        const index = btnTabs.findIndex(btn => btn.id == activeTab.id)
        const nextIndex = index + 1
        setBtnTabs((prev: btnTab[]) => {
            const previous = [...prev]
             previous.forEach((item: btnTab, i: number)  => {
                  if(nextIndex == i){
                    previous[i].isActive = true
                  }else{
                   previous[i].isActive = false
                  }
             })
             return previous   
        })
       setActiveTab({...btnTabs[nextIndex], isActive: true})
    }

    return (
        <>
         <div className="flex justify-start gap-2 sm:gap-4 mt-4 px-4 sm:px-8 md:px-36 overflow-x-auto">
             {btnTabs.map((tab : btnTab) => (
               <div key={tab.id} className="flex flex-col items-center flex-shrink-0">
                <button className={`p-1 w-8 h-8 rounded-[50%] hover:cursor-pointer transition-colors ${tab.isActive ? 'bg-[#1a3a5c] text-white' : 'bg-white text-[#1a3a5c]'}`}>{tab.btn_label}</button>
                <div className="mt-1">
                    <span className="text-[#1a3a5c] text-xs sm:text-sm">{tab.label}</span>
                </div>
             </div>
         ))}
         </div>
         
        { activeTab.id == 101 &&  <h2 className="text-[#1a3a5c] mt-3 px-4 sm:px-8 md:px-36">Basic Information</h2>}
        { activeTab.id == 102 &&  <h2 className="text-[#1a3a5c] mt-3 px-4 sm:px-8 md:px-36">Business Information</h2>}
        { activeTab.id == 103 &&  <h2 className="text-[#1a3a5c] mt-3 px-4 sm:px-8 md:px-36">Address Information</h2>}
        { activeTab.id == 104 &&  <h2 className="text-[#1a3a5c] mt-3 px-4 sm:px-8 md:px-36">Document Uploads</h2>}

        <form className="mt-4 px-4 sm:px-8 md:px-36">
           {activeTab.id == 101 && (
              <div className="lg:flex lg:max-w-[40%] lg:justify-between lg:gap-10 lg:flex-wrap">
                    <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6 mb-4 sm:mb-0">
                             <div>
                                <div className="sm:min-w-40"><span className="text-xs sm:text-sm md:text-base">User name <span className="text-red-600">*</span></span></div>
                                <div className="flex-1 mt-2">
                                    <input type="text" placeholder="Enter User Name" className="w-full sm:w-auto border border-white pl-2 py-1" />
                                </div>
                            </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6 lg:mt-0.5 sm:my-6">
                           <div>
                                <div className="sm:min-w-40"><span className="text-xs sm:text-sm md:text-base">Email <span className="text-red-600">*</span></span></div>
                                    <div className="flex-1 mt-2">
                                        <input type="text" placeholder="Enter Email address" className="w-full sm:w-auto border border-white pl-2 py-1" />
                                    </div>
                            </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6 my-4 sm:my-6">
                        <div>
                            <div className="sm:min-w-40"><span className="text-xs sm:text-sm md:text-base">Mobile number <span className="text-red-600">*</span></span></div>
                            <div className="flex-1 mt-2">
                                <input type="tel"  placeholder="Enter mobile number" className="w-full sm:w-auto border border-white pl-2 py-1"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-6 my-4 sm:my-6">
                        <div>
                             <div className="sm:min-w-40"><span className="text-xs sm:text-sm md:text-base">Password <span className="text-red-600">*</span></span></div>
                            <div className="flex-1 mt-2">
                                <input type="password"  placeholder="Set your account password" className="w-full sm:w-auto border border-white pl-2 py-1"/>
                            </div>
                        </div>
                    </div>
           </div>)}

           {activeTab.id == 102 && (
                <>
                    <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-8">
                        <div className="flex-1">
                            <div><span className="text-xs sm:text-sm md:text-base">PAN Number <span className="text-[#ff0000]">*</span></span></div>
                            <div className="mt-2"><input type="text" placeholder="Enter PAN Number" className="w-full border-white border-2 px-2 py-1"  /></div>
                        </div>
                        <div className="flex-1">
                            <div><span className="text-xs sm:text-sm md:text-base">GST Number</span></div>
                            <div className="mt-2"><input type="text" placeholder="Enter GST Number" className="w-full border-white border-2 px-2 py-1"/></div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start gap-4 sm:gap-8 my-4 sm:my-2">
                        <div className="flex-1">
                            <div><span className="text-xs sm:text-sm md:text-base">Aadhaar <span className="text-[#ff0000]">*</span></span></div>
                            <div className="mt-2"><input type="text" placeholder="XXXX-4521" className="w-full border-white border-2 px-2 py-1"  /></div>
                        </div>
                        <div className="flex-1">
                            <div><span className="text-xs sm:text-sm md:text-base">Years in Biz</span></div>
                            <div className="mt-2"><input type="text" placeholder="5" className="w-full border-white border-2 px-2 py-1"/></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start my-4 sm:my-1">
                         <div className="w-full">
                             <div>
                                <div><span className="text-xs sm:text-sm md:text-base">Institute Reg. No. <span className="text-[#ff0000]">*</span></span></div>
                            </div>
                            <div className="mt-2">
                                <input type="text" placeholder="REG/TN/2019/0042" className="w-full sm:w-[80%] md:w-[50%] border-2 border-white px-2 py-1"/>
                            </div>
                         </div>  
                    </div>
                    <div className="flex flex-col justify-start my-4 sm:my-1">
                         <div className="w-full">
                             <div>
                                <div><span className="text-xs sm:text-sm md:text-base">Institute Type <span className="text-[#ff0000]">*</span></span></div>
                            </div>
                            <div className="mt-2">
                                <input type="text" placeholder="Enter Your Institute type" className="w-full sm:w-[80%] md:w-[50%] border-2 border-white px-2 py-1"/>
                            </div>
                         </div>  
                    </div>
                    <div className="flex flex-col justify-start my-4 sm:my-1">
                         <div className="w-full">
                             <div>
                                <div><span className="text-xs sm:text-sm md:text-base">Expected Students/Year<span className="text-[#ff0000]">*</span></span></div>
                            </div>
                            <div className="mt-2">
                                <input type="text" placeholder="Expected number of Students" className="w-full sm:w-[80%] md:w-[50%] border-2 border-white px-2 py-1"/>
                            </div>
                         </div>  
                    </div>
                    <div className="mt-6 sm:mt-3">
                        <div><span className="text-xs sm:text-sm md:text-base">Courses Interested In <span className="text-[#ff0000]">*</span></span></div>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                            {courses?.length > 0 &&  courses.map((c) => (
                                <div className="bg-white text-black w-fit px-4 sm:px-6 md:px-11 py-2 sm:py-3 rounded-2xl hover:cursor-pointer transition-transform hover:scale-105" key={c.cour_id}><span className="text-xs sm:text-sm md:text-base">{c.name}</span></div>
                            )) }

                        </div>
                    </div>
                    <div className="mt-8">
                        <div><span>Infrastructure Available</span></div>
                        <div>
                            <div>
                                <span><input type="checkbox" className="hover:cursor-pointer" /></span>
                                <span className="px-2">Classroom</span>
                            </div>
                            <div>
                                <span><input type="checkbox" className="hover:cursor-pointer" /></span>
                                <span className="px-2">Computer Lab</span>
                            </div>
                            <div>
                                <span><input type="checkbox" className="hover:cursor-pointer" /></span>
                                <span className="px-2">Internet</span>
                            </div>
                            <div>
                                <span><input type="checkbox" className="hover:cursor-pointer" /></span>
                                <span className="px-2">Placement Cell</span>
                            </div>
                            <div>
                                <span><input type="checkbox" className="hover:cursor-pointer" /></span>
                                <span className="px-2">Smart Class</span>
                            </div>
                        </div>

                    </div>
                </>
           )}

           { activeTab.id == 103 && (
              <div>
                   <div>
                       <div><span>Address Line 1 <span className="text-red-500">*</span></span></div>
                        <div className="mt-2">
                            <input type="text" className="border-2 border-white w-[50%]" />
                        </div>
                   </div>
                   <div className="mt-4">
                      <div><span>Address Line 2 <span className="text-red-500">*</span></span></div>
                      <div className="mt-2">
                            <input type="text" className="border-2 border-white w-[50%]"  />
                       </div>
                   </div>
                   <div className="flex justify-start gap-4 mt-4">
                        <div >
                            <div><span>City</span><span className="text-red-500">*</span></div>
                            <div className="mt-2" >
                                <input type="text" placeholder="Enter City" className="border-2 border-white px-2" />
                            </div>
                        </div>
                        <div>
                            <div><span>Pincode</span><span className="text-red-500">*</span></div>
                            <div className="mt-2">
                                <input type="text" placeholder="Enter Pincode" className="border-2 border-white px-2" />
                            </div>
                        </div>
                   </div>
                   <div className="flex justify-start gap-4 mt-4">
                        <div >
                            <div><span>State</span><span className="text-red-500">*</span></div>
                            <div className="mt-2" >
                                <input type="text" placeholder="Enter City" className="border-2 border-white px-2" />
                            </div>
                        </div>
                        <div>
                            <div><span>Country</span><span className="text-red-500">*</span></div>
                            <div className="mt-2">
                                <input type="text" placeholder="Enter Pincode" className="border-2 border-white px-2" />
                            </div>
                        </div>
                   </div>
              </div>
              
           )}
           { activeTab.id == 104 && (
              <>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full md:w-[70%]">
                        <div className="border border-white border-dashed py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 rounded-2xl flex flex-col items-center text-center">
                            <IdentificationIcon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 mb-2 sm:mb-3"/>
                            <span className="text-gray-500 font-bold text-xs sm:text-sm md:text-base">PAN Card</span>
                            <span className="text-gray-400 text-xs sm:text-sm">PDF / JPG</span>
                        </div>
                        <div className="border border-white border-dashed py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 rounded-2xl flex flex-col items-center text-center">
                            <IdentificationIcon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 mb-2 sm:mb-3"/>
                            <span className="text-gray-500 font-bold text-xs sm:text-sm md:text-base">Aadhaar</span>
                            <span className="text-gray-400 text-xs sm:text-sm">Uploaded</span>
                        </div>
                        <div className="border border-white border-dashed py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 rounded-2xl flex flex-col items-center text-center">
                            <IdentificationIcon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 mb-2 sm:mb-3"/>
                            <span className="text-gray-500 font-bold text-xs sm:text-sm md:text-base">Reg. Certificate</span>
                            <span className="text-gray-400 text-xs sm:text-sm">PDF / JPG</span>
                        </div>
                        <div className="border border-white border-dashed py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 rounded-2xl flex flex-col items-center text-center">
                            <IdentificationIcon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 mb-2 sm:mb-3"/>
                            <span className="text-gray-500 font-bold text-xs sm:text-sm md:text-base">GST Certificate</span>
                            <span className="text-gray-400 text-xs sm:text-sm">PDF / JPG</span>
                        </div>
                        <div className="border border-white border-dashed py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 rounded-2xl flex flex-col items-center text-center">
                            <IdentificationIcon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 mb-2 sm:mb-3"/>
                            <span className="text-gray-500 font-bold text-xs sm:text-sm md:text-base">Infra Images</span>
                            <span className="text-gray-400 text-xs sm:text-sm">JPG / PNG</span>
                        </div>
                        <div className="border border-white border-dashed py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 rounded-2xl flex flex-col items-center text-center">
                            <IdentificationIcon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 mb-2 sm:mb-3"/>
                            <span className="text-gray-500 font-bold text-xs sm:text-sm md:text-base">Owner Photo</span>
                            <span className="text-gray-400 text-xs sm:text-sm">JPG / PNG</span>
                        </div>
                    </div>
                    <div className="flex justify-start p-5 border border-gray-400 rounded-2xl mt-6">
                       <input type="checkbox" />
                       <div>
                           <span className="pl-2">I certify that all information provided is accurate and valid.</span>
                       </div>
                    </div>
               </>
           )}
           
           <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 mt-8 sm:items-center">
                <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded hover:cursor-pointer hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm w-full sm:w-auto">
                    <ArrowLeftIcon className="h-5 sm:h-6 text-gray-700" /> Back
                </button>
                { activeTab.id == 104 ? (
                    <Link href="/registration-success" className="bg-[#3b82f6] px-4 sm:px-8 py-2 sm:py-3 w-full sm:w-56 rounded-2xl hover:cursor-pointer hover:bg-[#2563eb] transition-colors text-xs sm:text-base sm:ml-8">Sign Up</Link>
                ): (
                    <button className="bg-[#3b82f6] px-4 sm:px-8 py-2 sm:py-3 w-full sm:w-56 rounded-2xl hover:cursor-pointer hover:bg-[#2563eb] transition-colors text-xs sm:text-base sm:ml-8" type="button" onClick={() => handleNext()}>Next</button>
                ) }
           </div>
           
        </form>
    </>
    )
}