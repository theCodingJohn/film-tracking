import Head from "next/head";

import ProfileLayout from "../../components/ProfileLayout";
import H2 from "../../components/H2";
import FilmCard from "../../components/FilmCard";

import { favorite_movies } from "../../helper";

const profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileLayout>
        <section className="w-full">
          <div className="container max-w-sm mx-auto md:max-w-xl xl:mx-0 py-4 px-6 md:pt-8 md:px-10">
            <H2 className="mb-2" coloredText="Favorite" text="Films" />
            <div className="flex">
              {favorite_movies.map((movie) => (
                <FilmCard
                  className="mr-1 md:mr-2 w-1/4 md:w-44 md:h-48"
                  key={movie.id}
                  imgSrc={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="container max-w-sm mx-auto md:max-w-xl xl:mx-0 py-4 px-6 md:px-10">
            <H2 className="mb-2" coloredText="Recently" text="Watched" />
            <div className="flex">
              {favorite_movies.map((movie) => (
                <FilmCard
                  className="mr-1 md:mr-2 w-1/4 md:w-44 md:h-48"
                  key={movie.id}
                  imgSrc={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                />
              ))}
            </div>
          </div>
        </section>
      </ProfileLayout>
    </>
  );
};

export default profile;
