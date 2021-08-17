import React, { useEffect, useState } from "react";
import EventList from "../components/events/event-list";
import { getEventsData } from "../firebase/firebase";
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
  var res = await fetch("https://nextjs-anunturi.vercel.app/api/getAnunt");
  const data = await res.json();

  return {
    props: {
      events: data,
    },
  };
}
