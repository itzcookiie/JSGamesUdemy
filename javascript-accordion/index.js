const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', function(e) {
    !panel.classList.contains('active') && resetPanels();
    this.classList.toggle('active');
}))

function resetPanels() {
    panels.forEach(panel => panel.classList.remove('active'));
}