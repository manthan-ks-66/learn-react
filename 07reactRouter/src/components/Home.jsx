import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <img src="https://img.freepik.com/free-vector/man-going-trip-booking-tour-online-guy-sitting-front-computer-table-looking-voyage-summer-vacation_575670-946.jpg?t=st=1742818156~exp=1742821756~hmac=f5ca87570f058805f7ee37427b75b52bb4b4a0afe7e1cb57494b0ff1d8d40ff9&w=1060"></img>
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://img.freepik.com/free-vector/man-works-home-with-laptop-prevent-virus-infection_1150-34980.jpg?t=st=1742817819~exp=1742821419~hmac=549c8150924b1e18d63a4cec6eca624707c056a856e6bff840a8f1fbf5c127f2&w=826"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
