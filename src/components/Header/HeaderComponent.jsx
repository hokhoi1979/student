import { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className='header'>
        <nav className='header__nav'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
