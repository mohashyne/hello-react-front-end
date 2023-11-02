import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../store/greetings/greetingSlice';
import './Greetings.css';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting, error, loading } = useSelector((state) => state.greetings);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchRandomGreeting());
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="container">
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {greeting && <p className="greeting-message">{greeting}</p>}
    </div>
  );
};

export default Greetings;
