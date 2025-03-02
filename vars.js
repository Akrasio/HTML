var streamer = window.location.search?.streamer?.substring(1)
var vips = window.location.search?.vips?.split(" ")
var hex = window.location.search?.hex || "red"
var settings = {
    hex,
    vips
}
module.exports = { streamer, settings }
