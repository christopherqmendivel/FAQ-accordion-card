// Variables
const arrow = document.querySelectorAll('.arrow');


arrow.forEach(arrowshow => {
    arrowshow.addEventListener('click', (e) => {
        
        // Variables
        let parr = e.target.parentElement.nextElementSibling.children[0];
        let titlebold = e.target.previousElementSibling;

        
        if(!parr.classList.contains('mostrar')) {
            parr.classList.add('mostrar');
            titlebold.style.fontWeight = "bolder";
            e.target.style.transform= "scaleY(-1)";
        } else {
            parr.classList.remove('mostrar');
            e.target.style.transform= "scaleY(1)";
            titlebold.style.fontWeight = "normal";
            
        }
    });
})