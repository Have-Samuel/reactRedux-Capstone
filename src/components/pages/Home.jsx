import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import AnimalCard from '../animalCard/animalCard';
import './Home.css';
import { getAnimal } from '../../redux/animals/animal';

const HomePage = () => {
  const navigate = useNavigate();
  const animalArray = useSelector((state) => state.animal.animalArray);
  const [animal, setAnimal] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!animalArray.length) dispatch(getAnimal());
    setAnimal(animalArray);
  }, [animalArray, dispatch]);

  const handleSearch = (event) => {
    event.preventDefault();
    let val = event.target.value;
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
        <img className="home-img" src="images/kindpng_7177875.png" alt="Img" />
        <div className="image-cover" />
      </header>
      <div className="search-sec">
        <h6>Animal Species</h6>
        <input className="input" type="text" palceholder="Search Animal..." onChange={handleSearch} />
      </div>
      <main className="main">
        {animal.map((animal) => (
          <AnimalCard
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
