import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row lg:px-14 lg:py-10 md:gap-8 gap-8 sm:gap-0 justify-between items-center bg-white px-4 py-8 md:px-14 md:py-10 mb-10 shadow-2xl">
           
            <div className="flex justify-center mb-6 md:mb-0">
                <Image
                    width={120}
                    height={50}
                    className="w-28 md:w-28 h-auto"
                    src="/logo.png"
                    alt="logo"
                />
            </div>

          
            <div className="flex flex-col items-center mb-6 md:mb-0 text-center">
                <ul className="leading-7 md:leading-6 text-slate-500">
                    <li className="text-black text-xl md:text-xl font-sans font-semibold mb-2">Stay Connected</li>
                    <li className="md:text-[15px]">12, Green Valley, New York</li>
                    <li className="md:text-[15px]">contact@delishbite.com</li>
                    <li className="md:text-[15px]">123-456-7890</li>
                </ul>
            </div>

            <div className="flex flex-col items-center mb-6 md:mb-0 text-center">
                <ul className="leading-7 md:leading-6 text-slate-500">
                    <li className="text-black text-xl md:text-xl font-sans font-semibold mb-2">Be Our Friend</li>
                    <li className="md:text-[15px]">3, Season Park, Jakarta</li>
                    <li className="md:text-[15px]">support@foodyar.co.id</li>
                    <li className="md:text-[15px]">021-1111-2222</li>
                </ul>
            </div>

            <div className="flex justify-center">
                <div className="flex gap-4 md:gap-3">
                    <Image
                        className="w-24 md:w-32 sm:w-32 h-auto transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl hover:scale-105"
                        width={200}
                        height={200}
                        src="/btn1.png"
                        alt="btn1"
                    />
                    <Image
                        className="w-24 md:w-32 sm:w-32 h-auto transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl hover:scale-105"
                        width={200}
                        height={200}
                        src="/btn2.png"
                        alt="btn2"
                    />
                </div>
            </div>
        </footer>
    );
}

























