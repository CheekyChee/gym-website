import { SelectedPage } from "@/shared/types";
import { FC, Fragment } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  key: string;
  setSelectedPage: (page: SelectedPage) => void;
}

export const BenefitCard: FC<BenefitCardProps> = (props) => {
  const { description, icon, title, key, setSelectedPage } = props;
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="font-font text-sm text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  );
};
