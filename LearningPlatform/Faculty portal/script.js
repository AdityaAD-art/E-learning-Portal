// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Tab Switching
  const tabs = document.querySelectorAll('[data-tab]');
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      const targetTab = this.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      document.querySelectorAll('nav li a').forEach(link => {
        link.classList.remove('active');
      });
      document.getElementById(targetTab).classList.add('active');
      this.classList.add('active');
    });
  });

  // Course Form Toggle
  const addCourseBtn = document.getElementById('addCourseBtn');
  const courseFormContainer = document.getElementById('courseFormContainer');
  const cancelCourseBtn = document.getElementById('cancelCourseBtn');
  
  addCourseBtn.addEventListener('click', () => {
    courseFormContainer.style.display = 'block';
  });
  
  cancelCourseBtn.addEventListener('click', () => {
    courseFormContainer.style.display = 'none';
  });

  // Assignment Form Toggle
  const addAssignmentBtn = document.getElementById('addAssignmentBtn');
  const assignmentFormContainer = document.getElementById('assignmentFormContainer');
  const cancelAssignmentBtn = document.getElementById('cancelAssignmentBtn');
  
  addAssignmentBtn.addEventListener('click', () => {
    assignmentFormContainer.style.display = 'block';
  });
  
  cancelAssignmentBtn.addEventListener('click', () => {
    assignmentFormContainer.style.display = 'none';
  });

  // Modal Handling
  const modal = document.getElementById('studentModal');
  const closeModal = document.querySelector('.close-modal');
  
  document.querySelectorAll('.student-table tbody tr').forEach(row => {
    row.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  });
  
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Form Submissions
  document.getElementById('courseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission
    this.reset();
    courseFormContainer.style.display = 'none';
  });

  document.getElementById('assignmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission
    this.reset();
    assignmentFormContainer.style.display = 'none';
  });
});