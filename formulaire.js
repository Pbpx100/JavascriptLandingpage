const bookForm = document.getElementById('booking-form')
const emailRegex = /\S+@\S+\.\S+/;
const todayDate = new Date().toISOString().split("T")[0];
const finalModal = document.getElementById("remercie");
var errors = [];
var results = [];
function validate(e) {
    e.preventDefault();
    //Form all the elements
    var elements = bookForm.elements;
    for (let i = 0; i < elements.length; i++) {
        //creating variables for all the elemnts of the form
        var element = elements[i];
        //Getting the parent container of the inputs to show error
        var divContainer = element.parentElement
        //switiching the elements by type
        switch (element.type) {
            case 'text':
                let texto = element.value.trim();
                if (element.id === 'prenom' || element.id === 'nom') {
                    if (texto.length <= 2) {
                        divContainer.setAttribute('data-error-visible', 'true');
                        errors[element.name] += ' Error input ' + element.name
                    } else {
                        divContainer.removeAttribute('data-error-visible', 'true');
                        delete errors[element.name]
                    }
                }
                break;

            case 'email':
                if (!element.value.match(emailRegex)) {
                    divContainer.setAttribute('data-error-visible', 'true');
                    errors[element.name] += ' Error input ' + element.name
                } else {
                    divContainer.removeAttribute('data-error-visible', 'true');
                    delete errors[element.name]
                }
                break;

            case 'date':
                var dateSelect = new Date(element.value);
                if (dateSelect == 'Invalid Date' || dateSelect.toISOString().split("T")[0] > todayDate) {
                    divContainer.setAttribute('data-error-visible', 'true');
                    errors[element.name] += ' Error input ' + element.name
                } else {
                    divContainer.removeAttribute('data-error-visible', 'true');
                    delete errors[element.name]
                }
                break;

            case 'number':
                var numValue = parseFloat(element.value);
                if (isNaN(numValue) || numValue <= 0 || numValue >= 20) {
                    divContainer.setAttribute('data-error-visible', 'true');
                    errors[element.name] += ' Error input ' + element.name
                } else {
                    divContainer.removeAttribute('data-error');
                    delete errors[element.name]
                }
                break;

            case 'radio':
                var radioGropup = bookForm[element.name];
                var radioChecked = Array.from(radioGropup).some(function (radio) {
                    if (radio.checked) {
                        return radio.checked
                    }
                });
                if (!radioChecked) {
                    divContainer.setAttribute('data-error-visible', 'true');
                    errors[element.name] += ' Error input ' + element.name
                } else {
                    divContainer.removeAttribute('data-error-visible', 'true');
                    delete errors[element.name]
                }
                break;

            case 'checkbox':
                var errorCheck = divContainer.querySelector(".error")
                if (element.id == 'checkbox1') {
                    if (!element.checked) {
                        errorCheck.setAttribute('data-error-visible', 'true');
                        errors[element.name] += ' Error input ' + element.name
                    } else {
                        errorCheck.removeAttribute('data-error-visible', 'true');
                        delete errors[element.name]
                    }
                }
                if (element.id == 'checkbox2') {
                    if (element.checked) {
                        results += element.value + ' '
                    }
                }
                break;
        }
    }
    if (Object.keys(errors).length > 0) {
        console.log('erreurs de validation: ', errors);
    } else {
        bookForm.style.display = 'none';
        finalModal.style.display = 'flex';
    }
}
