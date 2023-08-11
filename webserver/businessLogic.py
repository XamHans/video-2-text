import tempfile
from pprint import pprint

import whisper
from pytube import YouTube


def transcribeVideoOrchestrator(youtube_url: str,  model_name: str):
    video = downloadYoutubeVideo(youtube_url)
    transcription = transcribe(video, model_name)
    return transcription


def transcribe(video: dict, model_name="medium"):
    print("Transcribing...", video['name'])
    print("Using model:", model_name)
    model = whisper.load_model(model_name)
    result = model.transcribe(video['path'], )
    pprint(result)
    return result["text"]


def downloadYoutubeVideo(youtube_url: str) -> dict:
    print("Processing : " + youtube_url)
    yt = YouTube(youtube_url)
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
