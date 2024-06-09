function toggleSection(id) {
    var section = document.getElementById(id);
    var sketchElement = document.getElementById('sketch');
    if (section.classList.contains('active')) {
        section.querySelector('.section-content').style.maxHeight = '0';
        section.querySelector('.section-content').style.opacity = '0';
        setTimeout(function() {
            section.classList.remove('active');
        }, 500); // Match the transition duration
    } else {
        var activeSections = document.querySelectorAll('.content .section.active');
        activeSections.forEach(function (activeSection) {
            activeSection.querySelector('.section-content').style.maxHeight = '0';
            activeSection.querySelector('.section-content').style.opacity = '0';
            setTimeout(function() {
                activeSection.classList.remove('active');
            }, 500); // Match the transition duration
        });
        section.classList.add('active');
        section.querySelector('.section-content').style.maxHeight = section.querySelector('.section-content').scrollHeight + 'px';
        section.querySelector('.section-content').style.opacity = '1';
    }
}
