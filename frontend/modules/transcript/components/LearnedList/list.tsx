import { useEffect, useState } from "react";
import { Transcription } from "../../model/Transcription";

export interface TranscribeListProps {
  userId?: string;
}

const LearnedList = ({ userId }: TranscribeListProps): JSX.Element => {
  const [transcripts, setTranscripts] = useState<Transcription[]>([]);

  const loadtranscripts = async () => {
    // const result = await transcribeService.getTranscriptions(userId);
    // if (result.isLeft()) {
    //   console.log(result.value);
    //   return;
    // }
    // settranscripts(result.value.data);
  };

  useEffect(() => {
    loadtranscripts();
  }, []);

  return (
    <div className="faq-tab-contents mb-0 wow fadeInUp">
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade active show"
          id="tab-nav1"
          role="tabpanel"
          aria-labelledby="nav-tab1"
        >
          <div className="about-info-wrapper mb-30">
            <div className="accordion accordion-general" id="Accordions1">
              {transcripts.map((transcript) => (
                <p>{transcript.id}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnedList;
