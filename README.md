![banner img](https://i.ibb.co/4tzG9LY/Video2-Text-Banner.png)

!IMPORTANT: THERE IS CURRENTLY [A PROBLEM WITH PYTUBE](https://stackoverflow.com/questions/76129007/pytube-keyerror-streamdata-while-downloading-a-video)

# Video2Text 

Video2Text (https://video2text.de) allows you to easily convert your video to text. This process is also called transcription.
Currently it only supports Youtube Videos.



### Converting video to text (technical users)

#### Backend (Python - FastAPI & OpenAI Whisper)
1) cd into webserver
2) pip3 install -r requirements.txt
3) start websever with python3 -m uvicorn main:app --reload

#### Frontend (Nextjs)
1) cd into frontend
2) yarn install
3) yarn dev

## Help
If you need any help, contact me at contact@jhayer.tech

## Author
Johannes Hayer 
https://jhayer.tech

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the  MIT license

## Acknowledgments

OpenAI Whisper* [here](https://github.com/openai/whisper)
