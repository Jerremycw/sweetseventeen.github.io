const btnLove = document.querySelector('.btn-love');
btnLove.addEventListener('click', function(e) {
    if (!this.classList.contains('act')) {
        this.className += " act";

        TweenMax.set('.circle,.small-ornament', {
            rotation: 0,
            scale: 0,
        })
        TweenMax.set('.ornament', {
            opacity: 0,
            scale: 1,
        })
        let Tl = new TimelineMax({});
        Tl.to('.fa', 0.1, {
            scale: 0,
            ease: Back.easeNone,
        })

        Tl.to('.circle', 0.2, {

            scale: 1.2,
            opacity: 1,
            ease: Back.easeNone,
        })

        Tl.to('.fa', 0.2, {
            delay: 0.1,
            scale: 1.3,
            color: '#e3274d',
            ease: Ease.easeOut
        })
        Tl.to('.fa', 0.2, {
            scale: 1,
            ease: Ease.easeOut
        })

        Tl = new TimelineMax({
            delay: 0.1,
        });


        Tl.to('#eclipse', 0.2, {

            strokeWidth: 10,
            ease: Back.easeNone,
        })
        Tl.to('#eclipse', 0.2, {
            strokeWidth: 0,
            ease: Back.easeNone,
        })
        Tl = new TimelineMax({
            delay: 0.1,
        });
        Tl.to('.small-ornament', 0.3, {
            scale: 0.8,
            opacity: 1,
            ease: Linear.easeOut,
        })
        Tl.to('.small-ornament', 0.2, {
            scale: 1.2,
            opacity: 1,
            rotation: 15,
            ease: Ease.easeOut,
        })


        Tl = new TimelineMax({
            delay: 0.3,
        });
        Tl.to('.ornament', 0.2, {
            opacity: 1,
            ease: Ease.easeNone
        })
        Tl.to('.ornament', 0.1, {
            scale: 0,
            ease: Ease.easeOut
        })
    } else {
        this.classList.remove('act');
        TweenMax.set('.fa', {
            color: '#c0c1c3',
        })
    }
})