import React from "react";
import Heading from "../../Ui/Heading/Heading";
import FeedbackCarousel from "@/components/Ui/Hero/FeedbackCarousel";
import getAllFeedback from "@/lib/getFeedback";

const FeedBack = async (): Promise<React.JSX.Element> => {
  const feedbacks = await getAllFeedback();

  return (
    <section className=" w-full h-auto bg-background2 ">
      <section className="w-full h-auto py-10 lg:py-36">
        <section className="w-full max-w-[100rem]  mx-auto flex flex-col gap-14 ">
          <Heading
            heading={"Client Feedback"}
            subHeading={"Happy Words From Happy Customer"}
          />
          <FeedbackCarousel feedbacks={feedbacks} />
        </section>
      </section>
    </section>
  );
};

export default FeedBack;
