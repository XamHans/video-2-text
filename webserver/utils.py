import re
from supabase import getTranscription


def is_youtube_url(url):
    # Regular expression pattern for a YouTube video URL
    pattern = r'(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([a-zA-Z0-9_-]{11})'

    # Match the URL pattern against the input string
    match = re.match(pattern, url)

    # Return True if the pattern matches, otherwise False
    return match is not None


def is_already_transcribed(url):
    data = getTranscription(url)
    print(data)
    if not all(data):
        return False

    return True


PREFIX = 'Bearer '


def get_token(header):
    if not header.startswith(PREFIX):
        raise ValueError('Invalid token')

    return header[len(PREFIX):]
