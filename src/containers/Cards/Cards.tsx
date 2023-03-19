import Card from '../../components/Card/Card';
import './Cards.css';

function Cards() {
  const state = {
    cards: [
      {
        id: '1',
        poster_path: '/src/assets/react.svg',
        title: 'HSBCS London 7s',
        author: 'Steven Simpson',
        genres: ['Branding', 'Graphic Design'],
        likes: 890,
        views: 7022,
        favourite: false,
      },
      {
        id: '2',
        poster_path: '/src/assets/react.svg',
        title: 'HSBCS London 7s',
        author: 'Steven Simpson',
        genres: ['Branding', 'Graphic Design'],
        likes: 890,
        views: 7022,
        favourite: false,
      },
      {
        id: '3',
        poster_path: '/src/assets/react.svg',
        title: 'HSBCS London 7s',
        author: 'Steven Simpson',
        genres: ['Branding', 'Graphic Design'],
        likes: 890,
        views: 7022,
        favourite: false,
      },
      {
        id: '4',
        poster_path: '/src/assets/react.svg',
        title: 'HSBCS London 7s',
        author: 'Steven Simpson',
        genres: ['Branding', 'Graphic Design'],
        likes: 890,
        views: 7022,
        favourite: false,
      },
      {
        id: '5',
        poster_path: '/src/assets/react.svg',
        title: 'HSBCS London 7s',
        author: 'Steven Simpson',
        genres: ['Branding', 'Graphic Design'],
        likes: 890,
        views: 7022,
        favourite: false,
      },
      {
        id: '6',
        poster_path: '/src/assets/react.svg',
        title: 'HSBCS London 7s',
        author: 'Steven Simpson',
        genres: ['Branding', 'Graphic Design'],
        likes: 890,
        views: 7022,
        favourite: false,
      },
    ],
  };
  return (
    <div className="cards__container">
      {state.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Cards;
