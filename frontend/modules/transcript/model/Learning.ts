import { Transcription } from "./Transcription";

export type Learning = {
  id: string;
  title: string;
  tags: string[];
  transcript: Partial<Transcription>;
  status: "doing" | "done";
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateLearning = Partial<Learning>;
