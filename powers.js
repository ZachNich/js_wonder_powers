// two buttons to either active or deactivate all powers

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

/* You may notice that your code to enable individual powers (not all at once) is very similar. To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-") in your function) */

// if id includes 'activate' and doesn't include 'all', adds click event listener to button, replaces class of disabled with enabled

document.querySelectorAll('button').forEach(button => {
    const splitIdArr = button.id.split('-');
    if (splitIdArr[0] == 'activate' && splitIdArr[1] !== 'all') {
        button.addEventListener('click', func = () => {
            document.getElementById(splitIdArr[1]).classList.replace('disabled', 'enabled');
        })
    }; 
});