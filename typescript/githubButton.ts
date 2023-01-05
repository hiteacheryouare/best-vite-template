import {vibrate} from 'uadetect'
const githubButton: HTMLElement | null = document.getElementById('githubButton');

githubButton.onclick = () => {
    vibrate(200)
    window.location.href = 'https://github.com/hiteacheryouare/best-vite-template';
}