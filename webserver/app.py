import streamlit as st
from businessLogic import transcribeVideoOrchestrator


def main():
    st.title("Video2Text")

    # User input: YouTube URL
    url = st.text_input("Enter YouTube URL:")

    # User input: Language
    languages = ["English", "Spanish", "French", "German"]  # Add more languages as needed
    language = st.selectbox("Select Language:", languages)

    if st.button("Transcribe"):
        if url:
            transcript = transcribeVideoOrchestrator(url, language)

            if transcript:
                st.subheader("Transcription:")
                st.write(transcript)
            else:
                st.error("Error occurred while transcribing.")
                st.write("Please try again.")

if __name__ == "__main__":
    main()
