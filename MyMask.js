export const numberMask = ({form, input, always = false}) => {
    let phoneMask = {
        mask: "+7 (___) ___-__-__",
        lastNumber: ''
    };
    let phoneInput = form.querySelector(input);

    always ? phoneInput.value = phoneMask.mask : phoneInput.value = '';

    phoneInput.addEventListener('focus', (e) => {
        e.target.value = phoneMask.mask;
    });
    phoneInput.addEventListener('click', (e) => {
        e.target.setSelectionRange(phoneMask.mask.indexOf('_'), phoneMask.mask.indexOf('_'));
    });
    phoneInput.addEventListener('keydown', (e) => {

        if (e.key == "Backspace" && phoneMask.lastNumber != "(") {
            e.preventDefault();
            phoneMask.mask = phoneMask.mask.split('');
            let indexLastNumber = phoneMask.mask.lastIndexOf(phoneMask.lastNumber);

            for (let i = indexLastNumber - 1; i > 0; i--) {
                phoneMask.lastNumber = phoneMask.mask[i];
                if (phoneMask.lastNumber == '-' || phoneMask.lastNumber == ' ' || phoneMask.lastNumber == ')') {
                    continue;
                } else {
                    break;
                }
            }
            phoneMask.mask[indexLastNumber] = '_';
            phoneMask.mask = phoneMask.mask.join('');

        } else if (e.key != undefined && RegExp(/_/).test(phoneMask.mask) && (e.key).replace(/([^\d]|\,)/gi, '') != '') {
            phoneMask.mask = phoneMask.mask.replace(/_/, e.key);
            phoneMask.lastNumber = e.key;
        }
        setTimeout(() => {
            e.target.value = phoneMask.mask;
            e.target.setSelectionRange(phoneMask.mask.indexOf('_'), phoneMask.mask.indexOf('_'));
        });
    });
    form.addEventListener('submit', () => {
        phoneMask.mask = "+7 (___) ___-__-__";
    });
};


