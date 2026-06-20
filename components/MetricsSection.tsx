export const MetricsSection = () => {
     return (
         <>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y-blue-400 px-12 py-10 border-y mt-20">
                <div>
                    <div><span className="text-green-400 text-3xl font-momo">50+</span></div>
                    <p className="text-[#5B7090]">Active centers nationwide</p>
                </div>
                <div>
                    <div><span className="text-green-400 text-3xl font-momo">10,000+</span></div>
                    <p className="text-[#5B7090]">Students trained</p>
                </div>
                <div>
                    <div><span className="text-green-400 text-3xl font-momo">15+</span></div>
                    <p className="text-[#5B7090]">Cities across India</p>
                </div>
                <div>
                    <div><span className="text-green-400 text-3xl font-momo">92%</span></div>
                    <p className="text-[#5B7090]">Placement success rate</p>
                </div>
            </section>
         </>
     )
}