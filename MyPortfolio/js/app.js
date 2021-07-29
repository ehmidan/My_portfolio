const skillssection = document.getElementById('skills-section');
const progressbars = document.querySelectorAll('.progressbar');

function showprogress(){
    progressbars.forEach(progressBar=>{
        const value = progressBar.dataset.progress;
        progressBar.style.opacity= 1 ;
        progressBar.style.width= `${value}%`;

    })
}
function hideprogress(){
    progressbars.forEach(p=>{
        
        p.style.opacity= 0 ;
        p.style.width=0;

    }) 
}

window.addEventListener('scroll',()=>{
    const sectionPos = skillssection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if(sectionPos<screenPos){
       showprogress()
    }else{
        hideprogress()
    }
})