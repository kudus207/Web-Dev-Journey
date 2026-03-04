<!-- 
    I had difficulty embedding a YouTube video link in my <iframe> page 
    Found out YouTube does not allow normal watch links inside an <iframe>
    Example <iframe src="https://youtu.be/OXGznpKZ_sA"></iframe>
     or
     <iframe src="https://youtu.be/OXGznpKZ_sA"></iframe> 
     will cause “YouTube refused to connect.”

     Correct Way to Embed a YouTube Video
     Step 1:
      Extract the Video ID
        From your link:
        https://youtu.be/OXGznpKZ_sA
        The video ID is:
        OXGznpKZ_sA

        Step 2:
         Use the Embed Format
         src="https://www.youtube.com/embed/OXGznpKZ_sA" 

         Even Easier Method (Best Practice)
            Go to the YouTube video.
            Click Share
            Click Embed
            Copy the iframe code YouTube gives you.
            Paste it into your HTML.

            IFRAME syntax
      -->
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/OXGznpKZ_sA" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media;vgyroscope; picture-in-picture; web-share" 
        allowfullscreen>
    </iframe>
