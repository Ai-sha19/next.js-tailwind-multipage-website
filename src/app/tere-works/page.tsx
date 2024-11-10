import Image from "next/image"

export default function TereWorks() {
    return (
        <main>

            {/* Section 1 */}
            <div className="flex flex-col items-center py-10 px-4">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-5 text-center">
                    HOW <span className="text-customGreen">TERE</span> WORKS
                </h1>
                <p className="max-w-md sm:max-w-lg text-slate-400 text-center leading-relaxed">
                    Download and install the Tere app. Enter your phone number and create your user account. Once approved, you can start driving.
                </p>
            </div>

            {/* Section 2 */}
            <section className="flex flex-col lg:flex-row justify-center items-center w-[90%] sm:w-[80%] mx-auto gap-8 lg:gap-10 mb-20">
  <div className="flex flex-col flex-1 gap-12 items-center lg:items-end text-center lg:text-right">
    <div className="flex flex-col items-center lg:items-end gap-3">
      <Image width={50} height={50} src="/circle.png" alt="Request a Ride Icon" />
      <h2 className="font-sans font-extrabold text-xl sm:text-2xl">REQUEST A RIDE</h2>
      <p className="font-sans text-slate-500">
        Need to reach the office or go shopping? Just input your current location and destination, and find a ride that suits you.
      </p>
    </div>
    <div className="flex flex-col items-center lg:items-end gap-3">
      <Image width={50} height={50} src="/circle.png" alt="Instant Notifications Icon" />
      <h2 className="font-sans font-extrabold text-xl sm:text-2xl">INSTANT NOTIFICATIONS</h2>
      <p className="font-sans text-slate-500">
        Get instant notifications for your rides and stay connected with fellow riders all the time.
      </p>
    </div>
  </div>

  <div className="relative flex justify-center items-center w-full lg:w-auto">
    <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-customGreen rounded-full"></div>
  </div>

  <div className="flex flex-col flex-1 gap-12 items-center lg:items-start text-center lg:text-left">
    <div className="flex flex-col items-center lg:items-start gap-3">
      <Image width={50} height={50} src="/circle.png" alt="Post a Ride Icon" />
      <h2 className="font-sans font-extrabold text-xl sm:text-2xl">POST A RIDE</h2>
      <p className="font-sans text-slate-500">
        Going to the office or shopping, simply enter your location and destination to find a ride that suits you.
      </p>
    </div>
    <div className="flex flex-col items-center lg:items-start gap-3">
      <Image width={50} height={50} src="/circle.png" alt="Cashless Payment Icon" />
      <h2 className="font-sans font-extrabold text-xl sm:text-2xl">CASHLESS PAYMENT</h2>
      <p className="font-sans text-slate-500">
        Make payments using your Wallet, no need to carry cash anymore. Enjoy hassle-free, quick transactions.
      </p>
    </div>
  </div>
</section>


        </main>
    )
}
