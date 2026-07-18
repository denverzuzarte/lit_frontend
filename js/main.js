const SIDEBAR_HTML = `
<div id="sidebar-overlay" class="sidebar-overlay"></div>
<aside id="sidebar" class="sidebar">
  <div class="sidebar-profile-label">My Profile</div>

  <div class="sidebar-divider"></div>

  <a href="/books/"       class="sidebar-nav-item" style="left: 1.33%; top: 25.47%;">Book Thingy</a>
  <a href="/peeps/"       class="sidebar-nav-item" style="left: 6.5%;  top: 35.75%;">Peeps</a>
  <a href="/events/" class="sidebar-nav-item" style="left: 1.33%; top: 46.03%;">Events</a>
  <a href="/team/"        class="sidebar-nav-item" style="left: 1.33%; top: 56.31%;">Literati's Team</a>
  <a href="/games/"       class="sidebar-nav-item" style="left: 0.67%; top: 66.59%;">Games</a>

  <a href="/literarium/" class="sidebar-branding" style="text-decoration: none; color: black;">Literarium</a>
  <a href="/feedback/" class="sidebar-feedback">Feedback or report bugs</a>

  <a href="/profile/"><img class="sidebar-avatar" src="/assets/images/shared/avatar-default.png" alt="Profile" /></a>
</aside>
`;

function openSidebar() {
  document.getElementById('sidebar').classList.add('active');
  document.getElementById('sidebar-overlay').classList.add('active');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('sidebar-overlay').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('beforeend', SIDEBAR_HTML);

  const toggle = document.getElementById('sidebar-toggle');
  const overlay = document.getElementById('sidebar-overlay');

  if (toggle) toggle.addEventListener('click', openSidebar);
  overlay.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });
});
