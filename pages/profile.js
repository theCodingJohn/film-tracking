import Head from "next/head";

import ProfileLayout from "../components/ProfileLayout";

const profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <ProfileLayout></ProfileLayout>
    </>
  );
};

export default profile;
