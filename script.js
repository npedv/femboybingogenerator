let generateButton = document.querySelector("#generate")
let bingoGrid = document.querySelector("#bingo")

let alreadygenerated = []

generateButton.addEventListener("click", function onClick () {
    
    alreadygenerated = []

    function getRandomNumber(mmo) {
        let c = Math.floor(Math.random() * mmo)
        while(alreadygenerated.includes(c)){
            c = Math.floor(Math.random() * mmo)
        }
        alreadygenerated.push(c)
        return c
    }
    
    function titlesc (titles) {
        let t = document.createElement('t')
        t.innerHTML = `
        <h2>${titles}</h2>
        `
        return t
    }
    
    async function main () {
        let ans = await fetch("https://raw.githubusercontent.com/npedv/femboybingogenerator/main/bingo.json", {
        headers: {
            Accept: 'application/json'
        }
        })
        let titles = await ans.json()
        for(let i = 1; i < 25; i++){
            let w = document.querySelector(`#casebingo${i}`)
            let g
            g = getRandomNumber(40)
            let t1 = await titles.bingocards[g]
            let t1t = t1.title
            w.append(titlesc(t1t))
        }
    }

    bingoGrid.innerHTML = `
    <div class="grid-container">
    <div class="grid-item" id="casebingo1"></div>
    <div class="grid-item" id="casebingo2"></div>
    <div class="grid-item" id="casebingo3"></div>
    <div class="grid-item" id="casebingo4"></div>
    <div class="grid-item" id="casebingo5"></div>
    <div class="grid-item" id="casebingo6"></div>
    <div class="grid-item" id="casebingo7"></div>
    <div class="grid-item" id="casebingo8"></div>
    <div class="grid-item" id="casebingo9"></div>
    <div class="grid-item" id="casebingo10"></div>
    <div class="grid-item" id="casebingo11"></div>
    <div class="grid-item" id="casebingo12"></div>
    <div class="grid-item" id="freespace"><h2>Free space :3</h2></div>
    <div class="grid-item" id="casebingo13"></div>
    <div class="grid-item" id="casebingo14"></div>
    <div class="grid-item" id="casebingo15"></div>
    <div class="grid-item" id="casebingo16"></div>
    <div class="grid-item" id="casebingo17"></div>
    <div class="grid-item" id="casebingo18"></div>
    <div class="grid-item" id="casebingo19"></div>
    <div class="grid-item" id="casebingo20"></div>
    <div class="grid-item" id="casebingo21"></div>
    <div class="grid-item" id="casebingo22"></div>
    <div class="grid-item" id="casebingo23"></div>
    <div class="grid-item" id="casebingo24"></div>
    </div>
`
main()

let bingodone = document.querySelector("#ygBingo")

const cases = document.querySelectorAll('.grid-item')
        cases.forEach(caseElement => {
            caseElement.addEventListener('click', () => {
                if (caseElement.classList.contains('clicked')) {
                    caseElement.classList.remove('clicked')
                } else {
                    caseElement.classList.add('clicked')
                }
            });
        });
})
