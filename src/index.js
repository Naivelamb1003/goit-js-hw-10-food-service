import './styles.css';
import './local-storage';
import menuJson from "./menu.json";
import menuTemplate from './templates/menu.hbs';
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
 

const KEY_THEME = "theme";
const themeCheckbox = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector("body");

const markup = menuTemplate(menuJson);

const container = document.querySelector('.js-menu');
container.innerHTML = markup;

let savedSettings = localStorage.getItem(KEY_THEME);
setDefaultTheme();

themeCheckbox.addEventListener('change', changeTheme);


function setDefaultTheme(){
    
    if(savedSettings === null){
        bodyTheme.classList.add(Theme.LIGHT);
        savedSettings = Theme.LIGHT;
       
    }
    else{
        bodyTheme.classList.add(savedSettings);
        if (savedSettings === Theme.DARK){
            themeCheckbox.checked = true;
        }
        
    };
}

function changeTheme(){
     bodyTheme.classList.toggle(Theme.LIGHT);
    bodyTheme.classList.toggle(Theme.DARK);

    if(savedSettings === Theme.LIGHT ){
        localStorage.setItem(KEY_THEME, Theme.DARK);
         savedSettings = Theme.DARK;
         
    }else{
        localStorage.setItem(KEY_THEME, Theme.LIGHT);
        savedSettings = Theme.LIGHT;
        
    }

};





  