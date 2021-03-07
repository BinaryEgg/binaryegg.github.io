function formatDate(date) {
    const options = {
        year: "numeric", month: "long", day: "numeric",
        hour: "numeric", minute: "numeric"
    };
    return new Date(date).toLocaleDateString("en-GB", options);
}

export default {
    formatDate
}
