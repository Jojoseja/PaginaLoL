import { colors } from './colors.js'

const settingsModal = document.querySelector(".settings-modal");

const colorsContainer = settingsModal.querySelector('.colors');

const initColorOptions = () => {
    colors.forEach((color) => {
        const label = document.createElement('label');
        label.style.setProperty('--color', color);
        label.innerHTML = `<input type="radio" name="color" value="${color}" />`;
        colorsContainer.appendChild(label);
    })
}

initColorOptions();
