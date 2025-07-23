// FUNÇÃO DARK MODE
const buttonDark = document.getElementById('button1')
const buttonBright = document.getElementById('button2')

buttonDark.addEventListener('click', function () {
    document.body.classList.add("dark-mode")
})

buttonBright.addEventListener('click', function () {
    document.body.classList.remove("dark-mode")
})

// BARRA DE PESQUISA
const inputsearch = document.getElementById('searchBar')

inputsearch.addEventListener('input', (event) => {
    const value = event.target.value

    const cars = document.querySelectorAll('.allOptions .line .CarBox')
    cars.forEach(item => {
        if(formatString(item.textContent).indexOf(value) !== -1) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
})

function formatString(value) {
    return value.toLowerCase().trim()
}

closeCookies = () => {
    const cookies = document.querySelector('.cookies')
    cookies.style.display = 'none'
}