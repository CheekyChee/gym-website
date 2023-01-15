import { HeaderText } from "@/shared/HText";
import { IBenefit, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { BenefitCard } from "./benefit-card";

const BenefitsArr: IBenefit[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "State of the Art Equipment",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "100% Satisfaction Guarantee",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Certified Personal Trainers",
  },
];

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        className=""
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Benefits);
        }}
      >
        {/* Header */}
        <div className="md:my-5 md:w-3/5 ">
          <HeaderText>{"More Than Just a Gym"}</HeaderText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            aliquid quisquam nostrum enim officiis animi ratione veritatis,
            eligendi, delectus at odit, optio voluptatum praesentium quod
            corporis maiores corrupti modi maxime?
          </p>
        </div>

        {/* Benefits */}

        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {BenefitsArr.map((benefit: IBenefit) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
