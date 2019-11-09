const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName)
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
});






// Some testing stuff
// panels.forEach(panel => {
//     panel.addEventListener('click', toggleOpen);
//     panel.addEventListener('transitionend', toggleActive);
// });

// panels.forEach(panel => {
//     panel.addEventListener('click', toggleOpen);
//     panel.addEventListener('transitionend', (event) => {
//         if (event.propertyName.includes('flex')) {
//             this.classList.toggle('open-active')
//         }
//     })
// });

// const inventors = [
//     {first: 'albert', last = 'einstein'},
//     {first: 'isaac', last = 'newton'}
// ]

// const getFullName = (inventor) => {
//     return `${inventor.first} ${inventor.last}`
// }

// const fullName = inventors.map((inventor) => {
//     return `${inventor.first} ${inventor.last}`
// })
