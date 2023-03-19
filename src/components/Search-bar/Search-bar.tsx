/* eslint-disable react/no-direct-mutation-state */
import { Component, KeyboardEvent } from 'react';
import './Search-bar.css';
import { AiOutlineSearch } from 'react-icons/ai';

class SearchBar extends Component {
  state = {
    value: localStorage.getItem('value')?.toString(),
  };

  componentWillUnmount(): void {
    const value = this.state.value ? this.state.value : '';
    localStorage.setItem('value', value);
  }

  handleSearch = () => {
    console.log(this.state.value);
  };

  handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(this.state.value);
    }
  };

  render = () => (
    <div className="search__container">
      <AiOutlineSearch onClick={this.handleSearch} className="search__icon" size={24} />
      <input
        placeholder="Search"
        onChange={(e) => {
          this.state.value = e.target.value;
        }}
        onKeyDown={this.handleKeyDown}
        defaultValue={this.state.value}
        className="search__input"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
