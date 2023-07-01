import { blockFixed } from "./modules/fixed.js";
import {menu} from "./modules/menu.js";
import Slider from "./modules/input-range.js";
import ItcCustomSelect from "./modules/select.js";

// menu
try {
    const header = document.querySelector('.header');
    if (header) {
        menu(header)
        blockFixed(header, 500);
    }
} catch (error) {
    console.log(error);
}

// input-range
try {
    let rangeElement = document.querySelector('.range [type="range"]')
    let valueElement = document.querySelector('.range .range__count') 
    
    let options = {
        min: 0,
        max: 100,
        cur: 75
    }
      
    if (rangeElement) {
        let slider = new Slider(rangeElement, valueElement, options)
        slider.init()
    }
} catch (error) {
    console.log(error);
}

// select
new ItcCustomSelect('#select-order');