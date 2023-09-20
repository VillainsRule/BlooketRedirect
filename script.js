document.querySelector('button').onclick = () => {
    let content = document.querySelector('input').value;
    let hexCode = content.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
    let percented = hexCode.replace(/(.{2})/g, '%$1');
    let code = 'https://id.blooket.com/login?n=%' + percented.slice(1);
    navigator.clipboard.writeText(code);
    document.querySelector('input').value = '';
    alert('Code generated and copied to clipboard.');
};
