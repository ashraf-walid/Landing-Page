
// Start OUR SKILLS
const progress = document.querySelectorAll(".skill .prog span");
const section = document.querySelector(".our-skills");

window.addEventListener('scroll', function() {
    if (section && window.scrollY >= section.offsetTop - 50){
        progress.forEach((span)=>{
            if (span && span.dataset.width) {
                span.style.width = span.dataset.width;
            }
        })
    }
});

// Start OUR Awesome Stats
const nums = document.querySelectorAll(".stats .num");
const statSection = document.querySelector(".stats");
let started = false;

// Initialize to 0 for safety
nums.forEach((el) => { el.textContent = 0; });

window.addEventListener('scroll', function() {
    if (statSection && window.scrollY >= statSection.offsetTop - 250){
        if(!started){
            nums.forEach((el)=>{
                const goal = Number(el.dataset.num) || 0; 
                const duration = 2000; // ms
                if (goal <= 0) return;
                const stepTime = Math.max(10, Math.floor(duration / goal));
                const count = setInterval(() => {   
                    const current = Number(el.textContent) || 0;
                    el.textContent = current + 1;
                    if (Number(el.textContent) >= goal){
                        el.textContent = goal;
                        clearInterval(count);
                    }
                }, stepTime)
            })
        }
        started = true;
    }
});

// JS-based lazy loading for images (fallback if not set in HTML)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img:not([loading])').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});




