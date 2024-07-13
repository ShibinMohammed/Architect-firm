/*--Scroll Reveal Animation--*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1200,
    delay: 200,
    // reset: true
})

sr.reveal('#text-box-1', {delay: 100}, {duration: 1200})

sr.reveal('.info-left')
sr.reveal('.info-right', {origin: 'right'})

sr.reveal('.approach-right', {origin: 'left'})
sr.reveal('.approach-left')

sr.reveal('.what_we_do-left')
sr.reveal('.what_we_do-right', {origin: 'right'})

sr.reveal('.quote-right', {origin: 'left'})
sr.reveal('.quote-left')

sr.reveal('.projects h1')
sr.reveal('.projects-col')

sr.reveal('.testimonials')

sr.reveal('.testimonials h1')

sr.reveal('.career h1')
sr.reveal('.career p')

sr.reveal('.contact-col')
