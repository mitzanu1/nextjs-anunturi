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
  const data = await getAnunturi();

  return {
    props: {
      events: data,
    },
    revalidate: 1,
  };
}
