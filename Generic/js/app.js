document.addEventListener('DOMContentLoaded', function() {
    console.log('Vibe Coding Lesson 13 loaded.');
    const form = document.getElementById('demo-form');
    const userInput = document.getElementById('user-input');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = userInput.value;
        output.textContent = 'You entered: ' + value;
        // Example fetch call (replace URL with your API endpoint)
        /*
        fetch('https://api.example.com/echo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input: value })
        })
        .then(res => res.json())
        .then(data => {
            output.textContent = data.response;
        })
        .catch(err => {
            output.textContent = 'Error: ' + err;
        });
        */
    });
});
