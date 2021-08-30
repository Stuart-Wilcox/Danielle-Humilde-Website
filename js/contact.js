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

    const showError = () => {
        errorText().classList.remove('hidden');
    };

    sendButton().addEventListener('click', async () => {
        // disable the form
        disableForm();

        try {
            // read the inputs from the page
            const messageBodyText = messageBody().value;
            const senderNameText = senderName().value;
            const senderEmailText = senderEmail().value;
    
            const mailToLink = `mailto:d.humilde@outlook.com?subject=Hello%20Danielle&body=${messageBodyText}%0A%0A${senderNameText}%0A${senderEmailText}`;
    
            const anchorTag = document.createElement('a');
            anchorTag.setAttribute('style', 'display:none;');
            anchorTag.setAttribute('href', mailToLink);
            document.body.appendChild(anchorTag);
            anchorTag.click();
            document.body.removeChild(anchorTag);

            // clear form after 500ms
            window.setTimeout(() => clearForm(), 500);
        }
        catch (error) {
            showError();
        }
        finally {
            enableForm();
        }
    });

    // hide error when text changes
    messageBody().addEventListener('keydown', () => hideError());
    senderName().addEventListener('keydown', () => hideError());
    senderEmail().addEventListener('keydown', () => hideError());
})();