const ISRCInput = ({ step, nextStep, isrc, setIsrc, fetchSongDetails }) => {
    // Uncomment this code and add to create-nft/index.jsx if nft creation via isrc is required

    // const [isrc, setIsrc] = useState("");
    // const [spotifyAPIToken, setSpotifyAPIToken] = useState("");

    // const step0Values = { step, nextStep, isrc, setIsrc, fetchSongDetails };

    // const fetchSongDetails = async () => {
    //     if (isrc.length > 0) {
    //         const isrcResponse = await axios("https://api.spotify.com/v1/search", {
    //             method: "GET",
    //             params: {
    //                 q: "isrc:" + isrc,
    //                 type: "track",
    //             },
    //             headers: { Authorization: "Bearer " + spotifyAPIToken },
    //         });

    //         if (isrcResponse.data.tracks.items[0]) {
    //             setLinks((prevState) => ({
    //                 ...prevState,
    //                 spotifyLink: isrcResponse.data.tracks.items[0].external_urls.spotify,
    //             }));
    //             setTrackTitle(isrcResponse.data.tracks.items[0].name);
    //             console.log(isrcResponse.data.tracks.items[0].album.images[0].url);

    //             const _img = await axios.get(isrcResponse.data.tracks.items[0].album.images[0].url, { responseType: "blob" }).then((response) => {
    //                 return response.data;
    //             });
    //             const file = await uploadFile(_img);
    //             setImageHash(file.hash());
    //         }

    //         return isrcResponse.data.tracks.items[0];
    //     }
    // };

    // useEffect(() => {
    //     axios("https://accounts.spotify.com/api/token", {
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             Authorization: "Basic " + btoa(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID + ":" + process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET),
    //         },
    //         data: "grant_type=client_credentials",
    //         method: "POST",
    //     }).then((tokenResponse) => {
    //         setSpotifyAPIToken(tokenResponse.data.access_token);
    //     });
    // }, []);

    // case 1:
    //     return (
    //         <>
    //             <Head>
    //                 <title>Musixverse | Create NFT - ISRC</title>
    //                 <meta name="description" content="Musixverse" />
    //                 <link rel="icon" href="/favicon.ico" />
    //             </Head>
    //             <ScrollToTop samePage={true} changingValue={step} />
    //             <ISRCInput {...step0Values} />
    //         </>
    //     );

    return (
        <div className="container mx-auto pt-36 pb-20 min-h-screen">
            <div className="text-2xl font-secondary text-gray-500">Step {step}</div>
            <div className="flex flex-wrap justify-center content-center items-center">
                {/* Taking ISRC as Input */}
                <div className="grid gap-y-10 justify-items-center">
                    <div>
                        <label htmlFor="isrc" className="text-2xl font-semibold">
                            ISRC (International Standard Recording Code)
                        </label>
                    </div>
                    <div className="w-2/5">
                        <input
                            type="text"
                            id="isrc"
                            value={isrc}
                            onChange={(e) => {
                                setIsrc(e.target.value);
                            }}
                            pattern="[a-zA-Z0-9]+"
                            placeholder="Enter the ISRC here"
                            maxLength={12}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none shadow-sm focus:bg-white focus:border-primary-100"
                        />
                        <p className="text-gray-600 text-xs italic">
                            Please enter the ISRC of your track in the box above. You can find this code on your music distributor&apos;s website. We use this
                            to pull in track data automatically to take a little burden off of you.
                        </p>
                    </div>

                    <div className="w-3/5 flex justify-between">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            className="text-black text-md bg-light-300 font-primary rounded px-6 py-2"
                        >
                            Skip
                        </button>
                        <button
                            onClick={async (e) => {
                                e.preventDefault();
                                await fetchSongDetails();
                                nextStep();
                            }}
                            className="text-white text-md bg-primary-200 hover:bg-primary-300 font-primary rounded px-6 py-2"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ISRCInput;
