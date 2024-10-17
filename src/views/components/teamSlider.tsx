import React from "react";
import { getBauenLeader } from "@/contentful/contentfulFunction";
import { IAsset } from "@/contentful/bauen.types";
export async function TeamSlider() {
  const bauenLeader = await getBauenLeader();
  return (
    <div className="relative grid lg:flex justify-center items-center py-10 gap-4 whitespace-nowrap">
      {bauenLeader &&
        bauenLeader?.items.map((data, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] relative h-60 w-52 rounded-xl flex-shrink-0 group hover:bg-[#292929] hover:scale-105 ease-in-out duration-200"
          >
            <div>
              <img
                src={`https:${
                  (data.fields.leaderImg as IAsset)?.fields.file.url
                }`}
                alt="bauen-home-bg"
                className="object-cover h-60 w-52 rounded-2xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
            <div className="hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 bg-slate-200 mx-auto px-2 content-center py-1 z-10 group-hover:block">
              <h5 className="font-bold">{data.fields.leaderName}</h5>
              <p>{data.fields.leaderPosition}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export async function LeaderGrid() {
  const bauenLeader = await getBauenLeader();
  return (
    <div className="grid grid-flow-row md:grid-cols-2 gap-4 pt-4">
      {bauenLeader &&
        bauenLeader?.items.map((data, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] rounded-lg px-4 py-4 flex lg:flex-row items-center flex-col gap-4 drop-shadow-lg"
          >
            <div className="bg-[#292929] rounded-lg h-60 w-52 relative">
              <img
                src={`https:${
                  (data.fields.leaderImg as IAsset)?.fields.file.url
                }`}
                alt="bauen-home-bg"
                className="object-cover h-60 w-52 rounded-2xl"
              />
            </div>
            <div className="lg:py-6">
              <h3 className="text-xl font-bold">{data.fields.leaderName}</h3>
              <h4 className="text-lg font-semibold">
                {data.fields.leaderPosition}
              </h4>
              <div className="text-wrap py-4 max-w-md">
                <p>{data.fields.leaderBrief}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export async function TeamGrid() {
  const teamData = await getBauenLeader();
  return (
    <div className="grid grid-flow-row mx-2 md:mx-32 gap-4">
      {teamData &&
        teamData?.items.map((data, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] rounded-2xl px-4 md:px-8 py-4 grid md:flex gap-4 drop-shadow-lg justify-items-center"
          >
            <div className="bg-[#292929] h-[10rem] w-[8rem] rounded-lg relative shrink-0">
              <img
                src={`https:${
                  (data.fields.leaderImg as IAsset)?.fields.file.url
                }`}
                alt="bauen-home-bg"
                className="object-cover h-[10rem] w-[8rem] rounded-lg"
              />
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-bold">{data.fields.leaderName}</h3>
              <h4 className="text-lg font-semibold">
                {data.fields.leaderPosition}
              </h4>
              <div className="text-wrap pt-4 ">
                <p>{data.fields.leaderBrief}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
