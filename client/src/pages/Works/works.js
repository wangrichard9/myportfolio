import React from 'react';
import './works.css';
import Bootstrap from '../assets/bootstrap.jpg';
import Todo from '../assets/todo.jpg';
import Weather from '../assets/weather.jpg';
import Memory from '../assets/Memory.jpg';

const Works = () => {
    return (
        <section id = 'works'>
            <h2 className="worksTitle"> My Projects</h2>
            <span className = "worksDesc">Here are a list of a couple of projects I have made with various tools </span>
            <div className="worksImgs">
                <img src={Bootstrap} alt="" className="worksImg" />
                <img src={Todo} alt="" className="worksImg" />
                <img src={Memory} alt="" className="worksImg" />
                <img src={Weather} alt="" className="worksImg" />
            </div>
        </section>
    );
}

export default Works