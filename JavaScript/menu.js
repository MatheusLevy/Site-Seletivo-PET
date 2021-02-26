const navSlide = () =>{       /*Função anonima pra fazer o slide do menu quando for clicado */
    const linemenu = document.querySelector('.line-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    linemenu.addEventListener('click',()=>{
        
        nav.classList.toggle('nav-active'); // Abrir menu
        
        navLinks.forEach((link, index) =>{
            /*Se ja tiver tiver animado reseta a animaçõa e se tiver sem animação coloca animação*/
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.55}s`
            }
           
            /* Fazer index/5 vai nos dar um delay diferente pra cada link de forma crescente. */
        });
        
        linemenu.classList.toggle('bar');

    });

    
}


const app = () =>{
    navSlide();
} 

app();