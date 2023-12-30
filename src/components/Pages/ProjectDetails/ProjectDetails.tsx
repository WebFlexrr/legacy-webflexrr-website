import Image from "next/image";
import React from "react";

const ProjectDetails = (): React.JSX.Element => {
  return (
    <section className="w-full h-auto ">
      <section className="w-full h-auto py-20 px-8 md:px-5 xl:py-36">
        <section className="w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-20 ">
          <section>
            <section className="w-full h-[50rem] flex">
              <section className="w-1/2 h-full pb-40 border pr-[14%] flex flex-col justify-between">
                <div className="w-full border flex flex-col gap-5">
                  <span>
                    <h4>Description :</h4>
                  </span>
                  <span>
                    <p>
                      Aliquam erat volutpat. Nulla molestie risus eget nibh
                      mollis ultricies. Integer porttitor vehicula nisi, sit met
                      volutpat erat tincidunt non. Praesent lacinia commodo
                      massa, ac mattis sem facilisis ut.
                    </p>
                  </span>
                </div>
                <div className="w-full border flex flex-col gap-5">
                  <span>
                    <h4>Client :</h4>
                  </span>
                  <span>
                    <p>
                      Maecenas eu vehicula felis Aen ean eleme ntum tortor ac nu
                      Aliquam erat volutpat. Nulla molestie risus eget nibh
                      mollis ultricies. Integer porttitor vehicula nisi, sit
                      amet volutpat erat tincidunt non.
                    </p>
                  </span>
                </div>
                <div className="w-full border flex flex-col gap-5">
                  <span>
                    <h4>Category :</h4>
                  </span>
                  <span>
                    <p>
                      Aliquam erat volutpat. Nulla molestie risus eget nibh
                      mollis ultricies. Integer porttitor vehicula nisi, sit met
                      volutpat erat tincidunt non. Praesent lacinia commodo
                      massa, ac mattis sem facilisis ut.
                    </p>
                  </span>
                </div>
                <div className="w-full border flex flex-col gap-5">
                  <span>
                    <h4>Share :</h4>
                  </span>
                  <span>
                    <p>
                      Aliquam erat volutpat. Nulla molestie risus eget nibh
                      mollis ultricies. Integer porttitor vehicula nisi, sit met
                      volutpat erat tincidunt non. Praesent lacinia commodo
                      massa, ac mattis sem facilisis ut.
                    </p>
                  </span>
                </div>
              </section>
              <section className="w-1/2 h-full border">
                <Image
                  src={
                    "https://gaaga.wpengine.com/wp-content/uploads/2023/06/portfolio-1.jpg"
                  }
                  width={"1000"}
                  height={"0"}
                  alt={""}
                  className="w-full h-full"
                />
              </section>
            </section>
            <section></section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProjectDetails;
