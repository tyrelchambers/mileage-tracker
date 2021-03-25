import React from "react";
import { Link } from "react-router-dom";
import { SecBtn } from "../../components/Buttons/Buttons";
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
        <SecBtn>Add location</SecBtn>
      </div>
      <Section title="Current Trip" subtitle={`${data.length} places`}>
        <div className=" flex">
          <div className="flex flex-col w-3/4">
            {data.map((d) => (
              <Trip data={d} />
            ))}
            <Link to="#" className="text-blue-500 underline">
              View trip
            </Link>
          </div>
          <div className="w-1/4 flex flex-col">
            <SecBtn>Export trip to CSV</SecBtn>
          </div>
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
