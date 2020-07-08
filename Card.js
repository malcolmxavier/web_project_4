const initialCards = [
  {
    label: 'Overhead Dock',
    link: './images/overhead-dock.jpg'
  },
  {
    label: 'Island From Land',
    link: './images/island-from-land.jpg'
  },
  {
    label: 'Green and White Dock',
    link: './images/green-and-white-dock.jpg'
  },
  {
    label: 'Lifeguard Station',
    link: './images/lifeguard-station.jpg'
  },
  {
    label: 'Circular Gates',
    link: './images/circular-gates.jpg'
  },
  {
    label: 'Golden Gate Bridge',
    link: './images/golden-gate-bridge.jpg'
  }
];
const cardTemplate = document.querySelector('.card-template').content.querySelector('.photo-grid__item');

class Card {
  constructor (label, link, cardTemplate) {

  }
}

const card = new Card ();

export default Card;
