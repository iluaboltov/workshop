let selectedSpan;
let form = document.querySelector("#form")
let div = document.createElement("div")
div.classList.add('lorem')
let checkBox = document.getElementsByClassName("check-box")
for(let el of checkBox) {
    el.addEventListener('click', function (event) {
        let div = event.target.closest('div')
        let span = div.querySelector('span')
        highlight(span)
    })
}

form.addEventListener('submit', function (event) {

    event.preventDefault();

    let valueButton = document.querySelector("#input-info").value
    let button = document.querySelector("#input-info")
    if(!valueButton){
        button.setAttribute('placeholder', 'value enter')
        return;
    }
    let typeRadio = checkedRadioButton(document.querySelectorAll("input[name='type']"))

    createLorem(valueButton,typeRadio, div)
})

const highlight = (span)=> {
    if (selectedSpan) {
        selectedSpan.classList.remove('active');
    }
    selectedSpan = span;
    selectedSpan.classList.add('active');
}

const checkedRadioButton = (variable)=> {
    for (let el of variable){
        if(el.checked){
            return el.value
        }
    }
}

const createLorem = (value, type, element)=> {

    switch (type) {
        case "word": {

            let coma = Math.floor(Math.random() * 40) + 15
            let word = getWord()
            let tepmText = word[0].toUpperCase() + word.slice(1) + " "

            for (let i = 0; i <= value - 2; i++) {

                if(value - i == 2){
                    tepmText += getWord()
                    continue;
                }

                if (i % coma == 0 && i != 0) {
                    tepmText += getWord() + ", "
                    continue;
                }
                tepmText += getWord() + " "
            }
            element.innerHTML = "<p>" + tepmText + "." + "</p>"
            document.body.append(element)
            break;
        }
        case "str": {
            let tempText = "";
            for (let i = 0; i < value; i++) {
                tempText +=  makeStrLorem()
            }
            element.innerHTML = "<p>" + "   Lorem, ipsum... " + tempText + "</p>"
            document.body.append(element)
            break;
        }
        case "paragraph": {
            let text = "";
            for (let i = 0; i < value; i++) {
                let numStr = Math.floor(Math.random() * 15) + 3
                text += "<p>"
                for (let j = 0; j < numStr; j++) {
                    text += makeStrLorem()
                }
                text += "</p>"
            }
            element.innerHTML = text
            document.body.append(element)
            break;
        }
    }
}

const makeStrLorem = ()=>{
    const word = getWord() + " ";


    let wordsNumber = Math.floor(Math.random() * 20) + 5;
    let placementComa = wordsNumber >= 20 ? Math.floor(Math.random() * wordsNumber) + 10 : 0;
    let result = word[0].toUpperCase() + word.slice(1);

    for (let i = 0; i < wordsNumber; i++) {

        if(wordsNumber - i == 1) {
            result += getWord()
            continue;
        }
        if(placementComa == 0){
            result += getWord() + " "
            continue;
        }
        if (i % placementComa == 0 && i != 0) {
            result += getWord() + ", "
            continue;
        }
        result += getWord() + " "
    }
    return result + ". "
}

const getWord = ()=>{
    const collectionOfWord = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
        'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
        'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
        'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
        'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
        'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
        'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
        'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
        'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
        'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
        'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
        'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
        'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis',
        'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
        'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
        'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
        'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
        'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
        'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
        'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
        'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
        'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
        'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
        'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
        'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
        'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
        'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
        'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
        'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
        'elementum', 'tempor', 'risus', 'cras']
    return collectionOfWord[Math.floor(Math.random() * collectionOfWord.length)]
}