import Image from "next/image";
import { ServiceGridPage } from "@/views/components/index";
export default async function ServicesView() {
  return (
    <div className="relative z-0 max-w-[1440px] mx-auto">
      <div className=" pt-20 pb-4">
        <div className="py-4 px-4 gap-4 md:mx-36">
          <div className="bg-[#DDD9DC] rounded-2xl px-8 py-4 relative h-[20rem] drop-shadow-lg">
            <Image
              src="/product-banner-big.jpg"
              fill={true}
              alt="product-banner-big.jpg"
              className="object-cover rounded-xl"
            />
            <div className="relative md:py-20">
              <h1 className="text-xl md:text-3xl font-bold max-w-lg ">
                WE PROVIDE YOU OUR BEST SERVICES
              </h1>
            </div>
          </div>
          <ServiceGridPage />
        </div>
      </div>
    </div>
  );
}
