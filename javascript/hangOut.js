document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
        this.style.opacity = '0.4';
        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }
    function handleDrop(e) {
        e.stopPropagation(); // stops the browser from redirecting.
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }

    let items = document.querySelectorAll('.container .box');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('dragend', handleDragEnd, false);
        item.addEventListener('drop', handleDrop, false);
    });
});

var cars = ["BMW", "AUDI", "Mercedes", "Ford", "VW", "Chevrolet"];
var input,output="";

function getStats(){
    var i;
    for (i=0;i<cars.length;i++){
        if (i<5)
            output += (i+1)+". "+cars[i]+";\n";
        else
            output += (i+1)+". "+cars[i]+".";
    }
    input = parseInt(window.prompt(output));
    switch (input){
        case 1: document.getElementById("statRes").innerHTML =
            "<p>1. BMW 8 SERIES GRAND COUPÉ 2020: 3.6s (0-100 kmh)<br>" +
            "2. BMW 750Li 2020: 3.7s(0-100 kmh)<br>" +
            "3. BMW M5 2020: 2.8s (0-100 kmh)<br>" +
            "4. BMW X7 2020: 5s (0-100 kmh)<br>" +
            "5. BMW Z4M 2020: 4s (0-100 kmh)</p>"; break;
        case 2: document.getElementById("statRes").innerHTML =
            "<p>1. AUDI RS7 2020: 3.3s (0-100 kmh)<br>" +
            "2. AUDI Q4 E-TRON 2020: 6.4s (0-100 kmh)<br>" +
            "3. AUDI Q7 2020: 5.6s (0-100 kmh)<br>" +
            "4. AUDI RS6 AVANT 2020: 3.4s (0-100 kmh)</p>"; break;
        case 3: document.getElementById("statRes").innerHTML =
            "<p>1. Mercedes-Benz CLA Coupè: 4.3s (0-100 kmh)<br>" +
            "2. Mercedes-Benz GLE: 4.6s (0-100 kmh)<br>" +
            "3. Mercedes-Benz GLS: 5.2s (0-100 kmh)<br>" +
            "4. BRABUS G-Class: 3.3s (0-100 kmh)<br>" +
            "5. Mercedes AMG GT BLACK SERIES: 2.9s (0-100 kmh)<br>" +
            "6. Mercedes-Benz S-CLASS: 4.6s (0-100 kmh)</p>"; break;
        case 4: document.getElementById("statRes").innerHTML =
            "<p>Ford Mustang GT500 2020: 3.6s (0-100 kmh)</p>"; break;
        case 5: document.getElementById("statRes").innerHTML =
            "<p>Golf 2020: 4.0s (0-100 kmh)</p>"; break;
        case 6: document.getElementById("statRes").innerHTML =
            "<p>Corvette C6 2020: 3.2s (0-100 kmh)</p>"; break;
        default: window.alert("Shtypni numer valid!");
    }
    output="";

}
