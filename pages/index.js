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
  var res = await axios.get("http://localhost:3000/api/getAnunt", {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });

  const data = res.data;

  console.log(data);
  return {
    props: {
      events: data,
    },
  };
}
