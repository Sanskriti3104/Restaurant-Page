import './home.js';
import './menu.js';
import './about.js'
import './style.css';

import homeImage from './images/home.jpg';
document.getElementById('homeImage').src = homeImage;

const navBtns = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

navBtns.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        navBtns.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        tabContents.forEach(tab => tab.classList.remove('active'));
        document.querySelector(`.${tabId}`).classList.add('active');
    });
});