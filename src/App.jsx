import React from 'react';
import HomeA from './components/HomeA';


const App = () => {
  const obj = [{
    tittle: 'Free',
    price: "0$/Month",
    user: "✔Single User",
    storage: " ✔5GB Storage",
    project: "✔Limited projects",
    access: "✔community access",
    privateProjects: "✘limited private projects",
    support: "✘No phone support",
    domain: "✘No subdomain",
    status:"✘No status reports"
  }, {
    tittle: 'PLUS',
    price: "9$/Month",
    user: "✔5 User",
    storage: " ✔50GB Storage",
    project: "✔Free Limited projects",
    access: " ✔Free community access",
    privateProjects: "✔unlimited private projects",
    support: "✔Dedicated phone support",
    domain: "✔free subdomain",
    status: "✘monthly status reports"
   
    },
    {
      tittle: 'PRO',
      price: "49$/Month",
      user: "✔Single User",
      storage: " ✔150GB Storage",
      project: "✔Unlimited projects",
      access: " ✔unlimited access",
      privateProjects: " ✔Free private projects",
      support: " ✔Free phone support",
      domain: "✔free subdomain Unlimited",
      status: "✔Daily status reports"
  }]
    

  

  return (
    <div>
      <HomeA obj ={obj} />
    </div>
  );
};

export default App;