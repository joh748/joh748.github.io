const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
const projectCount = document.querySelector('#project-count');
function applyFilter(category) {
    let count = 0;
    projects.forEach(project => {
      const visible = category === 'all' || project.dataset.category === category;
      project.hidden = !visible;
      if (visible) count += 1;
    });
    filterButtons.forEach(item => {
      const selected = item.dataset.filter === category;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    projectCount.textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
}
filterButtons.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (target?.matches('[data-category]') && target.hidden) applyFilter('all');
  });
});
