const pad = (num) => ("0" + num).slice(-2);

function convertTimestampToDate(timestamp) {
    return (
        timestamp.getDate() +
        " " +
        timestamp.toDateString().split(" ")[1] +
        " " +
        timestamp.getFullYear() +
        ", " +
        pad(timestamp.getHours()) +
        ":" +
        pad(timestamp.getMinutes())
    );
}

module.exports = {
    convertTimestampToDate,
};
