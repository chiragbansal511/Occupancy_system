import './App.css';
import { faker } from '@faker-js/faker';

let data = [];

for (let i = 0; i < 1000; i++) {
  const fullName = faker.person.fullName();
  const latitude = faker.location.latitude({ max: 30.7, min: 30.2, precision: 5 });
  const longitude = faker.location.longitude({ max: 76.4, min: 76.3, precision: 5 });

  data.push({ fullname : fullName, latitude :  latitude,  longitude : longitude });
}

console.log(JSON.stringify(data));

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
