const collapsibles = document.getElementsByClassName("collapsible");


for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function(event) {
    const current = this;


    for (let i = 0; i < collapsibles.length; i++) {
      if ((collapsibles[i] !== current) && (collapsibles[i].classList.contains("active")) && (current.id !== "btn-terms") && (current.id !== "btn-actions") && (current.id !== "btn-rules")) {
        collapsibles[i].classList.remove("active");
        collapsibles[i].nextElementSibling.style.display = "none";
      }
    }

    
    if (!current.nextElementSibling.contains(event.target)) {
      current.classList.toggle("active");

      const content = current.nextElementSibling;
  
      if (content.style.display === "flex") {
        content.style.display = "none";
      } else {
        content.style.display = "flex";
      }
    }
  });
}



