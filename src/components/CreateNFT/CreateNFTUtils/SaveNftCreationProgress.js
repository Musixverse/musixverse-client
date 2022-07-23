const Moralis = require("moralis");

async function saveNftCreationProgress(nftDraftMetadata, draft) {
	const params = { metadata: nftDraftMetadata, draftId: draft };
	await Moralis.Cloud.run("saveNftDraft", params);
}

module.exports = {
	saveNftCreationProgress,
};
