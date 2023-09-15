const input = document.getElementById("input");
const infoText = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const title = document.getElementById("title");
const meaningEl = document.getElementById("meaning");


async function request(word) {
    infoText.style.display = "block";
    meaningContainer.style.display = "none";
    infoText.innerText = `Searching the meaning of "${word}"`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        const response = await fetch(url)
        const result = await response.json()
        infoText.style.display = "none";
        meaningContainer.style.display = "block";
        title.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
    }
    catch (error) {
        console.log(error)
        infoText.innerText = `Error happened, try again later`
    }

}

input.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        request(e.target.value);
    }
});