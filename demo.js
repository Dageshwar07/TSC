const jsonData = [
    { name: "shanu", description: "Shanu is a plastic engineer" },
    { name: "dushyant", description: "dushyant is a software engineer." },
    { name: "pratik", description: "pratik is a product manager." }
  ];
  function showDescription(name) {
    const person = jsonData.find(item => item.name === name);
    if (person) {
      document.getElementById("description").innerText = person.description;
    } else {
      document.getElementById("description").innerText = "Description not found.";
    }
  }
  
