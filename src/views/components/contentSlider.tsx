import { getBauenTestimonial } from "@/contentful/contentfulFunction";
import { IAsset } from "@/contentful/bauen.types";
export default async function ContentSlider() {
  const bauenTestimonial = await getBauenTestimonial();

  return (
    <div className="relative grid lg:flex mt-4 justify-center items-center py-10 whitespace-nowrap px-4 gap-4">
      {bauenTestimonial &&
        bauenTestimonial?.items.map((d, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] relative w-full rounded-xl group"
          >
            <img
              src={`https:${
                (d.fields.testimonialImg as IAsset)?.fields.file.url
              }`}
              alt="service-logo"
              className="object-cover w-full h-[40vh] rounded-xl z-0 absolute"
            />
            <div className="text bg-[#292929] h-[40vh] opacity-0 rounded-xl px-2 content-end py-2 z-10 group-hover:opacity-85 ease-in-out duration-300">
              <div className="relative">
                <h4 className="text-white text-2xl font-bold">
                  {d.fields.testimonialTitle}
                </h4>
                <h5 className="text-white text-xl font-bold">
                  {d.fields.testimonialLoc}
                </h5>
                <h6 className="text-white text-lg font-semibold">
                  {d.fields.testimonialUser}
                </h6>
                <p className="text-white text-wrap">
                  {d.fields.testimonialComment}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
