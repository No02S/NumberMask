export const numberMask = ({form,input}) =>{
    let phoneMask = {
        mask: "+7 (___) ___ ____",
        lastNumber:''
    };
    form.querySelector(input).addEventListener('focus',(e)=>{
        e.target.value = phoneMask.mask;
    });
    form.querySelector(input).addEventListener('keydown',(e)=>{
        
        if (e.key == "Backspace" && phoneMask.lastNumber != "(") {
            e.preventDefault();
            phoneMask.mask = phoneMask.mask.split('');
            let indexLastNumber = phoneMask.mask.lastIndexOf(phoneMask.lastNumber);

            for( let i = indexLastNumber-1;i>0;i--) {
                console.log('1');
                phoneMask.lastNumber = phoneMask.mask[i];
                if(phoneMask.lastNumber == ' ' ||  phoneMask.lastNumber == ')') {
                    continue;
                } else {
                    break;
                }
            }
            phoneMask.mask[indexLastNumber] = '_';
            phoneMask.mask = phoneMask.mask.join('');

        } else if(e.key != undefined && RegExp(/_/).test(phoneMask.mask) && (e.key).replace(/([^\d]|\,)/gi, '') != '') {
            phoneMask.mask = phoneMask.mask.replace(/_/, e.key);
            phoneMask.lastNumber = e.key;
        }
        setTimeout(()=>{
            e.target.value = phoneMask.mask;
        });
    });
};

