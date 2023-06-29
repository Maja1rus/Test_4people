import {menu} from "./modules/menu.js";

// menu
try {
    const header = document.querySelector('.header');
    if (header) {
        menu(header)
    }
} catch (error) {
    console.log(error);
}