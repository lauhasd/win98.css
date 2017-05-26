import {displayToggle} from '../Helpers/Helpers';

class StartMenu {
  constructor() {
    this.startBtn = document.getElementsByClassName('start-btn')[0];
    this.startMenu = document.getElementsByClassName('start-menu')[0];
    this.initializeStartMenu();
  }

  initializeStartMenu() {
    this.startMenu.style.display = 'none';
    this.startBtn.addEventListener('click', () => {
      const menuVisible = this.startMenu.style.display;
      this.startMenu.style.display = displayToggle[menuVisible];
    });
  }
}
export default StartMenu;
