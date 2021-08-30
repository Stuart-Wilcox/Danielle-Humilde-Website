(function(){
    const url = '/send-email';

    const messageBody = () => document.querySelector('#message-body');
    const senderName = () => document.querySelector('#sender-name');
    const senderEmail = () => document.querySelector('#sender-email');
    const sendButton = () => document.querySelector('#send-button');
    const errorText = () => document.querySelector('#contact-error');

    const disableForm = () => {
        messageBody().setAttribute('disabled', 'true');
        senderName().setAttribute('disabled', 'true');
        senderEmail().setAttribute('disabled', 'true');
        sendButton().setAttribute('disabled', 'true');
    };

    const enableForm = () => {
        messageBody().removeAttribute('disabled');
        senderName().removeAttribute('disabled');
        senderEmail().removeAttribute('disabled');
        sendButton().removeAttribute('disabled');
    };

    const clearForm = () => {
        messageBody().value = '';
        senderName().value = '';
        senderEmail().value = '';
    };

    const hideError = () => {
        errorText().classList.add('hidden');
    };

    sendButton().addEventListener('click', async () => {
        // disable the form
        disableForm();

        // read the inputs from the page
        const message = {
            messageBody: messageBody().value,
            senderName: senderName().value,
            senderEmail: senderEmail().value,
        };

        const payload = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(message),
        }

        try {
            const response = await fetch(url, payload);
            if (response.status !== 200) {
                throw new Error('Failed request');
            }

            clearForm();
        }
        catch (error) {
            // display error message
            errorText().classList.remove('hidden');
        }
        finally {
            // re-enable the form
            enableForm();
        }
    });

    // hide error when text changes
    messageBody().addEventListener('keydown', () => hideError());
    senderName().addEventListener('keydown', () => hideError());
    senderEmail().addEventListener('keydown', () => hideError());
})();