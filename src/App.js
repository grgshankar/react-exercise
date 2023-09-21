import { useState } from "react";
import "./App.css";
import ControlledUnControlled from "./ControlledUnControlled";
import UpdateParentFromChild from "./UpdateParentFromChild";

function App() {
  const [country, setCountry] = useState("");
  // console.log({ country });
  const countries = [
    {
      name: "Nepal",
      value: "NP",
      cities: ["Kathmandu", "Bhaktapur", "Lalitpur"],
    },
    { name: "India", value: "IN", cities: ["Banglore", "New Delhi", "Mumbai"] },
    {
      name: "Pakistan",
      value: "PK",
      cities: ["Karachi", "Lahore", "Islamabad"],
    },
  ];
  return (
    <div className="App">
      <select
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        <option value="">Select a Country</option>
        {countries.map((country, index) => {
          return (
            <option value={country.value} key={index}>
              {country.name}
            </option>
          );
        })}
      </select>

      {country && (
        <>
          <select>
            <option>Select Cities</option>
            {countries
              .find((d) => d.value === country)
              ?.cities.map((cities, index) => {
                return <option key={index}>{cities}</option>;
              })}
          </select>
        </>
      )}
      {/* <UpdateParentFromChild /> */}
      <ControlledUnControlled />
    </div>
  );
}

export default App;
