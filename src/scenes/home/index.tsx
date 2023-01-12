import { SelectedPage } from "@/shared/types";
import React from "react";
import useMediaQuery from "@/hooks/use-media-query";
import { ActionButton } from "@/shared/action-button.component";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMDScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 ">
      {/* Image and Main Header */}

      <div>
        {/* main header */}
        <div>
          {/* headings */}
          <div>
            <div>
              <div>
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              placeat veritatis provident nisi doloribus nemo eaque soluta sunt!
              Voluptas sint praesentium expedita veritatis voluptate recusandae
              fuga, culpa similique porro aliquam!
            </p>
          </div>
          {/* action */}

          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="font-font text-sm text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </div>
        </div>

        {/* image */}
        <div></div>
      </div>
    </section>
  );
};

export default Home;
