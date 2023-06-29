import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-sc    bg-gradient-to-r  from-rgba-10-87-131-1  to-rgba-24-161-154-1">
      <div className="h-2/3 flex justify-center items-center w-full  ">
        <div className="w-2/3 p-3  pt-16 mt-4   text-center">
          <h1 className="font-poppins text-6xl font-semibold leading-tight tracking-wider text-rgba-255-255-255-1">
            Check your financial health
          </h1>
          <div className="font-poppins text-2xl   leading-42 tracking-normal text-center text-rgba-255-255-255-5">
            Use WeathoMeter to get a free report
            <br />
            card for your finances- within minutes!
          </div>
        </div>
      </div>
      <div className="flex pt-10 -pb-16 justify-center items-center">
        <button className="bg-rgba-251-115-6-1  text-2xl hover:bg-rgba-251-115-6-8 text-rgba-255-255-255-1 font-bold  py-2 px-4 rounded-full shadow-xl">
          Get Started
        </button>
      </div>
      <div className="flex pt-10">
        <div className="ml-32 pl-28 pt-10 ">
          <div className="p1-1 flex ml-16 pl-16 pt-14">
            <div className="flex">
              <Image
                src="/tick.svg"
                alt="My Image"
                className=""
                width={27}
                height={10}
              />
            </div>
            <div className="flex-2 px-3 font-poppins text-2xl font-semibold leading-tight tracking-er text-rgba-255-255-255-1">
              Expected Retirement Age
            </div>
          </div>
          <div className="pl-16 ml-16">
            <Image
              src="/Line.svg"
              alt="My Image"
              className="py-3 ml-9"
              width={290}
              height={650}
            />
          </div>
          <div className="pl-1 flex ml-16 pl-16 pt-4">
            <div className="flex">
              <Image
                src="/tick.svg"
                alt="My Image"
                className=""
                width={27}
                height={10}
              />
            </div>
            <div className="flex-2 px-3 font-poppins text-2xl font-semibold leading-tight tracking-er text-rgba-255-255-255-1">
              Identify Mistake
            </div>
          </div>
          <div className="pl-16 ml-16">
            <Image
              src="/Line.svg"
              alt="My Image"
              className="py-3 ml-9"
              width={290}
              height={650}
            />
          </div>
        </div>

        <div className="flex-1 -mr-28 -mb-28 -pr-28 g-green-500">
          <div className="flex  justify-center items-center">
            <div className="justify-center items-center">
              <Image
                src="/mobi.svg"
                alt="My Image"
                // className="-m-8 -mr-20"
                width={480}
                height={1500}
              />
            </div>
          </div>{" "}
        </div>
        <div className="mr-32 pr-28 pt-10 z-10">
          <div className="flex mr-1 px-1 pt-14 mr-16 pr-16">
            <div className="flex ">
              <Image
                src="/tick.svg"
                alt="My Image"
                className=""
                width={27}
                height={10}
              />
            </div>
            <div className="flex-2 px-3 font-poppins text-2xl font-semibold leading-tight tracking-er text-rgba-255-255-255-1">
              Personalised Road Map
            </div>
          </div>
          <div className="px-1 ml-1">
            <Image
              src="/Line.svg"
              alt="My Image"
              className="py-3 ml-9"
              width={290}
              height={950}
            />
          </div>
          <div className="px-1 flex ml-1 px-1 pt-4">
            <div className="flex">
              <Image
                src="/tick.svg"
                alt="My Image"
                className=""
                width={27}
                height={10}
              />
            </div>
            <div className="flex px-3 font-poppins text-2xl font-semibold leading-tight tracking-er text-rgba-255-255-255-1">
              Tips To Improve
            </div>
          </div>
          <div className="px-1 ml-1 mr-16 pr-16">
            <Image
              src="/Line.svg"
              alt="My Image"
              className="py-3 ml-9"
              width={290}
              height={650}
            />
          </div>
        </div>
      </div>
      <div
        className=" bg-rd-500 relative bg-cover bg-center bg-no-repeat  -mt-20 -pt-22 absolut  h-screen bg-cover bg-center bg-gradient-to-r  from-rgba-10-87-131-1  to-rgba-24-161-154-1 "
        style={{ backgroundImage: "url('/Vector1.svg')" }}
      >
        <div className="pt-28 flex justify-center items-center  ">
          <div className="p-3  pt-16 mt-4   text-center">
            <h1 className="font-poppins pt-16 text-6xl font-bold leading-tight tracking-wider text-rgba-255-255-255-1">
              How it works?
            </h1>{" "}
            <div className="justify-center items-center w-full">
              <Image
                src="/wordks.svg"
                alt="My Image"
                className="-pt-16 pl-16 ml-12 -mb-28 -pb-28 -mb-28 -pt-28"
                width={990}
                height={650}
              />{" "}
              <div className="flex -mt-28 -pt-28">
                <div className="flex-2 px-3 font-poppins text-2xl font-semibold leading-tight tracking-er text-rgba-255-255-255-1 pl-16 pr-10 mx-16  -mt-20">
                  Answer few <br /> questions
                </div>
                <div className="flex-2 px-3 font-poppins text-2xl font-semibold leading-tight tracking-er text-rgba-255-255-255-1 pl-16 pr-10 mx-16  -mt-20">
                  Register using <br /> phone and OTP
                </div>
                <div className="flex-2 px-3 font-poppins text-2xl font-semibold leading-tight tracking-er text-rgba-255-255-255-1 pr-10 mx-16  -mt-20">
                  Get report and <br /> personal roadmap
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-10 -pb-16 justify-center items-center">
          <button className="bg-rgba-251-115-6-1  text-2xl hover:bg-rgba-251-115-6-8 text-rgba-255-255-255-1 font-bold  py-2 px-4 rounded-full shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
