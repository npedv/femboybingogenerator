let generateButton = document.querySelector("#generate")
let bingoGrid = document.querySelector("#bingo")

function getRandomNumber(mmo) {
    return Math.floor(Math.random() * mmo);
}

function titlesc (titles) {
    let t = document.createElement('t')
    t.innerHTML = `
    <h2>${titles}</h2>
    `
    return t
}

async function main () {
    let w = document.querySelector("#casebingo1")
    let ans = await fetch("https://raw.githubusercontent.com/npedv/femboybingogenerator/main/bingo.json", {
    headers: {
        Accept: 'application/json'
    }
    })
    let titles = await ans.json()
    let t1 = await titles.bingocards[getRandomNumber(5)]
    let t1t = t1.title
    w.append(titlesc(t1t))
}

generateButton.addEventListener("click", function onClick () {
    bingoGrid.innerHTML = `
    <div class="grid-container">
    <div class="grid-item" id="casebingo1"></div>
    <div class="grid-item" id="casebingo2"></div>
    <div class="grid-item" id="casebingo3"></div>
    <div class="grid-item" id="casebingo4"></div>
    <div class="grid-item" id="casebingo5"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    <div class="grid-item" id="casebingo"></div>
    </div>
`
main()
})


document.querySelector("#bingo").append