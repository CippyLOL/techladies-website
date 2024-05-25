import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";

export default function AboutPage() {
  return (
    <div>
      {/* INTRO */}
      <div>
        <h1 className={title()}>
          We create opportunities to increase women’s participation in tech.
        </h1>
        <p>
          TechLadies is a community-led initiative for women to connect, learn,
          and grow in the tech industry as software engineers, product managers,
          data scientists, and UI/UX designers.
          <br />
          <br />
          Our community is for women in tech and women keen in switching careers
          into tech.
        </p>
        <Button>Join our Telegram</Button>
      </div>
      {/* HOW WE GOT STARTED */}
      <div>
        <h1 className={title()}>How We Got Started</h1>
        <p>
          As someone with no formal technical background, Elisha Tan learned to
          code from the developer community. Being a minority in tech, she
          wondered if women had adequate opportunities to explore the industry.
          <br />
          <br />
          That’s why she started TechLadies in 2016, to provide a space where
          women can learn technical skills and switch careers into the tech
          industry.
        </p>
      </div>

      {/* VOLUNTEERS */}
      <div>
        <h1 className={title()}>
          Today, TechLadies is led by a small group of volunteers
        </h1>
        <p>[INSERT TEAMS HERE]</p>
      </div>
      {/* VOLUNTEER CTA */}
      <div>
        <h1 className={title()}>
          Passionate about increasing gender diversity in tech?
        </h1>
        <p>We are looking for volunteers and support from companies.</p>
      </div>
    </div>
  );
}
