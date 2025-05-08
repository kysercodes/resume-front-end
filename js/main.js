// document.querySelector('button').addEventListener('click', apiRequest)

// async function apiRequest(){
//     const rapperName = document.querySelector('input').value
//     try{
//         const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${rapperName}`)
//         const data = await response.json()

//         console.log(data)
//         document.querySelector('h2').innerText = data.birthName
//     }catch(error){
//         console.log(error)
//     }
// }

// let counterDisplayElem = document.getElementById('counter');
// counterDisplayElem.addEventListener('click', function() {
//     // 3. Log a message to the console when clicked
//     console.log('Element clicked!');
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     const counter = document.getElementById('counter');
    
//     fetch('https://rlnauei8x0.execute-api.us-east-1.amazonaws.com/count')
//     .then(response => response.json())
//     .then(data => {
//         let count = parseInt(data.count)
//         counter.textContent = count;
//       console.log(parseInt(data.count));
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });

// });
document.addEventListener('DOMContentLoaded', function () {
  const counter = document.getElementById('counter');

  fetch('https://rlnauei8x0.execute-api.us-east-1.amazonaws.com/count')
      .then(response => response.json())
      .then(data => {
        console.log(data.body)
          // const parsed = JSON.parse(data.body); // <-- parse the body string
          const count = parsed.visitor_count;   // <-- now this is a real number
          counter.textContent = count;
          console.log("Visitor count:", count);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
});

// const url =

// async function getData() {
//     const url = "https://example.org/products.json";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }}