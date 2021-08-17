import React from "react";
import EventList from "../components/events/event-list";
import { getAnunturi } from "../api_utils/dbApi";

const HomePage = (props) => {
  const featuredEvents = props.events;

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  var res = await fetch("https://nextjs-anunturi.vercel.app//api/anunt", {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });

  const data = await res.json();

  return {
    props: {
      events: data,
      revalidate: 1,
    },
  };
}
