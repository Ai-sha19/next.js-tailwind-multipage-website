import Image from "next/image";

export default function TereBenefits() {
    return (
        <main className="mb-40">
            <h1 className="text-center text-customGreen font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 md:mb-24 pt-8">
                TERE <span className="text-black">BENEFITS</span>
            </h1>

            <section className="flex flex-col gap-16 sm:gap-24 md:gap-32 px-4 sm:px-6">

                {/* card 1 */}
                <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 w-full md:w-[80%] lg:w-[80%] mx-auto h-auto md:h-72 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.46)]">
                    <div className="flex flex-col gap-3">
                        <div className="relative items-center">
                            <span className="text-customGreen text-3xl sm:text-8xl md:text-8xl font-sans font-bold">01.</span>
                            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold absolute left-16 sm:left-20 bottom-1">
                                Flexible working hours
                            </h2>
                        </div>
                        <div>
                            <p className="pb-4 w-full sm:w-72 md:w-80 font-sans font-thin text-slate-500 text-base sm:text-lg md:text-[20px]">
                                You can decide when, and how much time you want to drive.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-full">
                        <Image width={200} height={200} src="/Frame1.png" alt="frame" className="w-40 sm:w-56 md:w-64" />
                    </div>
                </div>

                {/* card 2 */}
                <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 w-full md:w-[80%] lg:w-[80%] mx-auto h-auto md:h-72 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.46)]">
                    <div className="max-w-full">
                        <Image width={200} height={200} src="/Frame2.png" alt="frame" className="w-40 sm:w-56 md:w-64" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-customGreen text-3xl sm:text-8xl md:text-8xl font-sans font-bold">02.</span>
                        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold">
                            Earnings
                        </h2>
                        <div>
                            <p className="pb-4 w-full sm:w-72 md:w-80 font-sans font-thin text-slate-500 text-base sm:text-lg md:text-[20px]">
                                By driving with Tere you can earn more income and rewards.
                            </p>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 w-full md:w-[80%] lg:w-[80%] mx-auto h-auto md:h-72 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.46)]">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center">
                            <span className="text-customGreen text-3xl sm:text-8xl md:text-8xl font-sans font-bold">03.</span>
                            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold pt-3 pl-2">
                                Customer support 24/7
                            </h2>
                        </div>
                        <div>
                            <p className="w-full sm:w-72 md:w-80 font-sans font-thin text-slate-500 text-base sm:text-lg md:text-[20px] mb-4">
                                Tere is a local 24/7 service provider and we are proud to support you in your local language!
                            </p>
                        </div>
                    </div>
                    <div className="max-w-full">
                        <Image width={200} height={200} src="/Frame3.png" alt="frame" className="w-40 sm:w-56 md:w-64" />
                    </div>
                </div>

            </section>
        </main>
    );
}
