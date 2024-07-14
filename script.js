const input = document.getElementById("text");
const submit_button = document.getElementsByClassName("submit")[0];
const reset_button = document.getElementsByClassName("reset")[0];

submit_button.addEventListener("click", async () => { await loop() });
reset_button.addEventListener("click", () => resetCounters());



function render(div_id, counter) {
    const div = document.getElementById(div_id);
    div.innerHTML = counter;
}

function resetCounters() {
    console.log("Resetting counters");
    render("first", `The number of words is 0`);
    render("second", `The number of characters is 0`);
    render("third", `The number of paragraphs is 0`);
    render("fourth", `The number of numbers present is 0`);
    render("fifth", `The number of special characters is 0`);
    input.value = "";
}

async function loop() {
    let [wordcounter, charactercounter, paragraphcounter, numbercounter, specialcharcounter] = [0, 0, 0, 0, 0];
    if (input.value === "") {
        alert("please enter any text");
        return;
    }
    let inputarray = input.value.split("\n");
    for (let lines of inputarray) {
        let words = lines.split(" ")
        words.map((n) => { if (n !== "") { wordcounter++ } })
        if (lines === "") {
            paragraphcounter++
        }
        words.map((word) => {
            let i = 0;
            while (i < word.length) {
                charactercounter++
                i++
            }
            for (let x of word) {
                if (/\d/.test(x)) {
                    numbercounter++
                }
                if (/[^a-zA-Z0-9]/.test(x)) {
                    specialcharcounter++
                }
            }
        })
    }
    render("first", `The number of words is ${wordcounter}`)
    render("second", `The number of characters is ${charactercounter}`)
    render("third", `The number of paragraphs is ${paragraphcounter + 1}`)
    render("fourth", `The number of numbers present is ${numbercounter}`)
    render("fifth", `The number of special characters is ${specialcharcounter}`)
}
