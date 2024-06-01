from openai import OpenAI
from pathlib import Path
client = OpenAI()

def speech_to_text():
    audio_file= open("/path/to/file/audio.mp3", "rb")
    transcription = client.audio.transcriptions.create(
  model="whisper-1", 
  file=audio_file
)
    print(transcription.text)

def text_to_speech():
    speech_file_path = Path(__file__).parent / "speech.mp3"
    response = client.audio.speech.create(
  model="tts-1",
  voice="alloy",
  input="Today is a wonderful day to build something people love!"
)

    response.stream_to_file(speech_file_path)


