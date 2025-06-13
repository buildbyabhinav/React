import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import EventsList from "../components/EventsList";
// import { useState } from "react";

function EventsPage() {
  const data = useLoaderData();
  //   if(data.isError){
  //     return <p>{data.message}</p>
  //   }
  // return <EventsList events={data.events} />; // because response is data with json format from which we need to access events
  return (
    <Suspense  fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense>
  );
}
//useLoaderDatat can be used in children components i.e. itslef and lower level components not on higher level
export default EventsPage;

async function loadEvents(params) {
  // useState //hooks cant be used in laoder functions // we can use localStorage and other js features but cant sue hooks
  const response = await fetch("http://localhost:8080/events"); // fetch returns promise as a response
  if (!response.ok) {
    // setError("Fetching events failed.");
    // return {isError : true, message: 'Couldnot fetch events'}
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
    // return json({ message: "Could not fetch events." }, {status:500}) // router dom provides a function json which automatically does all the work above line of code would have done
  } else {
    const resData = await response.json();
    // const res = new Response('any data', {statusCode: 200})
    return resData.events;
    // setFetchedEvents(resData.events);
    // return response;
  }
}

export function loader() {
  return {
    events: loadEvents(), // the value passed should be a promise
  };
}
