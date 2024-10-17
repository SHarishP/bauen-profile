import Link from "next/link";
import {
  CustomButton,
  TeamSlider,
  ServiceGrid,
  ContentSlider,
} from "@/views/components/index";
import { IAsset } from "@/contentful/bauen.types";
import { getBauenContentful } from "@/contentful/contentfulFunction";

export default async function HomePageView() {
  const bauenHome = await getBauenContentful();
  return (
    <div className="relative z-0 max-w-[1440px] mx-auto">
      <div className="pt-20">
        <div className="relative h-[33rem] lg:h-[50rem]">
          <div className="absolute bottom-0 rounded-xl">
            <img
              src={`https:${
                (bauenHome?.items[0].fields.homeHeroBg as IAsset)?.fields.file
                  .url
              }`}
              alt="bauen-home-bg"
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="absolute top-0 left-0 ml-4 md:ml-10">
            <div className="flex pt-2">
              <h1 className="font-bold lg:text-5xl text-2xl">
                WE DESIGN,
                <br />
                WE CONSTRUCT, WE MANAGE
              </h1>
            </div>
            <div className="flex">
              <p className="text-gray-400 md:max-w-3xl max-w-sm">
                {bauenHome?.items[0].fields.bauenHeroBrief}
              </p>
            </div>
            <div className="pt-4 flex gap-4">
              <Link href="/services">
                <CustomButton
                  title="LET'S GO!"
                  containerStyles="bg-[#D9D9D9] rounded-3xl hover:bg-[#292929]"
                  textStyles="text-black font-semibold hover:text-white ease-in-out duration-300"
                />
              </Link>
              <Link href="/about-us">
                <CustomButton
                  title="ABOUT US"
                  containerStyles="bg-[#D9D9D9] rounded-3xl hover:bg-[#292929]"
                  textStyles="text-black font-semibold hover:text-white ease-in-out duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-24 mt-8">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-[#DDD9DC] rounded-2xl row-span-2 col-span-2 px-8 py-4 drop-shadow-lg">
            <h3 className="font-bold py-4">Here Is How It All Started</h3>
            <h2 className="font-bold text-2xl lg:text-5xl lg:pt-4 lg:pb-10">
              {bauenHome?.items[0].fields.aboutUsTitle}
            </h2>
            <p className="py-4">{bauenHome?.items[0].fields.aboutUsBrief}</p>
          </div>
          <div className="bg-[#DDD9DC] rounded-2xl relative row-span-1 col-span-2 h-full lg:h-[350px] drop-shadow-lg">
            <img
              src={`https:${
                (bauenHome?.items[0].fields.aboutUsImg as IAsset)?.fields.file
                  .url
              }`}
              alt="bauen-home-bg"
              className="object-cover h-full lg:h-[350px] w-full rounded-xl"
            />
          </div>
          <div className="bg-[#DDD9DC] rounded-2xl col-span-2 col-st px-6 py-1 h-full drop-shadow-lg">
            <h4 className="font-bold py-4">Why Choose Us?</h4>
            <div className="lg:py-8 xl:px-16 py-4 grid grid-cols-2 gap-4">
              <div className="bg-[#F7F7F5] rounded-2xl px-4 py-4">
                <h3 className="font-bold">14</h3>
                <p>Years Experience</p>
              </div>
              <div className="bg-[#F7F7F5] rounded-2xl px-4 py-4">
                <h3 className="font-bold">80+</h3>
                <p>Project Completed</p>
              </div>
              <div className="bg-[#F7F7F5] rounded-2xl px-4 py-4">
                <h3 className="font-bold">20</h3>
                <p>Partners</p>
              </div>
              <div className="bg-[#F7F7F5] rounded-2xl px-4 py-4">
                <h3 className="font-bold">100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-">
        <div className="pt-20 px-4 mb-8">
          <div className="text-center">
            <div className="w-1/2 md:w-2/6 flex mx-auto">
              <h1 className="text-2xl md:text-4xl font-bold">
                {bauenHome?.items[0].fields.teamTitle}
              </h1>
            </div>
            <div className="flex mx-auto w-1/2 md:w-2/5 pt-4">
              <p className="text-gray-500">
                {bauenHome?.items[0].fields.teamBriefOne}
              </p>
            </div>
          </div>
        </div>
        <TeamSlider />
        <div className="text-center flex mx-auto w-3/4 md:w-2/5">
          <p>{bauenHome?.items[0].fields.teamBriefTwo}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-center pt-4">
          <h2 className="text-3xl font-bold">
            {bauenHome?.items[0].fields.servicesTitle}
          </h2>
        </div>
        <ServiceGrid />
      </div>

      <div className="mt-32 mb-16">
        <div className="pt-4">
          <div className="text-center">
            <h3 className="font-bold text-3xl">
              {bauenHome?.items[0].fields.testimonialTitle}
            </h3>
          </div>
          <ContentSlider />
        </div>
      </div>
    </div>
  );
}
