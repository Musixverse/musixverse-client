function bytesToMegaBytes(bytes) {
	var converted = bytes / (1024 * 1024);
	return converted.toFixed(2);
}

module.exports = { bytesToMegaBytes };
