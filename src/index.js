import './home.js';
import './menu.js';
import './about.js'
import './style.css';

import homeImage from './images/home.jpg';
document.getElementById('homeImage').src = homeImage;

import MargheritaClassica from './images/ivan-torres-MQUqbmszGGM-unsplash.jpg';
document.getElementById('MargheritaClassica').src = MargheritaClassica;

import PepperoniPizza from './images/vit-ch-Oxb84ENcFfU-unsplash.jpg';
document.getElementById('PepperoniPizza').src = PepperoniPizza;

import VerdureGrigliate from './images/rahul-upadhyay-yDKHJxfiWDk-unsplash.jpg'
document.getElementById('VerdureGrigliate').src = VerdureGrigliate;

import SpaghettiAglioEOlio from './images/soham-chadha-IdR3W2mzueg-unsplash.jpg';
document.getElementById('SpaghettiAglioEOlio').src = SpaghettiAglioEOlio;

import PenneAlfredo from './images/alfredo-burgos-B9_pP3ZwX9g-unsplash.jpg';
document.getElementById('PenneAlfredo').src = PenneAlfredo;

import LasagnaAlForno from './images/pexels-shameel-mukkath-3421394-5640052.jpg';
document.getElementById('LasagnaAlForno').src = LasagnaAlForno;
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