import Link from "next/link";

const IntroSection = () => {
  const WorkProcessItem = [
    {
      WorkProcessStep: "Step 1",
      WorkProcessImage: "/assets/img/step-1.svg",
      WorkProcessTitle: "Download the converter",
      WorkProcessDesc:
        "To use the transcript service, you will need to download and \
        execute a file that contains the converter. I understand that\
        downloading and executing files can be a concern for most users, which\
        is why I want to assure you that this converter is safe and reliable.\
        The code is open source and available for you (button in the header called GitHub), to check and verify\
        yourself. Just click on the title ⬆️ to download the converter ",
      WorkProcessLink:
        "https://drive.google.com/u/0/uc?id=1dkTasdy9annAQ7MjzR3ehXPEuby2Nzas&export=download",
    },
    {
      WorkProcessStep: "Step 2",
      WorkProcessImage: "/assets/img/step-2.svg",
      WorkProcessTitle: "Start the converter",
      WorkProcessDesc:
        "Double click on the downloaded file. This will start the converter.",
      WorkProcessLink: "/",
    },
    {
      WorkProcessStep: "Step 3",
      WorkProcessImage: "/assets/img/step-3.svg",
      WorkProcessTitle: "Fill in the below form",
      WorkProcessDesc:
        "Fill in the below form with a link to the Youtube video and select the language of this video. The converter will transcript the video. Once the process is done, it will you the result beneth the form.",
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
