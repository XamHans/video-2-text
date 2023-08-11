import streamlit as st
from businessLogic import transcribeVideoOrchestrator


def open_buy_me_coffee():
    st.markdown('<script>document.getElementById("buy-me-coffee-btn").click();</script>',
                unsafe_allow_html=True)


def main():
    st.title("Video2Text")
 # Embed the Buy Me a Coffee widget using the provided <script> tag
    buy_me_coffee_script = """
         <script
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="hayerhans"
            data-description="If you like this, please consider supporting this work"
            data-message="If you like this, please consider supporting me!"
            data-color="#BD5FFF"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18">
        </script>
    """
    st.components.v1.html(buy_me_coffee_script)
    st.title("Support Me on Buy Me a Coffee")
    st.write(
        "If you find this app helpful and would like to support me, you can buy me a coffee!")
    st.markdown(buy_me_coffee_script, unsafe_allow_html=True)

    # User input: YouTube URL
    url = st.text_input("Enter YouTube URL:")

    # User input: model
    models = ["tiny", "base", "small", "medium", "large"]
    model = st.selectbox("Select Model:", models)
    st.write(
        "If you take a smaller model it is faster but not as accurate, whereas a larger model is slower but more accurate.")
    if st.button("Transcribe"):
        if url:
            transcript = transcribeVideoOrchestrator(url, model)

            if transcript:
                st.subheader("Transcription:")
                st.write(transcript)
            else:
                st.error("Error occurred while transcribing.")
                st.write("Please try again.")

    st.markdown('<div style="margin-top: 450px;"</div>',
                unsafe_allow_html=True)

    st.write(
        "If you need help or have questions about Video2Text, feel free to reach out to me.")

    st.write("Please enter your message below:")
    user_message = st.text_area("Your Message:")

    st.markdown(
        f'<a href="mailto:contact@jhayer.tech?subject=Video2Text-Help&body={user_message}">Send Mail</a>', unsafe_allow_html=True)


if __name__ == "__main__":
    main()
