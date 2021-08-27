import H2 from "../H2";

const ProfileStats = () => {
  return (
    <div className="text-gray-200 py-4 px-6 max-w-sm mx-auto xl:pt-8 xl:w-full">
      <div className="flex justify-between">
        <StatCard num="700" text="films" />
        <StatCard num="23" text="this year" />
        <StatCard num="42" text="watchlist" />
        <StatCard num="32" text="placeholder" />
      </div>

      <div className="py-4 xl:py-8">
        <H2 text="Director" coloredText="Top Rated" />
      </div>
    </div>
  );
};

const StatCard = ({ num, text }) => (
  <div className="text-center">
    <h3 className="font-bold">{num}</h3>
    <span className="capitalize text-sm">{text}</span>
  </div>
);

export default ProfileStats;
