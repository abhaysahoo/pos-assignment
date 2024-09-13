import BreadCrumb from "@/components/shared/BreadCrumb";
import SkillsSection from "@/components/shared/SkillsSection";
import { reviewSkillsDescriptionLine1, reviewSkillsDescriptionLine2 } from "@/constants";
import { Suspense } from "react";


export default function Home() {
  return (
    <div className="wrapper">
      <div className="flex flex-col items-start gap-8">
        <BreadCrumb />
        <p className="leading-8 stroke_primary font-semibold">
          {reviewSkillsDescriptionLine1} 
          <br /> 
          {reviewSkillsDescriptionLine2}
        </p>
        <Suspense>
          <SkillsSection />
        </Suspense>
      </div>
    </div>
  );
}
