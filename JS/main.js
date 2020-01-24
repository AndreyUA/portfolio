$(function () {

    // filter

    const filer = $('[data-filter]');

    filer.on('click', function (e) {
        e.preventDefault();

        const cat = $(this).data('filter');

        if (cat === 'all') {
            $('[data-cat]').removeClass('hide');
        } else {
            $('[data-cat]').each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    // modal

    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on('click', function (e) {
        e.preventDefault();
        const $this = $(this);
        const modalId = $this.data('modal');
        $(modalId).addClass('show');
        $('body').addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find('.modal__dialog').css({
                transform: 'rotateX(0)'
            });
        }, 300);

    });

    modalClose.on('click', function (e) {
        e.preventDefault();

        const $this = $(this);
        const modalParent = $this.parents('.modal');

        modalParent.find('.modal__dialog').css({
            transform: 'rotateX(90deg)'
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 300);
    });

    $('.modal').on('click', function (e) {
        const $this = $(this);

        $this.find('.modal__dialog').css({
            transform: 'rotateX(90deg)'
        });

        setTimeout(function () {
            $this.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 300);


    });

    $('.modal__dialog').on('click', function (e) {
        e.stopPropagation();
    });

});



/* это фильтр на чистом JS
// filter BEGINS

const filter = document.querySelector('.works__nav');
const works = document.querySelectorAll('.portfolio__col');

filter.onclick = (e) => {
    e.preventDefault();
    const target = e.target;

    if (target.tagName != 'A') return;

    const show = target.textContent.toLowerCase();

    if (show === 'all') {
        for (let i = 0; i < works.length; i++) {
            works[i].classList.remove('hide');
        }
    } else if (show === 'app') {
        for (let i = 0; i < works.length; i++) {
            works[i].classList.add('hide');
        }

        for (let i = 0; i < works.length; i++) {
            if (works[i].getAttribute('data-cat') == 'app') {
                works[i].classList.remove('hide');
            }
        }
    } else if (show === 'websites') {
        for (let i = 0; i < works.length; i++) {
            works[i].classList.add('hide');
        }

        for (let i = 0; i < works.length; i++) {
            if (works[i].getAttribute('data-cat') == 'website') {
                works[i].classList.remove('hide');
            }
        }
    } else if (show === 'interaction') {
        for (let i = 0; i < works.length; i++) {
            works[i].classList.add('hide');
        }

        for (let i = 0; i < works.length; i++) {
            if (works[i].getAttribute('data-cat') == 'interaction') {
                works[i].classList.remove('hide');
            }
        }
    }
}

// filter ENDS
*/
