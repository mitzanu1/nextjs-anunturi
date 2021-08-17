import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getAnunturi } from "../../api_utils/dbApi";
import axios from "axios";

const EventSlug = (props) => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading ...</p>;
  }
  const filterdYear = +filterData[0];
  const filterdMonth = +filterData[1];

  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filterdEvents = props.events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === filterdYear &&
      eventDate.getMonth() === filterdMonth - 1
    );
  });

  if (!filterdEvents || filterdEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(filterdYear, filterdMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filterdEvents} />
    </Fragment>
  );
};

export default EventSlug;

export async function getServerSideProps(context) {
  const { params } = context;
  const data = await getAnunturi();
  // const { data } = await axios.get(
  //   "https://nextjs-anunturi.vercel.app/api/getAnunt"
  // );

  const filterData = params.slug;
  const filterdYear = +filterData[0];
  const filterdMonth = +filterData[1];

  if (
    isNaN(filterdYear) ||
    isNaN(filterdMonth) ||
    filterdYear > 2030 ||
    filterdYear < 2021 ||
    filterdMonth < 1 ||
    filterdMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound:true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const filterdEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === filterdYear &&
      eventDate.getMonth() === filterdMonth - 1
    );
  });
  return {
    props: {
      events: filterdEvents,
    },
  };
}
