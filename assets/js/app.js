$(".js-example-basic-multiple-limit").select2({
    maximumSelectionLength: 2, placeholder: "اختر من القائمة", allowClear: true, width: '100%'
});

let currentStep = 0;
const tabs = document.querySelectorAll('.progress');
function showStep(step) {
    const contents = document.querySelectorAll('.info');
    contents.forEach((c, index) => {
         activeTab(index)
        if (index === step) {
            c.classList.remove('d-none');
        } else {
            c.classList.add('d-none');
        }
    });
    if (step > 0) document.getElementById('prevBtn').style.display = step === 0 ? 'none' : 'inline';
    document.getElementById('nextBtn')? document.getElementById('nextBtn').innerText = step === contents.length - 1 ? 'حفظ' : 'التالى ' : '';
}

function activeTab(index) {
    if (index <= currentStep) {
        tabs[index].classList.add('active')
    } else {
        tabs[index].classList.remove('active')
    }
}

function nextStep() {

    const steps = document.querySelectorAll('.progress');
    console.log(currentStep, steps.length, 'ppppppppppp')

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

// Initialize the first step
showStep(currentStep);
// script.js
document.getElementById('add_custom_filter').addEventListener('click', function(event) {
    // event.preventDefault();
    addFilterRow();
});

function addFilterRow() {
    const container = document.getElementById('filterContainer');
    const existingRow = document.querySelector('.filter-row');
    const newRow = existingRow.cloneNode(true);

    // Clear the inputs and selects in the cloned row if needed
    const inputs = newRow.querySelectorAll('input');
    inputs.forEach(input => input.value = '');

    const selects = newRow.querySelectorAll('select');
    selects.forEach(select => select.selectedIndex = 0);

    // Remove the event listener from the cloned 'add_custom_filter' button to avoid duplicate event bindings
    const addButton = newRow.querySelector('#add_custom_filter');
    addButton.removeEventListener('click', handleAddFilterClick);
    // Remove the event listener and elements from the cloned 'add_custom_filter' button
    if (addButton) {
        addButton.parentElement.removeChild(addButton);
    }

    const searchButton = newRow.querySelector('.search-btn');
    if (searchButton) {
        searchButton.parentElement.removeChild(searchButton);
    }

    // Add the remove button
    const removeButton = document.createElement('a');
    removeButton.href = "#";
    removeButton.className = "remove-btn";
    removeButton.innerHTML = '<img height="20" src="assets/images/remove_icon.png">';
    removeButton.addEventListener('click', function(event) {
        event.preventDefault();
        removeFilterRow(this);
    });
    const filterIconsSection = newRow.querySelector('.filter-icons-section');
    filterIconsSection.appendChild(removeButton);

    // Append the new row to the container
    container.appendChild(newRow);
}

function handleAddFilterClick(event) {
    event.preventDefault();
    addFilterRow();
}

// Ensure the cloned 'add_custom_filter' button has the click event listener
// document.addEventListener('click', function(event) {
//     if (event.target && event.target.id === 'add_custom_filter') {
//         handleAddFilterClick(event);
//     }
// });
