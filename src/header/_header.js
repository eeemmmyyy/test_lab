const jsonData = {
    "data": [
        "Адвокат",
        "Апелляция",
        "Банкротство",
        "Взыскание",
        "Договор",
        "Иск",
        "Наследство",
        "Обжалование",
        "Расторжение",
        "Судебное заседание",
        "Уголовное дело",
    ]
};

const searchInput = document.getElementById('searchInput');
const suggestionsContainer = document.getElementById('suggestions');

function filterSuggestions(query) {
    return jsonData.data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

searchInput.addEventListener('input', function () {
    const query = this.value.trim();
    const suggestions = filterSuggestions(query);
    if (suggestions.length > 0) {
        suggestionsContainer.innerHTML = '';
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            li.addEventListener('click', function () {
                searchInput.value = suggestion;
                suggestionsContainer.style.display = 'none';
            });
            suggestionsContainer.appendChild(li);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
});

document.addEventListener('click', function (event) {
    if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
        suggestionsContainer.style.display = 'none';
    }
});