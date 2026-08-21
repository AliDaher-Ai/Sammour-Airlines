let currentIndex = 0;

function slideLeft() {
    const sliderContent = document.querySelector('.slider-content');
    const images = document.querySelectorAll('.slider-image');
    
    const imageWidth = images[0].offsetWidth + 15; 
    const totalImages = images.length;

    if(currentIndex == totalImages){
        return;
    }

    currentIndex++;

    sliderContent.style.transform = `translateX(-${(currentIndex * imageWidth)/2}px)`;
}

function slideRight() {
    const sliderContent = document.querySelector('.slider-content');
    const images = document.querySelectorAll('.slider-image');
    
    const imageWidth = images[0].offsetWidth + 15;
    const totalImages = images.length;

    if(currentIndex == 0){
        return;
    }

    currentIndex--;

    sliderContent.style.transform = `translateX(-${(currentIndex * imageWidth)/2}px)`;
}

document.addEventListener('DOMContentLoaded',function(){
const Today = new Date();
const Year = Today.getFullYear();
const Month = String(Today.getMonth() + 1).padStart(2, '0');
const Day = String(Today.getDate()).padStart(2, '0');
const FormattedDate=`${Year}-${Month}-${Day}`;
document.getElementById('upToDate').setAttribute('min',FormattedDate);  
});

document.addEventListener('DOMContentLoaded',function(){
  upToDateInput=document.getElementById('upToDate');
  upToDateDependent=document.getElementById('UpToDate');
  const Initial=upToDateInput.value;
  if(Initial===""){
    upToDateDependent.setAttribute('disabled', true);
  }
  upToDateInput.addEventListener('change', function () {
   const Today = new Date(document.getElementById('upToDate').value);
   if (!isNaN(Today)){
    Today.setDate(Today.getDate()+1);
    const Year = Today.getFullYear();
    const Month = String(Today.getMonth() + 1).padStart(2, '0');
    const Day = String(Today.getDate()).padStart(2, '0');
    const FormattedDate=`${Year}-${Month}-${Day}`;
    upToDateDependent.removeAttribute('disabled');
    document.getElementById('UpToDate').setAttribute('min',FormattedDate);
   }
  });
});

function openModal() {
  const modal = document.getElementById('Message');
  const inputs = document.getElementsByClassName('optionbox');
  const radioButtons = document.getElementsByName('return-oneway');
  let errorFlag = false;
  let isReturnOneway = false;


  console.log("Checking inputs:");
  for (let i = 0; i < inputs.length; i++) {
      console.log(`Input ${i + 1}:`, inputs[i].value);
      if (inputs[i].value === "") {
          errorFlag = true;
          break;
      }
  }

  
  console.log("Checking radio buttons:");
  let checkedCount = 0;
  for (let i = 0; i < radioButtons.length; i++) {
      console.log(`Radio ${i + 1}:`, radioButtons[i].checked);
      if (radioButtons[i].checked) {
          checkedCount++;
      }
  }
  isReturnOneway = checkedCount === 1; 

  
  console.log("errorFlag:", errorFlag);
  console.log("isReturnOneway:", isReturnOneway);

  
  if (errorFlag || !isReturnOneway) {
      document.getElementById('name-error').style.display = "block";
  } else {
      document.getElementById('name-error').style.display = "none";
      modal.style.display = "flex";
  }
}

      function closeModal() {
      const modal = document.getElementById('Message');
      modal.style.display = 'none';
     
      
    }