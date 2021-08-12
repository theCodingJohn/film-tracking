const ProfileHero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/w1280/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg)",
      }}
      className="relative h-80 w-full bg-fixed bg-no-repeat bg-cover bg-center text-white"
    >
      <div className="container mx-auto px-6 w-full h-full">
        <div className="absolute w-full h-full bg-gray-900 opacity-70 left-0"></div>
        <div className="w-full h-full flex flex-col justify-center items-center md:flex-row md:justify-between">
          <div className="text-xs z-10 order-1 md:py-10 md:order-first md:w-1/4 md:flex md:justify-center md:items-end md:h-full">
            <span>Philippines</span>
          </div>
          <div className="mb-3 md:mb-0 flex flex-col items-center justify-center z-10">
            <div
              style={{
                backgroundImage:
                  "url(https://pbs.twimg.com/profile_images/1358750135103070208/Ez-75GfC_400x400.jpg)",
              }}
              className="w-20 h-20 rounded-full bg-no-repeat bg-cover bg-center border-3 border-solid border-red-light"
            ></div>
            <span className="text-3xl font-bold justify-self-end mt-2">
              John
            </span>
          </div>
          <div className="text-center text-xs z-10 md:py-10 md:w-1/4 md:flex md:justify-center md:items-end md:h-full">
            <div className="md:w-8/12 md:truncate">
              <span className="md:whitespace-nowrap">
                The Suicide Squad
                <span className="text-gray-400 ml-1">2001</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
