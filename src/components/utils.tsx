export const downloadResume = () => {
    const resumeAnchor = document.createElement('a');
    resumeAnchor.setAttribute('href', '/resume/Danielle_Humilde_Resume.pdf');
    resumeAnchor.setAttribute('download', 'Danielle_Humilde_Resume.pdf');
    document.body.appendChild(resumeAnchor);
    resumeAnchor.click();
    document.body.removeChild(resumeAnchor);
};