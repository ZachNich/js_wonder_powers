document.querySelector("#activate-flight").addEventListener('click', flightHandlerFunction = () => {
    document.querySelector('#flight').classList.replace('disabled', 'enabled');
})

document.querySelector("#activate-mindreading").addEventListener('click', mindreadingHandlerFunction = () => {
    document.querySelector('#mindreading').classList.replace('disabled', 'enabled');
})

document.querySelector("#activate-xray").addEventListener('click', xrayHandlerFunction = () => {
    document.querySelector('#xray').classList.replace('disabled', 'enabled');
})

const powers = document.querySelectorAll('.power')
document.querySelector('#activate-all').addEventListener('click', activateallHandlerFunction = () => {
    for (let i = 0; i < powers.length; i++) {
        powers[i].classList.replace('disabled', 'enabled');
    }
})

document.querySelector('#deactivate-all').addEventListener('click', deactivateallHandlerFunction = () => {
    for (let i = 0; i < powers.length; i++) {
        powers[i].classList.replace('enabled', 'disabled');
    }
})