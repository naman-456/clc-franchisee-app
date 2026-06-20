import { CheckIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

const RegistrationSuccess = () => {
    return (
        <> 
           <div className="bg-white rounded-2xl text-black mt-32 mx-6 p-4">
               <div className="flex justify-center"><CheckIcon className="h-10 w-12 bg-green-400 text-white text-2xl p-2 rounded-full" /></div>
                <div className="mt-3 ml-6">
                    <span className="font-bold">Registration Successful!</span>
                    <p className="py-4">
                        Your franchise registration has been submitted. Our team will review your application and contact you shortly.
                    </p>
                </div>
                <div className="flex justify-center lg:justify-start">
                    <button className="bg-amber-100 py-2 px-4  text-amber-500 rounded-l-full rounded-r-full border-amber-500">PENDING_APPROVAL</button>
                </div>
                <div className="flex justify-center">
                    <Link href="/" className="text-blue-950 border border-[#4a5568] py-2 mt-5 px-16 rounded-2xl">Go To Home</Link>
                </div>
           </div>
        </>
    )
}

export default RegistrationSuccess;

/*
import { CheckIcon } from '@heroicons/react/24/solid'

<CheckIcon className="h-6 w-6" />


*/