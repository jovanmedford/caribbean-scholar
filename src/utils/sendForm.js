export default function sendForm(data) {
    fetch('https://thecaribbeanscholar.activehosted.com/proc.php', {
            method: 'POST',
            body: data,
            mode: 'no-cors'
        })
        .then(response => {
            setTimeout(() => {
                console.log('Success')});
            })
            .catch(error => console.log('request failed', error));
}