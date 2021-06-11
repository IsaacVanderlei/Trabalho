import React, { useState } from 'react';
import './styles.css';

interface IDocs {
  id: number,
  chapterName: string,
}

const Chapter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<IDocs[]>([]);

  fetch('https://the-one-api.dev/v2/chapter', {
    headers: {
      'Authorization': 'bearer P1JWlVqviwhIzDG0-WPg'
    }
  })
    .then((response) => response.json())
    .then(({ docs }) => setData(docs));

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}/>
      {data.filter((val) => {
        if (val.chapterName.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.chapterName}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Chapter;