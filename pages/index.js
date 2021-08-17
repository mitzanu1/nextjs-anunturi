import React, { useEffect, useState } from "react";
import EventList from "../components/events/event-list";
import { getAnunturi } from "../api_utils/dbApi";
import axios from "axios";

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
  // const data = await getAnunturi();
  const { data } = await axios.get(
    "https://nextjs-anunturi.vercel.app/api/getAnunt"
  );

  return {
    props: {
      events: data,
    },
  };
}
