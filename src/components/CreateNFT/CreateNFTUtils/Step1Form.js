import { useState, useEffect } from "react";
import Image from "next/image";
import { useMoralisCloudFunction } from "react-moralis";
import ImageUpload from "./ImageUpload";
import AudioUpload from "./AudioUpload";
import RequiredAsterisk from "./RequiredAsterisk";

export default function Step1Form({
    trackTitle,
    setTrackTitle,
    trackBackground,
    setTrackBackground,
    coverArtUrl,
    setCoverArtUrl,
    setCoverArtMimeType,
    creditCoverArtArtist,
    setCreditCoverArtArtist,
    coverArtArtist,
    setCoverArtArtist,
    audioFileUrl,
    setAudioFileUrl,
    setAudioFileDuration,
    setAudioFileMimeType,
    lyrics,
    setLyrics,
}) {
    const audioUploadProps = { audioFileUrl, setAudioFileUrl, setAudioFileDuration, setAudioFileMimeType };

    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchedUsername, setSearchedUsername] = useState("");

    const toggleCoverArtArtistRadio = (e) => {
        if ((e.target.id === "coverArtArtistYes" && creditCoverArtArtist === false) || (e.target.id === "coverArtArtistNo" && creditCoverArtArtist === true)) {
            setCreditCoverArtArtist(!creditCoverArtArtist);
        }
    };

    const setCoverArtArtistEmail = async (e) => {
        setCoverArtArtist((prevState) => ({
            ...prevState,
            email: e.target.value,
        }));
        setFilteredUsers([]);
    };

    const setCoverArtArtistName = async (e) => {
        setCoverArtArtist((prevState) => ({
            ...prevState,
            name: e.target.value,
        }));
        setFilteredUsers([]);
    };

    const setCoverArtArtistInfo = async (user) => {
        setCoverArtArtist({
            id: user.objectId,
            name: user.name,
            username: user.username,
            address: user.ethAddress,
            avatar: user.userInfo[0].avatar,
            email: "",
        });
        setFilteredUsers([]);
    };

    const filterUsers = async (e) => {
        const keyword = e.target.value;
        if (keyword === "") {
            // If the text field is empty, show no users
            setFilteredUsers([]);
        }
        setSearchedUsername(keyword);
    };

    const { fetch: fetchMatchingUsers } = useMoralisCloudFunction(
        "fetchMatchingUsers",
        { username: searchedUsername },
        {
            autoFetch: false,
        }
    );
    useEffect(() => {
        if (searchedUsername !== "") {
            fetchMatchingUsers({
                onSuccess: async (object) => {
                    setFilteredUsers(object);
                },
                onError: (error) => {
                    console.log("fetchMatchingUsers Error:", error);
                },
            });
        }
    }, [searchedUsername]);

    return (
        <div className="w-full">
            <p className="mb-10 font-tertiary text-5xl font-normal">TRACK DETAILS</p>
            <div className="flex flex-col space-y-20 lg:w-full lg:max-w-[1150px] lg:space-x-10 lg:space-y-0 xl:space-x-20 lg:flex-row">
                {/* Details */}
                <div className="font-semibold lg:w-1/2 font-secondary">
                    <p className="text-sm">
                        TRACK TITLE
                        <RequiredAsterisk />
                    </p>
                    <input
                        type={"text"}
                        value={trackTitle ?? ""}
                        onChange={(e) => {
                            setTrackTitle(e.target.value);
                        }}
                        className="w-full px-4 py-1 mt-1 border-2 border-[#777777] rounded-md shadow-sm outline-none focus:border-primary-100 focus:dark:border-primary-100 dark:bg-[#323232] dark:border-[#323232]"
                        required
                    ></input>
                    <p className="text-[#777777] mt-1 mb-10 font-normal text-xs">Feel free to include featured artists and version info in the track title</p>

                    <div className="flex flex-col flex-1 space-y-2 sm:space-y-4">
                        <div className="flex flex-col w-full space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <div className="flex-1 text-sm font-semibold md:text-base">
                                <p className="mb-1 text-sm">
                                    TRACK BACKGROUND
                                    <RequiredAsterisk />
                                </p>
                                <textarea
                                    value={trackBackground ?? ""}
                                    onChange={(e) => {
                                        setTrackBackground(e.target.value);
                                    }}
                                    className={
                                        "dark:bg-[#323232] dark:focus:bg-[#1a1a1a] dark:border-[#323232] mt-1 w-full p-2 border-[2px] border-[#777777] focus:border-[2px] focus:border-primary-100 dark:focus:border-primary-100 rounded focus:outline-none focus:shadow-none dark:focus:text-primary-100 font-normal resize-none"
                                    }
                                    name="trackBackground"
                                    rows="13"
                                    required
                                ></textarea>
                                <p className="text-[#777777] mt-1 font-normal text-xs">
                                    The background field in MXV helps artists connect with their fans on a deeper level. You can write about the whole ideation
                                    process and the journey behind creating this awesome piece of music. Your fans will really be interested in hearing this
                                    from you!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Uploads */}
                <div className="font-semibold lg:w-1/2 font-secondary">
                    <p className="text-sm mb-1">
                        UPLOADS
                        <RequiredAsterisk />
                    </p>
                    {/* UPLOAD NFT ASSETS */}
                    <AudioUpload {...audioUploadProps} />

                    <ImageUpload coverArtUrl={coverArtUrl} setCoverArtUrl={setCoverArtUrl} setCoverArtMimeType={setCoverArtMimeType} />

                    <p className="text-sm mt-2">
                        Would you like to tell the world about who created this amazing cover art?
                        <RequiredAsterisk />
                    </p>
                    <div className="flex items-center mt-1 mb-4 space-x-5">
                        <div className="flex items-center">
                            <input
                                id="coverArtArtistYes"
                                type="radio"
                                name="cover-art-artist-radio"
                                className="hidden"
                                onClick={(e) => toggleCoverArtArtistRadio(e)}
                                checked={creditCoverArtArtist}
                                onChange={(e) => {}}
                            />
                            <label htmlFor="coverArtArtistYes" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                                <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="coverArtArtistNo"
                                type="radio"
                                name="cover-art-artist-radio"
                                className="hidden"
                                onClick={(e) => toggleCoverArtArtistRadio(e)}
                                checked={!creditCoverArtArtist}
                                onChange={(e) => {}}
                            />
                            <label htmlFor="coverArtArtistNo" className="flex items-center text-sm font-normal cursor-pointer font-secondary">
                                <span className="inline-block w-6 h-6 mr-1 border-2 rounded-full border-[#363636] flex-no-shrink"></span>
                                No
                            </label>
                        </div>
                    </div>

                    {creditCoverArtArtist ? (
                        <div className="basis-1/2 relative">
                            {coverArtArtist.username ? (
                                <div className="flex items-center">
                                    {coverArtArtist.avatar && (
                                        <div className="absolute flex items-center h-full ml-2">
                                            <Image src={coverArtArtist.avatar} height="30" width="30" className="rounded-full" />
                                        </div>
                                    )}
                                    <input
                                        className="bg-gray-100 dark:bg-[#272626] dark:text-light-100 dark:border-[#323232] w-full px-12 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777]"
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Username"
                                        value={coverArtArtist.name}
                                        onClick={() => setCoverArtArtist({ id: "", name: "", username: "", address: "", avatar: "" })}
                                        readOnly
                                        required
                                    />
                                    <div
                                        onClick={() => {
                                            setCoverArtArtist({ id: "", name: "", username: "", address: "", avatar: "" });
                                            setSearchedUsername("");
                                        }}
                                        className="w-8 h-8 ml-2 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-zinc-500/20 "
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <p className="text-xs text-[#777777] font-normal mb-2">
                                        Enter their username if they are on Musixverse or just enter their name and email
                                    </p>
                                    <div className="flex flex-col">
                                        <input
                                            className="dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="Username"
                                            autoComplete="off"
                                            onChange={(e) => {
                                                filterUsers(e);
                                            }}
                                        />
                                    </div>

                                    {!coverArtArtist.username && filteredUsers ? (
                                        <div className="absolute w-full">
                                            {filteredUsers.length > 0 ? (
                                                filteredUsers.map((user, idx) => (
                                                    <a key={user.objectId} className="flex flex-col basis-full">
                                                        {filteredUsers.length === 1 ? (
                                                            <button
                                                                type="button"
                                                                className="flex items-center rounded bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 py-2 px-3 justify-start text-start"
                                                                onClick={() => {
                                                                    setCoverArtArtistInfo(user);
                                                                }}
                                                            >
                                                                {user.userInfo[0] ? (
                                                                    <Image src={user.userInfo[0].avatar} height="30" width="30" className="rounded-full" />
                                                                ) : (
                                                                    ""
                                                                )}
                                                                <span className="ml-2">{user.name}</span>
                                                                <div>
                                                                    <span className="ml-2 text-xs font-normal">@{user.username}</span>
                                                                </div>
                                                            </button>
                                                        ) : idx === 0 ? (
                                                            <button
                                                                type="button"
                                                                className="flex items-center rounded-t bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 py-2 px-3 justify-start text-start"
                                                                onClick={() => {
                                                                    setCoverArtArtistInfo(user);
                                                                }}
                                                            >
                                                                {user.userInfo[0] ? (
                                                                    <Image src={user.userInfo[0].avatar} height="30" width="30" className="rounded-full" />
                                                                ) : (
                                                                    ""
                                                                )}
                                                                <span className="ml-2">{user.name}</span>
                                                                <div>
                                                                    <span className="ml-2 text-xs font-normal">@{user.username}</span>
                                                                </div>
                                                            </button>
                                                        ) : filteredUsers.length === idx + 1 ? (
                                                            <button
                                                                type="button"
                                                                className="flex items-center rounded-b bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 py-2 px-3 justify-start text-start"
                                                                onClick={() => {
                                                                    setCoverArtArtistInfo(user);
                                                                }}
                                                            >
                                                                {user.userInfo[0] ? (
                                                                    <Image src={user.userInfo[0].avatar} height="30" width="30" className="rounded-full" />
                                                                ) : (
                                                                    ""
                                                                )}
                                                                <span className="ml-2">{user.name}</span>
                                                                <div>
                                                                    <span className="ml-2 text-xs font-normal">@{user.username}</span>
                                                                </div>
                                                            </button>
                                                        ) : (
                                                            <button
                                                                type="button"
                                                                className="flex items-center bg-light-100 dark:bg-dark-100 hover:text-light-100 dark:text-light-100 hover:bg-primary-100 dark:hover:bg-primary-100 py-2 px-3 justify-start text-start"
                                                                onClick={() => {
                                                                    setCoverArtArtistInfo(user);
                                                                }}
                                                            >
                                                                {user.userInfo[0] ? (
                                                                    <Image src={user.userInfo[0].avatar} height="30" width="30" className="rounded-full" />
                                                                ) : (
                                                                    ""
                                                                )}
                                                                <span className="ml-2">{user.name}</span>
                                                                <div>
                                                                    <span className="ml-2 text-xs font-normal">@{user.username}</span>
                                                                </div>
                                                            </button>
                                                        )}
                                                    </a>
                                                ))
                                            ) : searchedUsername.length > 0 ? (
                                                <a key={"no"} className="flex flex-col basis-full">
                                                    <button
                                                        type="button"
                                                        className="bg-light-100 hover:bg-gray-200 dark:bg-dark-100 dark:text-light-100 py-2 px-6 justify-start text-start rounded"
                                                    >
                                                        <span className="text-xs">No results found!</span>
                                                    </button>
                                                </a>
                                            ) : null}
                                        </div>
                                    ) : null}

                                    <div className="flex flex-col justify-center items-center">
                                        <p className="text-sm text-[#777777] font-normal mt-2 mb-2">or</p>
                                        <div className="flex space-x-2 w-full">
                                            <input
                                                className="dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                                autoComplete="off"
                                                value={coverArtArtist.name}
                                                onChange={(e) => {
                                                    setCoverArtArtistName(e);
                                                }}
                                                required
                                            />
                                            <input
                                                className="dark:text-light-100 dark:bg-[#323232] dark:border-[#323232] dark:focus:border-primary-100 w-full px-4 py-2 text-sm border-2 rounded-lg shadow-sm outline-none border-[#777777] focus:border-primary-100"
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                autoComplete="off"
                                                value={coverArtArtist.email}
                                                onChange={(e) => {
                                                    setCoverArtArtistEmail(e);
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ) : null}

                    <p className="mt-8 text-sm">LYRICS</p>
                    <textarea
                        value={lyrics ?? ""}
                        onChange={(e) => {
                            setLyrics(e.target.value);
                        }}
                        className={
                            "dark:bg-[#323232] dark:focus:bg-[#1a1a1a] dark:border-[#323232] mt-1 w-full p-2 border-[2px] border-[#777777] focus:border-[2px] focus:border-primary-100 dark:focus:border-primary-100 rounded focus:outline-none focus:shadow-none dark:focus:text-primary-100 font-normal resize-none"
                        }
                        name="lyrics"
                        rows="6"
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
