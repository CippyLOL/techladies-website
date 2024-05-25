"use client";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import volunteerFAQData from "./volunteer-faq";

export default function VolunteerPage() {
  const faqs = volunteerFAQData;

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h1 className={title()}>Volunteer</h1>
        <div>
          <p>image here</p>
          <div>
            <h1>We need your help to increase our impact</h1>
            <p>
              We have built an amazing international community in Asia and
              empowered women to switch careers into tech, but we need help.
              <br />
              <br />
              Join us in our mission to increase women's participation in the
              tech industry!
            </p>
            <Button>Volunteer with TechLadies</Button>
          </div>
        </div>
      </div>

      {/* WAYS TO VOLUNTEER */}
      <div>
        <h1>Ways to volunteer</h1>
        <p>
          TechLadies is led by a group of core team leaders and supported by a
          larger group of ad hoc helpers. Join us if you're passionate about
          gender diversity in tech, want to learn new skills, and meet
          like-minded peers!
          <br />
          <br />
          We are currently recruiting volunteers for 2024. If you are able to
          dedicate at least 4-5 hours a month and want to volunteer, we want
          you! Please apply by 15th Nov 2023 if you are interested.
        </p>
        <div className="column-3 bg-danger-500">
          <div>
            <h3>Ad hoc</h3>
            <p>
              Grow women's careers in tech with this 3-month program! We are
              looking for 3 - 4 Mentorship Leads.
            </p>
          </div>
        </div>
      </div>
      {/* BE A PARTNER */}
      <div>
        <h1>Be our Corporate Partner</h1>
        <p>
          We are looking for partner companies that provide speakers, mentors,
          coaches, and venue or financial sponsorship. Do reach out to
          hello@techladies.co to start a conversation.
        </p>
        <p>[INSERT BRAND LOGOS HERE]</p>
      </div>
      {/* DONATION LINKS */}
      <div>
        <h1>Donate to TechLadies</h1>
        <p>
          Your one-time donation enable us to continue our activities at
          TechLadies, including online tools and logistics.
        </p>
        <br />
        <br />
        <p>[INSERT LINKS HERE]</p>
      </div>
      {/* VOLUNTEERING FAQ */}
      <div>
        <h1 className={title()}>Volunteering FAQ</h1>
        <div className="text-left pt-4">
          <Accordion>
            {faqs.map((faq) => {
              return (
                <AccordionItem
                  key={faq.id}
                  aria-label="Accordion 1"
                  title={faq.question}
                >
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
