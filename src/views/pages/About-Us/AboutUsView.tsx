import { CustomButton, LeaderGrid } from "@/views/components/index";
import Link from "next/link";
import { getBauenAboutUs } from "@/contentful/contentfulFunction";
import { IAsset } from "@/contentful/bauen.types";

export default async function AboutUsView() {
  const bauenAboutUs = await getBauenAboutUs();
  return (
    <div className="pt-20">
      <div className="relative">
        <div className="relative">
          <img
            src={`https:${
              (bauenAboutUs?.items[0].fields.aboutUsHeroBg as IAsset)?.fields
                .file.url
            }`}
            alt="aboutUs-hero-bg"
            className="object-cover rounded-2xl"
          />
          <div className="absolute top-20 right-4 md:top-40 md:max-w-3xl px-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              {bauenAboutUs?.items[0].fields.aboutUsHeroTitle}
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-4 px-4 md:px-32">
        <div className="flex flex-col gap-4 pt-4">
          <div className="bg-[#D9D9D9] rounded-lg px-4 py-4 lg:flex gap-4 drop-shadow-lg">
            <div className="bg-slate-50 rounded-lg min-h-32 min-w-40 relative">
              <img
                src={`https:${
                  (bauenAboutUs?.items[0].fields.aboutUsOverviewBg as IAsset)
                    ?.fields.file.url
                }`}
                alt="aboutUs-hero-bg"
                className="object-contain lg:object-cover lg:h-[10rem] h-full rounded-lg"
              />
            </div>
            <div className="py-4">
              <h2 className="font-bold text-2xl">Who We Are</h2>
              <div className="pt-2">
                <p className="font-regular">
                  {bauenAboutUs?.items[0].fields.aboutUsOverview}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] rounded-lg px-4 py-4 grid lg:flex gap-4 drop-shadow-lg">
            <div className="py-4 text-right">
              <h2 className="font-bold text-2xl">Our Story</h2>
              <div className="pt-2">
                <p className="font-regular">
                  {bauenAboutUs?.items[0].fields.aboutUsStory}
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl min-h-32 min-w-40 relative">
              <img
                src={`https:${
                  (bauenAboutUs?.items[0].fields.aboutUsStoryBg as IAsset)
                    ?.fields.file.url
                }`}
                alt="aboutUs-hero-bg"
                className="object-cover lg:h-full w-full h-[10rem] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="px-4 md:px-32 py-4">
          <div className="text-right">
            <h2 className="font-bold text-3xl">Our Vision & Mission</h2>
          </div>
          <div className="relative min-h-[75vh] bg-[#D9D9D9] rounded-xl mt-2">
            <img
              src={`https:${
                (bauenAboutUs?.items[0].fields.aboutUsVisionBanner as IAsset)
                  ?.fields.file.url
              }`}
              alt="aboutUs-hero-bg"
              className="object-cover h-[75vh] w-full rounded-2xl"
            />
            <div className="absolute top-5 left-5 max-w-2xl">
              <p className="font-bold text-base md:text-2xl">
                {bauenAboutUs?.items[0].fields.aboutUsVision}
              </p>
            </div>
            <div className="absolute top-36 right-5 max-w-2xl text-right">
              <p className="font-bold text-base md:text-2xl">
                {bauenAboutUs?.items[0].fields.aboutUsMission}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 px-4 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Meet Our Leader</h2>
        </div>
        <LeaderGrid />
      </div>

      <div className="my-10">
        <div className="flex flex-col px-4 md:px-32 py-4">
          <div className="bg-[#D9D9D9] rounded-lg p-4 gap-4 drop-shadow-lg">
            <h2 className="font-bold text-2xl">Who We Are</h2>
            <div className="pt-2">
              <p className="font-regular">
                {bauenAboutUs?.items[0].fields.aboutUsCulture}
              </p>
            </div>
            <div className="pt-2">
              <Link href="/our-team">
                <CustomButton
                  title="LEARN MORE"
                  containerStyles="bg-white rounded-3xl hover:bg-[#292929] hover:ease-in-out duration-300"
                  textStyles="text-black font-semibold hover:text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
