import Head from "next/head";

const CreateNFT1 = ({ }) => {
    return (
        <>
            <Head>
                <title>Musixverse | Track Details</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <label htmlFor="track title">Track Title</label>
                    <input 
                        type={text} 
                        id="track title"  
                        placeholder="Title"
                        required        
                    />
                    <label htmlFor="cover-art">Cover Art</label>
                    <input 
                        type={image} 
                        id="cover-art"  
                        width={1600}
                        height={1600}
                        required        
                    />
                    <label htmlFor="song-file">Song File</label>
                    {/* need to add accept attribute @Sparsh */}
                    <input 
                        type={file} 
                        id="song-file"
                        accept="audio/*"
                        required         
                    />
                    {/* Links to other platforms */}
                    <label htmlFor="youtube-link">Youtube Link</label>
                    <input
                        type={url}
                        id="youtube-link"
                        placeholder="Youtube Link"
                    />
                    <label htmlFor="spotify-link">Spotify Link</label>
                    <input
                        type={url}
                        id="spotify-link"
                        placeholder="Spotify Link"
                    />
                    <label htmlFor="apple-music-link">Apple Music Link</label>
                    <input
                        type={url}
                        id="apple-music-link"
                        placeholder="Apple Music Link"
                    />
                    <button>Next</button>
                </div>
            </div>
        </>
    );
};

export default CreateNFT1;