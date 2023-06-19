import Link from "next/link";

const IntroSection = () => {
  const WorkProcessItem = [
    {
      WorkProcessStep: "Step 1",
      WorkProcessImage: "/assets/img/step-1.svg",
      WorkProcessTitle: "Download the converter",
      WorkProcessDesc:
        "To use the transcript service, you will need to run the python backend. Follow the instructions at the Github page. Just click the GitHub button located on the header (right side).",
      WorkProcessLink: "/",
    },
    {
      WorkProcessStep: "Step 2",
      WorkProcessImage: "/assets/img/step-2.svg",
      WorkProcessTitle: "Start the backend",
      WorkProcessDesc:
        "Install the dependencies and start the python backend: python3 -m uvicorn main:app --reload",
      WorkProcessLink: "/",
    },
    {
      WorkProcessStep: "Step 3",
      WorkProcessImage: "/assets/img/step-3.svg",
      WorkProcessTitle: "Fill in the below form",
      WorkProcessDesc:
        "Fill in the below form with a link to the Youtube video and select the language of this video. The backend will transcript the video. Once the process is done, it will you the result beneth the form.",
      WorkProcessLink: "/",
    },
  ];

  return (
    <section className="work-process-area pt-110 pb-100">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-lg-12">
            <div className="section-title1 pos-rel text-center mb-40">
              <h2 className="section-main-title1">
                Easily convert video to text
              </h2>
              <p>How to start</p>
            </div>
          </div>
        </div>
        <div className="work-processes">
          {WorkProcessItem && (
            <div className="row wow fadeInUp">
              {WorkProcessItem.map((WorkProcessSection, num) => (
                <div key={num} className="col-lg-4 col-md-6">
                  <div className="work-process-single mb-30 pos-rel">
                    <div className="step">
                      {WorkProcessSection.WorkProcessStep}
                    </div>
                    <div className="work-process-content">
                      <div className="process-icon mb-40">
                        <img
                          src={WorkProcessSection.WorkProcessImage}
                          alt="img"
                        />
                      </div>
                      <h4 className="process-title">
                        <Link href={WorkProcessSection.WorkProcessLink}>
                          {WorkProcessSection.WorkProcessTitle}
                        </Link>
                      </h4>
                      <p>{WorkProcessSection.WorkProcessDesc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
