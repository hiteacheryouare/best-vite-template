import { deviceType, robotStatus, UADetect, uaDetect } from "uadetect"

const example: HTMLElement | null = document.getElementById('example');
const UAD = new uaDetect()
const os = UAD.getOS()
const browser = UADetect.getBrowser()

if (deviceType === 'mobile') {
    example.style.display = 'none';
}

if (robotStatus === 'robotControlled') {
    alert('ROBOT_controlled');
    alert('You are not allowed to visit this site');
    alert('Please visit our GitHub page');
    window.location.href = 'https://github.com/hiteacheryouare/best-vite-template';
} else if (os === "Unknown") {
    alert("Unknown OS!")
} else if (browser === "Unknown") {
    alert("Unknown Browser!")
}

