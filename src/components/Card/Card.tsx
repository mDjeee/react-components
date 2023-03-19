/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react';
import './Card.css';
import { AiOutlineLike, AiFillEye, AiFillStar } from 'react-icons/ai';

interface ICard {
  id: string;
  poster_path: string;
  title: string;
  author: string;
  genres: Array<string>;
  likes: number;
  views: number;
  favourite: boolean;
}

class Card extends Component<{ card: ICard }, { value: string | undefined }> {
  state = {
    value: localStorage.getItem('value')?.toString(),
  };

  componentWillUnmount(): void {
    const value = this.state.value ? this.state.value : '';
    localStorage.setItem('value', value);
  }

  render = () => {
    const { poster_path, title, author, genres, likes, views, favourite } = this.props.card;
    return (
      <div className="card">
        <img src={poster_path} alt="react" />
        <h3 className="card__title">{title}</h3>
        <div className="card__description">
          <p className="card__author">
            by <span className="card__author-name">{author}</span>
          </p>
          <hr />
          <p className="card__genres">{genres.join(', ')}</p>
          <div className="card__info">
            <span className="card__likes">
              <AiOutlineLike />
              {likes}
            </span>
            <span className="card__views">
              <AiFillEye />
              {views}
            </span>
            <span className="card__favourite">
              <AiFillStar className={favourite ? 'fill' : ''} />
            </span>
          </div>
        </div>
      </div>
    );
  };
}

export default Card;
