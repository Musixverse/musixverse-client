import Head from "next/head";

const CreateNFT2 = ({ }) => {
    return (
        <>
            <Head>
                <title>Musixverse | Comprehensive Details</title>
                <meta name="description" content="Musixverse" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto pt-36 pb-20 min-h-screen">
                <div className="flex flex-wrap justify-center content-center items-center">
                    <div>
                        <label htmlFor="track-origin">Track Origin - Version</label>
                        <select id="track-origin" name="Track Origin">
                            <option value="original">Original</option>
                            <option value="cover">Cover</option>
                            <option value="remix">Remix</option>
                            <option value="live">Live</option>
                            <option value="remastered">Remastered</option>
                            <option value="radio">Radio Edit</option>
                            <option value="other">Any other</option>
                        </select>
                    </div> 
                    <div>
                        <label htmlFor="genre">Genre</label>
                        <select id="genre" name="Genre">
                            <option value="Any">Original</option>
                            <option value="pop">Cover</option>
                            <option value="classical">Remix</option>
                            <option value="rap">Live</option>
                            <option value="indian">Remastered</option>
                            <option value="cultural">Radio Edit</option>
                        </select>
                    </div> 
                    <label htmlFor="rec-year">Recording Year</label>
                    <input
                        type={number}
                        id="rec-year"
                        placeholder="Recording Year"
                    />
                    <label htmlFor="vocals">Does this track contain any singing, rapping, or other vocals?
                        <input type={"radio"} id="vocals-yes" name="vocals" value="Yes" />
                        <input type={"radio"} id="vocals-no" name="vocals" value="No" />
                    </label>
                    <div>
                        <label htmlFor="content">Explicit Content</label>
                        <select id="content" name="content">
                            <option value="explicit">Explicit</option>
                            <option value="clean">Clean (There is another version of this track that is explicit, but this is the clean version)</option>
                            <option value="not-explicit">Not Explicit</option>
                        </select>
                    </div> 
                    <label htmlFor="contributors">Do you want to add other contributors?
                        <input type={"radio"} id="contributor-yes" name="contributors" value="Yes" />
                        <input type={"radio"} id="contributor-no" name="contributors" value="No" />
                    </label>

                    <button>Next</button>
                </div>
            </div>
        </>
    );
};

export default CreateNFT2;