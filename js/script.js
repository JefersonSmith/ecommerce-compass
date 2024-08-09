document.getElementById('hamburger').addEventListener('click', function() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

document.addEventListener('click', function(event) {
    var isClickInside = document.getElementById('hamburger').contains(event.target) || 
                        document.getElementById('dropdownMenu').contains(event.target);

    if (!isClickInside) {
        document.getElementById('dropdownMenu').style.display = 'none';
    }
});
