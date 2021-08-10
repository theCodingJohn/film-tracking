const ProfileHero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/w1280/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg)",
      }}
      className="relative h-80 w-full bg-fixed bg-no-repeat bg-cover bg-center"
    >
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
