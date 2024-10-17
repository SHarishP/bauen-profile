import { TeamGrid } from "@/views/components/index";
export default function OurTeamView() {
  return (
    <div className="relative z-0 max-w-[1440px] mx-auto">
      <div className="pt-20 pb-4">
        <div className="text-center py-4 bg px-2">
          <h1 className="font-bold text-3xl">
            Meet The People Who Make Your Dream Come True
          </h1>
          <div className="flex mx-auto md:w-2/5 py-4">
            <p className="text-gray-500">
              At Bauen, we empower our employees to grow and provide the
              resources needed to maximize their potential. We foster a
              collaborative environment where every team member is encouraged to
              contribute and innovate, ensuring we build together.
            </p>
          </div>
        </div>
        <TeamGrid />
      </div>
      ;
    </div>
  );
}
