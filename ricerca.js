function cercaLibri() {
    const q = document.getElementById("cerca").value;
    const url = `https://openlibrary.org/search.json?author=${q}`;

    fetch(url)
        .then(r => r.json())
        .then(data => {
            let html = "<h3>Risultati:</h3>";

            data.docs.slice(0, 5).forEach(libro => {
                html += `<p><strong>${libro.title}</strong> (${libro.first_publish_year})</p>`;
            });

            document.getElementById("risultati").innerHTML = html;
        });

}

