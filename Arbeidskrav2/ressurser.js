const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

function showArticle(buttonId) {

    let articleHTML = ""
    let index = buttonId - 1
    let source = ""

    resources[index].sources.map(sourceIndex => source += `
            <li>
                <a href="${sourceIndex.url}">${sourceIndex.title}</a>
            </li>
            `)

    resources.map(article => articleHTML = `
    <div id="buttons">
    <button id="btn1" onclick="showArticle(1)">KATEGORI 1</button>
    <button id="btn2" onclick="showArticle(2)">KATEGORI 2</button>
    <button id="btn3" onclick="showArticle(3)">KATEGORI 3</button>
    <button id="btn4" onclick="showArticle(4)">KATEGORI 4</button>
    <button id="btn5" onclick="showArticle(5)">KATEGORI 5</button>
    </div>
    <article>
        <h2>${resources[index].category}</h2>
        <p>${resources[index].text}</p>
        <ul>
            ${source}
        </ul>
    </article>
    `)    

    document.querySelector("section").innerHTML = articleHTML


    let activeBtn = "btn"+buttonId

    if (activeBtn === "btn1") {
        var btn = document.getElementById("btn1")
        btn.classList.add("activeBtn")
    } else if (activeBtn === "btn2") { 
        var btn = document.getElementById("btn2")
        btn.classList.add("activeBtn")
    } else if (activeBtn === "btn3"){
        var btn = document.getElementById("btn3")
        btn.classList.add("activeBtn")
    } else if (activeBtn === "btn4"){
        var btn = document.getElementById("btn4")
        btn.classList.add("activeBtn")
    } else {
        var btn = document.getElementById("btn5")
        btn.classList.add("activeBtn")
    }
}



showArticle(1)





