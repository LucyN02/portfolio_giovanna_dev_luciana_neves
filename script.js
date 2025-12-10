function scrollProjects(scrollOffset) {
    const list = document.getElementById('project-list');
    // Faz a rolagem suave do container 'project-list'
    list.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
    });
}