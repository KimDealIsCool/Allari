import { useState } from 'react';
import { fetchAnimals } from '../services/AnimalService';

function useAnimalData() {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);

  const fetchAnimalsData = async () => {
    try {
      const fetchedAnimals = await fetchAnimals();

      if (!Array.isArray(fetchedAnimals) || fetchedAnimals.length === 0) {
        throw new Error('No animals found.');
      }

      setAnimals(fetchedAnimals);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  return {
    animals,
    error,
    fetchAnimals: fetchAnimalsData,
  };
}

export default useAnimalData;
