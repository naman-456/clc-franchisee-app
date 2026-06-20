 const LoginPage = () => {
    return (
        <div className="flex justify-center items-center h-150" >
            <div>
                 <h2>Welcome Back</h2>
                <p className="mt-3">Sign in to your franchise account</p>
                <div>
                    <div className="mt-3">
                        <span>Email / Username <span className="text-red-500">*</span></span>
                    </div>
                    <div className="mt-3">
                        <input type="text" className="border border-white w-full" placeholder="Enter Email/Username"/>
                    </div>
                </div>
                <div>
                    <div className="mt-3">
                        <span>Password <span className="text-red-500">*</span></span>
                    </div>
                    <div className="mt-3">
                        <input type="password" className="border border-white w-full" placeholder="Enter Password" />
                    </div>
                </div>
                <div className="mt-2">
                    <button className="bg-[#1a3a5c] p-4 mt-4 w-full rounded-2xl hover:cursor-pointer flex justify-center">Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;