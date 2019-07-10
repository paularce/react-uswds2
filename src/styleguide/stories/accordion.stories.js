import React from "react";
import { storiesOf } from "@storybook/react";
import { Accordion, AccordionItem } from "../../uswds/components/Accordion";

storiesOf("USWDS|Components/Accordion", module)
  .add("default", () => (
    <div className="wrapper">
      <Accordion>
        <AccordionItem title="First Amendment">
          <p>
            Congress shall make no law respecting an establishment of religion,
            or prohibiting the free exercise thereof; or abridging the freedom
            of speech, or of the press; or the right of the people peaceably to
            assemble, and to petition the Government for a redress of
            grievances.
          </p>
        </AccordionItem>
        <AccordionItem title="Second Amendment">
          <p>
            A well regulated Militia, being necessary to the security of a free
            State, the right of the people to keep and bear Arms, shall not be
            infringed.
          </p>
        </AccordionItem>
        <AccordionItem>
          <span>Third Amendment</span>
          <p>
            No Soldier shall, in time of peace be quartered in any house,
            without the consent of the Owner, nor in time of war, but in a
            manner to be prescribed by law.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  ))
  .add("with border", () => (
    <div className="wrapper">
      <Accordion bordered>
        <AccordionItem title="First Amendment">
          <p>
            Congress shall make no law respecting an establishment of religion,
            or prohibiting the free exercise thereof; or abridging the freedom
            of speech, or of the press; or the right of the people peaceably to
            assemble, and to petition the Government for a redress of
            grievances.
          </p>
        </AccordionItem>
        <AccordionItem title="Second Amendment">
          <p>
            A well regulated Militia, being necessary to the security of a free
            State, the right of the people to keep and bear Arms, shall not be
            infringed.
          </p>
        </AccordionItem>
        <AccordionItem>
          <span>Third Amendment</span>
          <p>
            No Soldier shall, in time of peace be quartered in any house,
            without the consent of the Owner, nor in time of war, but in a
            manner to be prescribed by law.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  ))
  .add("with startCollapsed toggled", () => (
    <div className="wrapper">
      <Accordion startCollapsed>
        <AccordionItem title="First Amendment">
          <p>
            Congress shall make no law respecting an establishment of religion,
            or prohibiting the free exercise thereof; or abridging the freedom
            of speech, or of the press; or the right of the people peaceably to
            assemble, and to petition the Government for a redress of
            grievances.
          </p>
        </AccordionItem>
        <AccordionItem title="Second Amendment">
          <p>
            A well regulated Militia, being necessary to the security of a free
            State, the right of the people to keep and bear Arms, shall not be
            infringed.
          </p>
        </AccordionItem>
        <AccordionItem>
          <span>Third Amendment</span>
          <p>
            No Soldier shall, in time of peace be quartered in any house,
            without the consent of the Owner, nor in time of war, but in a
            manner to be prescribed by law.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  ));

storiesOf("USWDS|Components/Accordion/AccordionItem", module).add(
  "with 'expanded' property",
  () => (
    <div className="wrapper">
      <Accordion>
        <AccordionItem title="First Amendment">
          <p>
            Congress shall make no law respecting an establishment of religion,
            or prohibiting the free exercise thereof; or abridging the freedom
            of speech, or of the press; or the right of the people peaceably to
            assemble, and to petition the Government for a redress of
            grievances.
          </p>
        </AccordionItem>
        <AccordionItem title="Second Amendment">
          <p>
            A well regulated Militia, being necessary to the security of a free
            State, the right of the people to keep and bear Arms, shall not be
            infringed.
          </p>
        </AccordionItem>
        <AccordionItem expanded>
          <span>Third Amendment</span>
          <p>
            No Soldier shall, in time of peace be quartered in any house,
            without the consent of the Owner, nor in time of war, but in a
            manner to be prescribed by law.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  )
);
