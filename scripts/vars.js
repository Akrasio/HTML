function getQueryParam(name) {
    const regex = new RegExp('[?&]' + name + '=([^&#]*)', 'i');
    const result = regex.exec(window.location.search);
    return result ? decodeURIComponent(result[1]) : null;
}

var streamer = getQueryParam("streamer");
var vips = getQueryParam("vips")?.split(" ")
var hex = getQueryParam("hex") || "red"
var settings = {
    hex,
    vips
}
