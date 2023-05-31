import tempfile
from pprint import pprint

import whisper
from pytube import YouTube


def transcribeVideoOrchestrator(youtube_url: str, language: str):
    video = downloadYoutubeVideo(youtube_url)
    transcription = transcribe(video)
    return transcription


def transcribe(video: dict):
    print("Transcribing...", video['name'])
    model = whisper.load_model("medium")
    result = model.transcribe(video['path'])
    pprint(result)
    return result["text"]


def downloadYoutubeVideo(youtube_url: str) -> dict:
    print("Processing : " + youtube_url)
    yt = YouTube(youtube_url, use_oauth=True, allow_oauth_cache=True)
    directory = tempfile.gettempdir()
    file_path = yt.streams.filter(progressive=True, file_extension='mp4').order_by(
        'resolution').desc().first().download(directory)
    print("VIDEO NAME " + yt._title)
    print("Download complete:" + file_path)
    return {"name": yt._title, "thumbnail": yt.thumbnail_url, "path": file_path}


def on_progress(stream, chunk, bytes_remaining):
    """Callback function"""
    total_size = stream.filesize
    bytes_downloaded = total_size - bytes_remaining
    pct_completed = bytes_downloaded / total_size * 100
    print(f"Status: {round(pct_completed, 2)} %")
