// Resume download (you can update the resume link)
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume.pdf'; // Put your actual file path here
  link.download = 'YourName_Resume.pdf';
  link.click();
}

// Form submission (just alerts for now)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
});
