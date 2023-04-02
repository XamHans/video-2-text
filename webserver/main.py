from fastapi import FastAPI, Body, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from utils import is_youtube_url

from businessLogic import transcribeVideoOrchestrator

app = FastAPI()

origins = [
    "https://video2text.de",
    "http://localhost:3000",
    "http://localhost:3001",

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/transcribe")
async def transcribe(payload: dict = Body(...), req: Request = Request):
    print(payload)
    url = payload['url']
    language = payload['language']

    transcript = transcribeVideoOrchestrator(url, language)

    return {"data":  transcript, "error": None}
