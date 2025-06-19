const buttonDark = document.getElementById('button1')
const buttonBright = document.getElementById('button2')

buttonDark.addEventListener('click', function () {
    document.body.classList.add("dark-mode")
})

buttonBright.addEventListener('click', function () {
    document.body.classList.remove("dark-mode")
})