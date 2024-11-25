document.querySelectorAll('.component').forEach(function(item) {
    item.addEventListener('click', function() {
        alert(item.getAttribute('data-info'));
    });
});
