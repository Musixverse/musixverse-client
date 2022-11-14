async function fileToBase64(audioFile) {
	return new Promise((resolve, reject) => {
		let reader = new FileReader();
		reader.onerror = reject;
		reader.onload = (e) => resolve(e.target.result);
		reader.readAsDataURL(audioFile);
	});
}

module.exports = { fileToBase64 };