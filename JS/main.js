$(function () {

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
        };
    });
});
