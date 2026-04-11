const elements=document.querySelectorAll(".text, .img, .card");
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});
elements.forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () =>{
    let current="";
    sections.forEach(section =>{
        const sectionTop=section.offsetTop-100;
        if (scrollY>=sectionTop){
            current=section.getAttribute("id");
        }
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if (link.getAttribute("href") ==="#"+ current){
            link.classList.add("active");
        }
    });
});

const img=document.querySelector(".img img");
img.addEventListener("mousemove", (e)=>{
    const rect=img.getBoundingClientRect();
    const x=e.clientX-rect.left;
    const y=e.clientY-rect.top;

    img.computedStyleMap.transform= `
    rotateX(${-(y - rect.height/2)/20}deg)
    rotateY(${(x-rect.width/2)/20}deg)
    scale(1.05)
    `;
});
img.addEventListener("mouseleave", ()=>{
    img.computedStyleMap.transform="rotateX(0) rotateY(0) scale(1)";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});

const btn=document.querySelector("button");
btn.addEventListener("click", ()=>{
    btn.innerText="Message envoye";
    btn.style.backgroundColor="#00bcd4"
});

const revealElements=document.querySelectorAll('.comp-card, .time, .annee, .container h1, .container em');
function checkReveal(){
    const windowHeight=window.innerHeight;
    const revealPoint=150;
    revealElements.forEach(el=>{
        const elementTop=el.getBoundingClientRect().top;
        if (elementTop<windowHeight-revealPoint){
            el.classList.add('revealed');
        }else{

        }
    })
}

const compCards=document.querySelectorAll(".comp-card");
compCards.forEach(card=>{
    card.addEventListener("mouseenter", ()=>{
        card.style.transform="scale(1.02";
        card.style.transition="transform 0.2s ease";
    });
    card.addEventListener("mouseleave", ()=>{
        card.style.transform="scale(1);"
    });
});

const annees=document.querySelectorAll(".annee");
annees.forEach(annee=>{
    annee.addEventListener("mouseenter", function(){
        const dateEl=this.querySelector(".date");
        if (dateEl){
            this.style.cursor="pointer";
        }
    });
});

