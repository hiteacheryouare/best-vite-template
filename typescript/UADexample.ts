import { DEVICE_type, robotStatus } from "uadetect"

const example = document.getElementById('example');

if (DEVICE_type === 'mobile') {
    example.style.display = 'none';
}

if (robotStatus === 'ROBOT_controlled') {
    alert('ROBOT_controlled');
    alert('You are not allowed to visit this site');
    alert('Please visit our GitHub page');
    window.location.href = 'https://github.com/hiteacheryouare/best-vite-template';
}