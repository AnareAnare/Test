(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('form');

        async function sendForm(data) {
            return await fetch(`http://localhost:5500/Form/?${data}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
        }

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
                ...memo,
                [key]: value,
            }), {});
            const jsonData = JSON.stringify(data);
            document.getElementById('json').innerHTML = jsonData;
            e.target.reset();
            const { status, error } = await sendForm(jsonData);
            if (status === 200) {
                alert('Форма отправлена');
              } else {
                alert(error.message)
              }
        });
    });
})();