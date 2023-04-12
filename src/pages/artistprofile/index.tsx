import Navbar from "@/components/navbar";
import React from "react";
import Profile from "@/components/artistprofile/profile";
import Description from "@/components/artistprofile/description";
import Songs from "@/components/artistprofile/Songs";

const index = () => {
  return (
    <Navbar>
      <main className="max-w-4xl m-auto my-10">
        <Profile
          name="Charlie puth"
          description="singer-songwriter"
          nation="American"
          type="Pop"
        />
        <Description follower={"700,439"} />
        <Songs />
      </main>
    </Navbar>
  );
};

export default index;
