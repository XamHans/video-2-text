import { APIResponse } from "@/shared/infra/services/api/APIResponse";
import { left, right } from "../../../shared/core/Either";
import { BaseAPI } from "../../../shared/infra/services/api/BaseAPI";

export interface ITranscribeService {
  transcribe(input: {
    url: string;
    language: string;
  }): Promise<APIResponse<string>>;
}

export class TranscribeService extends BaseAPI implements ITranscribeService {
  // async getTranscriptions(
  //   userId?: string
  // ): Promise<PaginatedAPIResponse<Transcription>> {
  //   const result = await dbAdapter.getEntries<Transcription>({
  //     table: "transcriptions",
  //     queryParams: {
  //       page: 1,
  //       pageSize: 25,
  //       order: {
  //         key: "createdAt",
  //         ascending: false,
  //       },
  //     },
  //   });

  //   if (result.isLeft()) {
  //     return left(result.value);
  //   }

  //   return right({
  //     data: result.value.data,
  //     total: result.value.total,
  //   });
  // }

  // async getTranscriptionByUrl(
  //   url: string
  // ): Promise<APIResponse<Transcription>> {
  //   const { data, error } = await supabaseClient
  //     .from("transcriptions")
  //     .select("*")
  //     .eq("url", url)
  //     .single();

  //   if (error) {
  //     return left(error);
  //   }
  //   if (!data) {
  //     return left({ message: "Transcription not found" });
  //   }

  //   return right(data as Transcription);
  // }

  async transcribe({
    url,
    language,
  }: {
    url: string;
    language: string;
  }): Promise<APIResponse<string>> {
    console.log("schicke an webserver , url: ", url, " language: ", language);

    const { data: transcript, error } = await this.post("/transcribe", {
      url: url,
      language: language,
    });

    if (error) {
      return left(error);
    }
    return right(transcript);
  }
}

const transcribeService = new TranscribeService();

export { transcribeService };
