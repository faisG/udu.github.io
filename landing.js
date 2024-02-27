const url1 = "https://script.google.com/macros/s/AKfycbyFH-EY4rETGaSqzgEJfHWPHwcSMtsLaUk-e9wDEEi5Zy1DjfuXm-NGVP5BWdSGmMh7/exec"
const myInput = document.querySelector('.nums');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const results = document.querySelector('.content');

  window.onload = function() {
    document.getElementById('loading').style.display = 'block';
    requestLandingDate();
  };


// btn1.addEventListener('click',(e)=>{
//     const val = myInput.value;
//     const url=`${url1}?type=${val}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     console.log(url);
// })
// btn2.addEventListener('click',(e)=>{
//     const val = myInput.value;
//     const url=`${url1}?type=${#TR%^63%389*&hfggfdg*T&GUYFT%RYRYTF}`;
//     const formData = new FormData();
//     if(val === '1' || val === '2'|| val === '3')
// {
//     fetch(url,{
//         method:"POST",
//         body:formData})
//     .then(res => res.json())
//     .then(data => {
//         outputer(data)
//     })
// }
//     console.log(url);
// })


function createCategoryPamphlets(data) {
  const categoriesContainer = document.getElementById("categories");
  document.getElementById('loading').style.display = 'none';
  
  for (let i = 1; i < data.vals.length; i++) {
    const category = data.vals[i];
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const categoryId = category[0];
    const categoryName = category[1];
    const images = category.slice(2, 6);
    
    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = categoryName;
    categoryDiv.appendChild(categoryTitle);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    images.forEach(imageData => {
      const img = document.createElement("img");
      // "data:image/png;base64 ," is already mentioned in the document 
      img.src =  imageData;
      imageContainer.appendChild(img);
    });

    categoryDiv.appendChild(imageContainer);

    categoryDiv.addEventListener("click", () => {
      // Take further actions here, using categoryId
      console.log(`Clicked on category with ID: ${categoryId}`);
    });

    categoriesContainer.appendChild(categoryDiv);
  };
}




// Call the function with the received data


function requestLandingDate(){
  const url=`${url1}?type=3`;
    const formData = new FormData();
    fetch(url,{
        method:"POST",
        body:formData})
    .then(res => res.json())
    .then(data => {
      console.log(typeof data);
      
      createCategoryPamphlets(data);

    })
    console.log(url);
  

}