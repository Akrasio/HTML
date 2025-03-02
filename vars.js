let streamer = window.location.pathname.substring(1)
let vips = window.location.search?.vips?.split(" ")
let hex = window.location.search?.hex || "red"
let settings = {
    hex,
    vips
}
