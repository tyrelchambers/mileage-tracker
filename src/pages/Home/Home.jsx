import React from "react";
import { Link } from "react-router-dom";
import Trip from "../../components/Trip/Trip";
import DisplayWrapper from "../../Layout/DisplayWrapper/DisplayWrapper";
import Section from "../../Layout/Section/Section";

const data = [
  {
    location: "Dr. G. J. MacGillvray",
    address: "75 Meadowglade Rd, Courtice, ON L1E 3G7",
  },
  {
    location: "Dr. G. J. MacGillvray",
    address: "75 Meadowglade Rd, Courtice, ON L1E 3G7",
  },
  {
    location: "Dr. G. J. MacGillvray",
    address: "75 Meadowglade Rd, Courtice, ON L1E 3G7",
  },
];

const Home = () => {
  return (
    <DisplayWrapper title="Home">
      <div className="mt-5 mb-5">
        <button
          type="button"
          className="p-4 bg-gray-400 w-full center rounded-md font-bold text-gray-700"
        >
          Add location
        </button>
      </div>
      <Section title="Current Trip" subtitle={`${data.length} places`}>
        <div className="w-1/2 ">
          <div className="flex flex-col w-full">
            {data.map((d) => (
              <Trip data={d} />
            ))}
            <Link to="#" className="text-blue-500 underline">
              View trip
            </Link>
          </div>
          <div className="w-1/2 "></div>
        </div>
      </Section>

      <Section title="Your Places">
        {data.map((d) => (
          <Trip data={d} canAdd />
        ))}
      </Section>

      <Section title="Most Visited">
        {data.map((d) => (
          <Trip data={d} />
        ))}
      </Section>
    </DisplayWrapper>
  );
};

export default Home;
