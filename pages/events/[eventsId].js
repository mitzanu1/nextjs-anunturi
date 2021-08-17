import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
import { getAnunturi } from "../../api_utils/dbApi";
import axios from "axios";

const EventDetail = (props) => {
  // const router = useRouter();
  // const eventId = router.query.eventsId;
  // const event = props.events.filter((event) => event._id === eventId)[0];
  // const { title, updatedAt, contact, image, description, price, city } = event;
  // if (!event) {
  //   return (
  //     <Fragment>
  //       <ErrorAlert>
  //         <p>No event found</p>
  //       </ErrorAlert>
  //       <div className="center">
  //         <Button link="/events">Show All Events</Button>
  //       </div>
  //     </Fragment>
  //   );
  // }
  // return (
  //   <Fragment>
  //     <EventSummary title={title} />
  //     <EventLogistics
  //       date={updatedAt}
  //       tel={contact}
  //       image={image}
  //       imageAlt={title}
  //       price={price}
  //       city={city}
  //     />
  //     <EventContent>
  //       <p>{description}</p>
  //     </EventContent>
  //   </Fragment>
  // );
};

export default EventDetail;

// export async function getStaticPaths() {
//   const data = await getAnunturi();
//   // const { data } = await axios.get(
//   //   "https://nextjs-anunturi.vercel.app/api/getAnunt"
//   // );

//   const pathsArr = data.map((item) => ({
//     params: { eventsId: item._id },
//   }));
//   return {
//     paths: pathsArr,
//     fallback: "blocking",
//   };
// }

// export async function getStaticProps() {
//   const data = await getAnunturi();
//   // const { data } = await axios.get(
//   //   "https://nextjs-anunturi.vercel.app/api/getAnunt"
//   // );

//   return {
//     props: {
//       events: data,
//     },
//   };
// }
