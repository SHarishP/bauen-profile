import Image from "next/image";
import CustomButton from "./customButton";
import { getBauenServiceItem, RichText } from "@/contentful/contentfulFunction";
import { IAsset } from "@/contentful/bauen.types";

export async function ServiceGrid() {
  const bauenServiceItem = await getBauenServiceItem();

  return (
    <div className="grid grid-flow-row md:grid-cols-3 gap-4 px-12 pt-4">
      <div className="bg-[#DDD9DC] rounded-2xl md:row-span-1 md:col-span-3 px-8 py-4 relative h-[20vh] md:h-[40vh]">
        <Image
          src="/our_services_banner.jpg"
          fill={true}
          alt="About Us Banner"
          className="object-cover rounded-xl"
        />
      </div>
      {bauenServiceItem &&
        bauenServiceItem.items.map((d, index) => (
          <div key={index} className="bg-[#DDD9DC] rounded-2xl px-8 py-4">
            <div className="bg-[#F7F7F5] rounded-full h-14 w-14 relative place-content-center">
              <img
                src={`https:${
                  (d.fields.serviceLogo as IAsset)?.fields.file.url
                }`}
                alt="service-logo"
                className="object-cover h-14 w-14 rounded-full"
              />
            </div>
            <h4 className="font-bold pt-4 text-lg">{d.fields.serviceName}</h4>
            <RichText document={d.fields.serviceBriefShort} />
            <div className="pt-4">
              <CustomButton
                title="START PROJECT"
                containerStyles="bg-[#F7F7F5] rounded-3xl hover:bg-[#292929] ease-in-out duration-200"
                textStyles="text-black font-semibold hover:text-white"
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export async function ServiceGridPage() {
  const serviceData = await getBauenServiceItem();

  return (
    <div>
      {serviceData &&
        serviceData?.items.map((data, index) => (
          <div
            key={index}
            className="bg-[#DDD9DC] rounded-2xl  row-span-1 col-span-3 px-4 md:px-8 py-4 relative drop-shadow-lg my-4"
          >
            <div className="relative">
              <h2 className="md:text-2xl text-xl font-semibold mt-4">
                {data.fields.serviceName}
              </h2>
              <RichText document={data.fields.serviceBriefLong} />
              <div className="pt-2">
                <CustomButton
                  title="START PROJECT"
                  containerStyles="bg-[#F7F7F5] rounded-3xl hover:bg-[#292929] ease-in-out duration-200"
                  textStyles="text-black font-semibold hover:text-white"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
