import Link from "next/link";
import { Transcription } from "../../model/Transcription";

const TranscipedList = ({
  id,
  thumbnail,
  transcription,
  done,
  title,
  url,
}: Transcription): JSX.Element => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <div className="art-item-wraper">
          <div className="art-item-inner">
            <div className="art-item-img pos-rel">
              <img src={thumbnail} alt="art-img"></img>
            </div>
          </div>
        </div>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded="true"
          aria-controls={`collapse-${id}`}
        >
          {title}

          <div className="transcription-status">
            Status:
            {done ? (
              <>
                <span className="finished ml-1 mr-1">Done</span>
              </>
            ) : (
              <>
                <span className="pending ml-1 mr-1">Doing</span>{" "}
              </>
            )}
          </div>
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${id}`}
        data-bs-parent="#Accordions1"
      >
        <div className="accordion-body">
          <div className="pb-5">
            <Link href={url} className="mr-5 ml-5">
              <button className="fill-btn cursor-pointer " type="button">
                Video
              </button>
            </Link>

            <button
              className="fill-btn-orange cursor-pointer mr-5 ml-5"
              type="button"
            >
              Copy
            </button>
          </div>
          {transcription}
        </div>
      </div>
    </div>
  );
};

export default TranscipedList;
