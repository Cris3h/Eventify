import IntroHome from "@/components/IntroHome";
import Login from "@/components/Login";

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center bg-[url('../images/types/kelsey-chance-tAH2cA_BL5g-unsplash.jpg')]"></div>

        <div className="absolute top-0 left-0 w-full h-full bg-[#D9D9D9] opacity-35"></div>

        <div className="relative w-full h-full flex items-center justify-end z-10">
          <div className="flex flex-col h-full w-full items-start justify-center p-60">
            <IntroHome />
          </div>
          <div className="min-w-96 h-full flex items-center justify-center sm:bg-gray-200 opacity-85 m-0 bg-transparent">
            <Login />
          </div>
        </div>

      </div>
    </>
  );
}
