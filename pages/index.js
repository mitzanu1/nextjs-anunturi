import React, { useState } from "react";
import EventList from "../components/events/event-list";
import { getEventsData } from "../firebase/firebase";

const HomePage = (props) => {
  const featuredEvents = props.events;

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const data = await getEventsData();
  return {
    props: {
      events: data,
    },
  };
}
