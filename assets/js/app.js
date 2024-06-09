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
