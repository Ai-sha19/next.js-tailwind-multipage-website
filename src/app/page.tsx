import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ====================== section 1 */}
      <section className="flex flex-col md:flex-row gap-6 md:gap-16 px-4 md:px-16 mt-8">
        <div className="flex-1 flex flex-col gap-7 justify-center">
          {/* Text Section */}
          <h1 className="text-[28px] md:text-[45px] leading-tight md:leading-snug font-black text-center md:text-left">
            DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!
          </h1>
          <p className="font-sans text-slate-500 text-sm md:text-lg text-center md:text-left">
            It&apos;s simple and it&apos;s free. Play your part in reducing Carbon Footprint
            and help Mother Nature sustain its beauty. So what are you waiting
            for? Let&apos;s ride together.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Image
              className="transition-transform duration-300 hover:shadow-2xl hover:scale-105"
              width={150}
              height={50}
              src="/btn1.png"
              alt="btn1"
            />
            <Image
              className="transition-transform duration-300 hover:shadow-2xl hover:scale-105"
              width={150}
              height={50}
              src="/btn2.png"
              alt="btn2"
            />
          </div>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            className="object-contain"
            width={350}
            height={300}
            src="/banner.png"
            alt="banner"
          />
        </div>
      </section>

      {/* Green Box */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-customGreen p-6 md:p-10 w-[90%] mx-auto rounded-md my-10 shadow-2xl gap-4">
        <p className="text-white w-full md:w-[20%] text-base md:text-lg font-sans text-center md:text-left">
        Let&apos;s go. Get a link to download the app.

        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input
            className="font-sans text-slate-500 w-full md:w-72 py-2 px-4 rounded-md border border-gray-300"
            type="text"
            placeholder="Enter mobile phone number"
          />
          <button className="font-sans text-sm md:text-lg text-white bg-black py-3 px-6 rounded-md transition-transform duration-300 hover:shadow-2xl hover:scale-105">
            APPLY TO DRIVE
          </button>
        </div>
      </div>

      {/* ============================ section 3 */}
    <div className="w-[90%] mx-auto flex flex-col gap-10 md:gap-16">
  <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-10">
    {/* Card 1 */}
    <div className="flex gap-5 flex-col text-center items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Image
        className="mt-4 object-cover rounded-lg"
        width={300}
        height={300}
        src="/card1.jpg"
        alt="safe-ride"
      />
      <div className="flex flex-col gap-2 px-4 mb-4">
        <h2 className="font-sans font-bold text-xl md:text-2xl">Safe Rides</h2>
        <p className="text-slate-500 font-sans">
          We ensure that every ride is safe and secure for both the drivers
          and passengers through real-time monitoring and driver verification.
        </p>
      </div>
    </div>
    {/* Card 2 */}
    <div className="flex gap-5 flex-col text-center items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Image
        className="mt-4 object-cover rounded-lg"
        width={250}
        height={250}
        src="/card2.jpg"
        alt="Affordable Fares"
      />
      <div className="flex flex-col gap-2 px-4 mb-4">
        <h2 className="font-sans font-bold text-xl md:text-2xl">Affordable Fares</h2>
        <p className="text-slate-500 font-sans">
          Our competitive and affordable fares let you travel comfortably
          without spending more than necessary on each ride.
        </p>
      </div>
    </div>
    {/* Card 3 */}
    <div className="flex gap-5 flex-col text-center items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Image
        className="mt-4 object-cover rounded-lg"
        width={300}
        height={300}
        src="/card3.jpg"
        alt="Eco-friendly"
      />
      <div className="flex flex-col gap-2 px-4 mb-4">
        <h2 className="font-sans font-bold text-xl md:text-2xl">Eco-friendly</h2>
        <p className="text-slate-500 font-sans">
          Ride-sharing significantly helps in reducing environmental pollution,
          thereby keeping the air much cleaner.
        </p>
      </div>
    </div>
  </div>

  {/* Cards for Section 3 */}
  <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-10 mb-20">
    {/* Card 4 */}
    <div className="flex gap-5 flex-col text-center items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Image
        className="mt-4 object-cover rounded-lg"
        width={300}
        height={300}
        src="/card4.jpg"
        alt="24/7 Availability"
      />
      <div className="flex flex-col gap-2 px-4 mb-4">
        <h2 className="font-sans font-bold text-xl md:text-2xl">24/7 Availability</h2>
        <p className="text-slate-500 font-sans">
          Our service is available at any hour of the day, so you can access
          rides whenever you need them, without delay.
        </p>
      </div>
    </div>
    {/* Card 5 */}
    <div className="flex gap-5 flex-col text-center items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Image
        className="mt-4 object-cover rounded-lg"
        width={300}
        height={300}
        src="/card5.jpg"
        alt="Easy-to-Use App"
      />
      <div className="flex flex-col gap-2 px-4 mb-4">
        <h2 className="font-sans font-bold text-xl md:text-2xl">Easy-to-Use App</h2>
        <p className="text-slate-500 font-sans">
          Our app is simple and user-friendly, allowing you to book rides,
          manage your account, and view updates with ease.
        </p>
      </div>
    </div>
    {/* Card 6 */}
    <div className="flex gap-5 flex-col text-center items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Image
        className="mt-4 object-cover rounded-lg"
        width={300}
        height={300}
        src="/card6.jpg"
        alt="Community Driven"
      />
      <div className="flex flex-col gap-2 px-4 mb-4">
        <h2 className="font-sans font-bold text-xl md:text-2xl">Community Driven</h2>
        <p className="text-slate-500 font-sans">
          We build a strong community by connecting like-minded passengers and
          drivers, creating an enjoyable and social experience.
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  );
}
