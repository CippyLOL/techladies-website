import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        <h1 className={title()}>Start and Grow Your Career in Tech</h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          TechLadies is a community in Asia that supports women with the
          network, education, and mentorship for their careers in technical
          roles.
        </h2>
      </div>
      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.instagram}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          See Events
        </Link>
      </div>

      <div className="mt-12 mb-24 text-start">
        {/* STATS */}
        <h3 className={title({ size: "xs" })}>Our Community</h3>
        <div className="flex bg-lime-600 max-w-5xl p-12 rounded-lg mt-2 mb-8">
          <div className="w-1/3 mx-2">
            <h3 className={title()}>4200+</h3>
            <p>
              Community members in Asia interested in growing or starting their
              careers in tech
            </p>
          </div>
          <div className="w-1/3 mx-2">
            <h3 className={title()}>500+</h3>
            <p>
              Ladies trained in technical and soft skills vital in the tech
              industry
            </p>
          </div>
          <div className="w-1/3 mx-2">
            <h3 className={title()}>10+</h3>
            <p>
              Ladies successfully switched careers into technical roles through
              our programs
            </p>
          </div>
        </div>
      </div>

      <div className="inline-block max-w-5xl flex text-center justify-center p  y-4 ">
        <div className="w-1/2">
          <h1 className={title()}>
            Technology should be inclusive and accessible by all.
          </h1>
        </div>

        <div className="w-1/2 p-6">
          <AvatarGroup isBordered total={20}>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </AvatarGroup>
          <h2>
            TechLadies is managed by volunteers passionate about increasing
            gender diversity in the tech industry.
          </h2>
          <Button radius="full" color="primary">
            Our Team
          </Button>
        </div>
      </div>
      {/* FEATURED ON */}
      <div>
        <h3 className={title({ size: "xs", color: "violet" })}>
          As featured on
        </h3>
        <div className="columns-3">
          <Image
            // as={NextImage}
            width={200}
            height={70}
            src="/images/e27-logo.png"
            alt="e27 logo"
            radius="none"
          />
          <Image
            // as={NextImage}
            width={200}
            height={50}
            src="/images/e27-logo.svg"
            alt="e27 logo"
            radius="none"
          />
          <p>image here</p>
          <p>image here</p>
        </div>
      </div>
    </section>
  );
}
