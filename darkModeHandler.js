const url = (new URL(document.location)).origin

const JSONurl = chrome.runtime.getURL("darkModes.json")

fetch (JSONurl)
    .then(response => response.json()) // Assuming file contaions json
    .then(data => readJSON(data))

function readJSON(json) {
    for (page in json) {
        if (url.startsWith(page)) {
            applyDarkmode(json[page])
        }
    }
}

function applyDarkmode(json) {
    for (colorChange of Object.keys(json)) {
        const values = json[colorChange]
        if (values.type == "tag") {
            applyToTag(values.name, values.color, values.background)
        }
        else if (values.type == "class") {
            applyToClass(values.name, values.color, values.background)
        }
    }
}

function applyToTag(name, color, background) {
    elements = document.getElementsByTagName(name)

    for (element of elements) {
        if (color) {
            element.style.color = color
        }
        if (background) {
            element.style.background = background
        }
    }
}

function applyToClass(name, color, background) {
    elements = document.getElementsByClassName(name)

    for (element of elements) {
        if (color) {
            element.style.color = color
        }
        if (background) {
            element.style.background = background
        }
    }
}