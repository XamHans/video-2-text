from fastapi import FastAPI, Body, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

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
    url = payload['url']
    language = payload['language']

    transcript = transcribeVideoOrchestrator(url, language)

    return {"data":  transcript, "error": None}


def start_server(host="127.0.0.1",
                 port=3000,
                 num_workers=4,
                 loop="asyncio",
                 reload=False):
    uvicorn.run("web_server:app",
                host=host,
                port=port,
                workers=num_workers,
                loop=loop,
                reload=reload)


if __name__ == "__main__":
    start_server()
