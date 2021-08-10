import Head from "next/head";

import Nav from "../components/Nav";
import ProfileHero from "../components/ProfileHero";

const profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Nav />
      <main>
        <ProfileHero />
      </main>
    </>
  );
};

export default profile;
