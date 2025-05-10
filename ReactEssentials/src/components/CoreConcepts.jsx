import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title='Core Concepts'>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept {...concept} key={concept.title} />
        ))}
        {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
