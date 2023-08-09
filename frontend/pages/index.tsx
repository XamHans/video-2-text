import IntroSection from "@/shared/components/IntroCard/intro";

export default function Home() {
  const openBuyMeCoffee = () => {
    document?.getElementById("bmc-wbtn")?.click();
  };

  return (
    <>
      <main>
        <div className="upload-area pt-130 pb-90">
          <div className="container">
            <div className="row">
              <IntroSection />
            </div>

            <div className="row ">
              <button
                className="pulse-btn"
                onClick={() => {
                  openBuyMeCoffee();
                }}
              >
                Donate 5$ to support my work
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
