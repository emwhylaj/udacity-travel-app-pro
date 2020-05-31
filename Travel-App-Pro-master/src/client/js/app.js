import { dataFromApi } from './import';
import { getFormDetails } from './validation';
import { updateUI } from './UI';

export const mainFunction = () => {

    const submitButton = document.getElementById('generate');
    submitButton.addEventListener('click', (event)=> {
        event.preventDefault();

        const tripDetails = getFormDetails();

        dataFromApi(tripDetails)
            .then(data => {
                updateUI(data);
            })
    })
}