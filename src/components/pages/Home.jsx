/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-dom';
import Navbar from "../Navbar/Navbar";
import animalCard from '../animalCard/animalCard';
import './Home.css';
import { getAnimal } from '../redux/aninmal/animal';

const HomePage = () => {
  const navigate = useNavigate();
  const animalArray = useSelector((state) => state.animal.animalArray);
  const [animal, setAnimal] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!animalArray.length) dispatch(getAnimal());
    setAnimal(animalArray);
  }, [animalArray]);

  const handleSearch = (e) => {
    e.preventDefault();
    let val = e.target.value;
    if (val.length > 0) {
      val = val.toLowercase();
      const searchRes = animalArray.filter((arr) => arr.name.toLowercase().includes(val));
      setAnimal(searchRes);
    } else {
      setAnimal(animalArray);
    }
  };

  return (
    <>
      <header className="header">
        <Navbar title="PerspectiveWild" />
        <img className="home-img" src="images/kindpng_7177875.png" alt="Image" />
        <div className="image-cover" />
      </header>
      <div className="search-sec">
        <h6>Animal Species</h6>
        <input className="input" type="text" palceholder="Search Animal..." onChange={handleSearch} />
      </div>
      <main className="main">
        {animal.map((animal) => (
          <animalCard
            key={animal.id}
            name={animal.name}
            img={animal.image}
            weight={animal.maxWeight}
            pos={animal.pos}
            onClick={() => {
              navigate('/detailsPage', { state: { animal } });
            }}
          />
        ))}
      </main>
    </>
  );
};

export default HomePage;
