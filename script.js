// Node list (array-like!). 
const labels = document.querySelectorAll('label')

function closeExpanded() {
    
}

//event listen to click
for (let label of labels) {
    label.addEventListener('click',closeExpanded, false);
}