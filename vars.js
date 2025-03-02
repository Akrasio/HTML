let streamer = window.location.search?.streamer.substring(1)
let vips = window.location.search?.vips?.split(" ")
let hex = window.location.search?.hex || "red"
let settings = {
    hex,
    vips
}
module.exports = { streamer, settings }
