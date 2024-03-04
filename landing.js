const url1 = "https://script.google.com/macros/s/AKfycbyFH-EY4rETGaSqzgEJfHWPHwcSMtsLaUk-e9wDEEi5Zy1DjfuXm-NGVP5BWdSGmMh7/exec"







  window.onload = function() {
    document.getElementById('loading').style.display = 'block';
    requestLandingData();
    const menuBtn = document.getElementById('menuIconContainer');
const menu = document.getElementById('menuContainer');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
    menuBtn.addEventListener('click', () => {
      menu.style.display = 'block';
      overlay.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', () => {
      menu.style.display = 'none';
      overlay.style.display = 'none';
    });
    overlay.addEventListener("click",()=>{
      menu.style.display = 'none';
      overlay.style.display = 'none';
    })
    
  };
 




function createCategoryPamphlets(data) {
  const categoriesContainer = document.getElementById("categories");
  document.getElementById('loading').style.display = 'none';
  
  for (let i = 1; i < data.length; i++) {
    const category = data[i];
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
    categoryDiv.id=categoryId;

    categoryDiv.addEventListener("click", () => {
      // Take further actions here, using categoryId
      console.log(`Clicked on category with ID: ${categoryId}`);
    });

    categoriesContainer.appendChild(categoryDiv);
  };
}


        










// Call the function with the received data


function requestLandingData(){
  const url=`${url1}?type=3`;
    const formData = new FormData();
    fetch(url,{
        method:"POST",
        body:formData})
    .then(res => res.json())
    .then(data => {
      console.log(data);
      createCategoryPamphlets(data.categories);
      buildCategoryMenu(data.subCategoriesStructure);
      {






      }
      

    })
    console.log(url);
}
// build menu

function buildCategoryMenu(menublocks){
  const categoryMenu = document.getElementById('menuContainer');
  
menublocks.forEach(items =>{
  items.forEach(item=>{
var block = buildMenuBlock(item);
  addedblock =document.getElementById("lic"+item[0]);
  if(addedblock != null){
    
    parentofaddedblock = addedblock.parentNode;
    addedblock.remove();
    parentofaddedblock.appendChild(block);   
    showMore(item[0]);
    
    

  }else{
    categoryMenu.appendChild(block);
    const headcontainer = document.getElementById("hc"+item[0]);
    headcontainer.removeAttribute("class");
    headcontainer.classList.add("mh");
  }



  })
})
}
function showMore(item){
  const sm = document.createElement("div");
  const listitem = document.getElementById("hc"+item);
  
  console.log("listitem"+listitem.innerHTML);
  const listitemcontainer = document.getElementById("lc"+item);
  listitemcontainer.classList.add("hide");
  
  

  sm.id = "sm"+item;
  sm.textContent = "Show More";
  sm.classList.add("sm");
  listitem.appendChild(sm);
  sm.addEventListener("click",()=>{
    listitemcontainer.classList.toggle("hide");
    listitem.classList.toggle("dark");
  });
  
}

function buildMenuBlock(blockData){
  const cc = document.createElement('div');
  const htc = document.createElement('div');
  const hc = document.createElement('div');
  const lc = document.createElement('div');
 

  
  // for headings
  cc.id = "cc"+blockData[0];
  htc.id = "htc"+blockData[0];
  htc.textContent = blockData[1];
  hc.id = "hc"+blockData[0];
  lc.id = "lc"+blockData[0];
  cc.classList.add("cc");
  lc.classList.add("lc");
  htc.classList.add("lit");
  hc.classList.add("lic");
  htc.addEventListener("click",()=>{
    console.log(htc.id);

  });

  hc.appendChild(htc);
  cc.appendChild(hc);

  // for list
  for(var i = 2,j=3;j<blockData.length;i+=2,j+=2){
    
    const lic = document.createElement('div');
    const lit = document.createElement('div');
    
    
    lic.id = "lic"+blockData[i];
    lit.id = "lit"+blockData[i];
    lit.textContent = blockData[j];
    lit.classList.add("lit");
    lic.classList.add("lic");
    lic.appendChild(lit);
    lc.appendChild(lic);
    lic.addEventListener("click",()=>{
      console.log(lic.id);

    });
    
  }
  
  cc.appendChild(lc);
 
  return cc;
}

