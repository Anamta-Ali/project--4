function saveResume() {
    const resumeContent = document.querySelector('.resume').innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    a.click();
    URL.revokeObjectURL(url);
}
