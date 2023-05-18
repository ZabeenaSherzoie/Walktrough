document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    document.addEventListener('DOMContentLoaded', function () {
        let datepicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(datepicker, {
            format: "dd mmmm, yyyy",
            i18n:{done:'select'}
        });
    });
});

