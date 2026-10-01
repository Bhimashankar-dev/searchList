import { useState } from "react";
import "./App.css";

const shivaNames = [
  "Mahadev",
  "Bholenath",
  "Shiva",
  "Shankar",
  "Shambhu",
  "Mahesh",
  "Maheshwara",
  "Rudra",
  "Neelkanth",
  "Trilochan",
  "Trinetra",
  "Gangadhar",
  "Chandrashekhar",
  "Chandramouli",
  "Nataraja",
  "Pashupati",
  "Kailashpati",
  "Vishwanath",
  "Vaidyanath",
  "Somnath",
  "Kedarnath",
  "Mrityunjaya",
  "Tryambakeshwar",
  "Digambar",
  "Ashutosh",
  "Aghora",
  "Kapali",
  "Kaal Bhairav",
  "Yogeshwar",
  "Yogiraj",
  "Adiyogi",
  "Dakshinamurthy",
  "Ardhanarishvara",
  "Harihara",
  "Sadasiva",
  "Sadashiva",
  "Sarveshwara",
  "Parameshwara",
  "Vishweshwara",
  "Bhootnath",
  "Bhooteshwar",
  "Virabhadra",
  "Pinaki",
  "Pinakapani",
  "Shoolpani",
  "Girisha",
  "Girijapati",
  "Umapati",
  "Uma Maheshwara",
];

const  App =() => {
  const [searchInput, setSearchInput] = useState("");


  const onChangeInputField = (event) =>{
    setSearchInput(event.target.value)

  }

  const filterdShavaNames = shivaNames.filter((eachName) => eachName.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div className="app-container">
      <div className="hero-section">
        <h1>🔱 Names of Prabhu Bholenath🔱</h1>
        <p>Explore the divine names of Lord Shiva</p>

        <input
          type="search"
          placeholder="Search Shiva's name..."
          className="search-input"
          value={searchInput}
          onChange={onChangeInputField}
        />
      </div>

      <div className="names-container">
        {filterdShavaNames.map((name, index) => (
          <div className="name-card" key={index}>
            <span className="trishul">🔱</span>
            <h2>{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
