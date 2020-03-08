import React, { useState } from 'react';

export const Filter = ({ onSetFilter }) => {
  const [filterBy, setFilterBy] = useState('year');
  const [years, setYears] = useState('all');
  const [genre, setGenre] = useState('all');

  const setFilter = event => {
    setFilterBy(event.target.value);
    setFilterObj();
  };

  const onSetYear = event => {
    setYears(event.target.value);
  };

  const onSetGenre = event => {
    setGenre(event.target.value);
  };

  const setFilterObj = () => {
    onSetFilter(filterBy, years, genre);
  };

  return (
    <div className="filterWrapper">
      <label>Filter By: </label>
      <select value={filterBy} onChange={e => setFilter(e)}>
        <option value="year">year</option>
        <option value="genre">genre</option>
      </select>
      {filterBy === 'year' && (
        <select value={years} onChange={e => onSetYear(e)}>
          <option value="all">All</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
        </select>
      )}
      {filterBy === 'genre' && (
        <select value={genre} onChange={e => onSetGenre(e)}>
          <option value="all">All</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      )}
      <button className="button" onClick={setFilterObj}>
        Filter
      </button>
    </div>
  );
};
