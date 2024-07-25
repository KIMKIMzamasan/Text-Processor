function processFile() {
    const fileInput = document.getElementById('fileInput');
    const oldWord = document.getElementById('oldWord').value;
    const newWord = document.getElementById('newWord').value;

    if (!fileInput.files.length || !oldWord || !newWord) {
        alert('Please provide all inputs');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const text = event.target.result;
        const modifiedText = text.replace(new RegExp(oldWord, 'g'), newWord);
        const blob = new Blob([modifiedText], { type: 'text/plain' });
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'modified.txt';
        downloadLink.style.display = 'block';
        downloadLink.textContent = 'Download Modified File';
    };

    reader.readAsText(file);
}
