import { transcribeService } from "@/modules/transcript/services/transcribeService";
import { FormInput } from "@/shared/components/FormInput";
import IntroSection from "@/shared/components/IntroCard/intro";
import { useToast } from "@/shared/hooks/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const createTranscriptionJobSchema = z.object({
  url: z.string({ required_error: "Please enter a valid youtube url" }),
  language: z.string({
    required_error: "Please select the language of the video",
  }),
});

export type CreateTranscriptionJobInput = z.TypeOf<
  typeof createTranscriptionJobSchema
>;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [transcript, setTranscript] = useState("");
  const { showSuccessToast, showErrorToast } = useToast();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<CreateTranscriptionJobInput>({
    mode: "onBlur",
    resolver: zodResolver(createTranscriptionJobSchema),
  });

  const openBuyMeCoffee = () => {
    document?.getElementById("bmc-wbtn")?.click();
  };

  const onSubmit = async (values: any) => {
    const { url, language } = values;
    if (!url || !language) return;
    //first check if transcription already exists for given url
    setLoading(true);
    const result = await transcribeService.transcribe({
      language: language,
      url: url,
    });
    setLoading(false);

    if (result.isLeft()) {
      console.log("error", result.value);
      showErrorToast(result.value);
      return;
    }
    setTranscript(result.value);
    console.log("result", result.value);
  };

  const copytoClipBoard = () => {
    navigator.clipboard.writeText(transcript);
    showSuccessToast("Copied to clipboard");
  };

  return (
    <>
      <main>
        <div className="upload-area pt-130 pb-90">
          <div className="container">
            <div className="row">
              <IntroSection />
            </div>
            <div className="upload-wrapper mb-10">
              <form className="upload-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12">
                    <div className="row wow fadeInUp">
                      <div className="single-input-unit">
                        <label>Youtube Url</label>
                        <FormInput
                          name="url"
                          register={register}
                          required
                          errors={errors}
                        />
                      </div>

                      <div className="single-input-unit">
                        <label>Language of Video</label>
                        <div className="common-select-arrow common-select-arrow-60 w-full">
                          <select
                            {...register("language")}
                            className="art-category-select art-category-select2 w-full"
                          >
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                           <option value="french">French</option>
                           <option value="german">German</option>
                           <option value="arabic">Arabic</option>
                           <option value="chinese">Chinese</option>
                           <option value="japanese">Japanese</option>
                           <option value="russian">Russian</option>

                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {loading ? (
                  <>
                    <button disabled className="fill-btn">
                      Transcribing ....
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    <button className="fill-btn">Submit</button>
                  </>
                )}
              </form>
            </div>

            <div className="row">
              {" "}
              {transcript && (
                <div className="row">
                  <div className="q-single-wrapper comments-show mb-30">
                    <div className="q-single-content">
                      <p>{transcript}</p>
                    </div>
                    <div className="q-answers-btn">
                      <a
                        href="#"
                        className="border-btn"
                        onClick={() => {
                          copytoClipBoard();
                        }}
                      >
                        <i className="flaticon-reload"></i>Copy
                      </a>
                    </div>
                  </div>
                </div>
              )}
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
