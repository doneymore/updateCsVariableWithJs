const inputs = document.querySelectorAll("input");

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("change", handleUpdates);
    inputs[i].addEventListener("mousemove", handleUpdates);
}

function handleUpdates(){
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}