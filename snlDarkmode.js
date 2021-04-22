console.log("Er dette SNL?")

body = document.getElementsByTagName("body")[0]
body.style.background = "#2c2a36"
body.style.color = "#ffffff"

links = document.getElementsByTagName("a")
for (link of links) {
    link.style.color = "#ff991c"
}

factBoxes = document.getElementsByClassName("factbox")
for (factbox of factBoxes) {
    factbox.style.background = "#55506e"
}

mediaBoxes = document.getElementsByClassName("picture picture--zoomable")
for (mediaBox of mediaBoxes) {
    mediaBox.style.background = "#55506e"
}

pictureBackgrounds = document.getElementsByClassName("picture")
for (picture of pictureBackgrounds) {
    picture.style.background = "#55506e"
}

galleries = document.getElementsByClassName("gallery")
for (gallery of galleries) {
    gallery.style.background = "#251f40"
}

footers = document.getElementsByClassName("l-footer l-footer--snl")
for (footer of footers) {
    footer.style.background = "#251f40"
}