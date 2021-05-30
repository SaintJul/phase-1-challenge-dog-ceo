//console.log('%c HI', 'color: firebrick')
//Object.keys(breeds['message']).length

document.addEventListener("DOMContentLoaded", function(){
    //const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
   fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(JSON => {(JSON), listBreeds(JSON['message'])})

    const container = document.getElementById("dog-image-container")
    const dogBreeds = document.getElementById("dog-breeds")
    const getLi = document.getElementsByTagName('li')
    const selection = document.getElementById("breed-dropdown")
    //const option = selection[]
    //console.log(selection[1].value)

    //const addLi = document.createElement("li")


   // console.log(container)
    for (i = 0; i <= 3;i++){
        const addImg = document.createElement("img")
        container.appendChild(addImg)
    }

   function listBreeds(breeds){ 
       for (const breed in breeds){
           const addLi = document.createElement("li")
           addLi.innerText = breed
           dogBreeds.appendChild(addLi)  
           
           addLi.addEventListener("click", function() {
                addLi.style.color = "tomato"
           }) 

           

        } 
        
        selection.addEventListener("click", function(event){
            const val = event.target.value     
            //console.log(dogBreeds.li) 
            
            while (dogBreeds.hasChildNodes()) {
             dogBreeds.removeChild(dogBreeds.firstChild);
            }
        

            /*for (i = 0; i < (dogBreeds.childNodes).length  ;i++) { 
                plaHolder = i               
                dogBreeds.removeChild(dogBreeds.childNodes[plaHolder])
                console.log((dogBreeds.childNodes).length)
            }*/
            

            
            fetch("https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
            .then(newJSON => {iterate(newJSON['message'])})

            function iterate(list){                
                for (const lis in list){ 
                    const addlis = document.createElement("li")                 
                    if (lis[0] === val){
                    //console.log(lis)                        
                        addlis.innerText= lis
                        dogBreeds.appendChild(addlis)

                        
                        
                    }

                 addlis.addEventListener("click", function() {
                    addlis.style.color = "tomato"
                 }) 
           
                } 
               

            }

                   
             
            
           })


    }
    
    
    


})


