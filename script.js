document.addEventListener('DOMContentLoaded', function() {
    var addCareButton = document.getElementById('addCareButton');
    var clearFormButton = document.getElementById('clearFormButton');
    var newCareButton = document.getElementById('newCareButton');

    if (addCareButton) {
        addCareButton.addEventListener('click', addPetCare);
    }

    if (clearFormButton) {
        clearFormButton.addEventListener('click', clearForm);
    }

    if (newCareButton) {
        newCareButton.addEventListener('click', addNewCare);
    }
});

function addPetCare() {
    var petName = document.getElementById('petName').value;
    var feeding = document.getElementById('feeding').value;
    var exercise = document.getElementById('exercise').value;
    var healthcare = document.getElementById('healthcare').value;

    if (!petName || !feeding || !exercise || !healthcare) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var petCareList = document.getElementById('petCareList');

    var petCareItem = document.createElement('div');
    petCareItem.classList.add('pet-care-item');
    petCareItem.innerHTML = '<strong>' + petName + '</strong>' +
                            '<p><strong>Alimentação:</strong> ' + feeding + '</p>' +
                            '<p><strong>Exercício:</strong> ' + exercise + '</p>' +
                            '<p><strong>Cuidados de Saúde:</strong> ' + healthcare + '</p>';

    petCareList.appendChild(petCareItem);

    // Limpar os campos do formulário após adicionar o cuidado
    clearForm();
}

function addNewCare() {
    // Remover a última entrada da lista, se houver
    var petCareList = document.getElementById('petCareList');
    var lastCareItem = petCareList.lastChild;

    if (lastCareItem) {
        petCareList.removeChild(lastCareItem);
    }

    // Limpar os campos do formulário para permitir a entrada de um novo cuidado
    clearForm();
}

function printPage() {
    var petCareItems = document.querySelectorAll('.pet-care-item');
    if (petCareItems.length === 0) {
        alert('Nenhum cuidado registrado para imprimir.');
        return;
    }

    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Relatório de Cuidados com o Pet</title>');
    printWindow.document.write('<link rel="stylesheet" href="styles.css" type="text/css">');
    printWindow.document.write('</head><body>');

    printWindow.document.write('<h1>Relatório de Cuidados com o Pet</h1>');
    printWindow.document.write('<ul>');
    petCareItems.forEach(function(item) {
        printWindow.document.write('<li>' + item.innerHTML + '</li>');
    });
    printWindow.document.write('</ul>');

    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();

    // Limpar o histórico após imprimir
    clearHistory();
}

function clearForm() {
    document.getElementById('petCareForm').reset();
}

function clearHistory() {
    // Substituir a URL atual por uma nova URL para evitar adicionar a página atual ao histórico
    history.pushState(null, null, window.location.href);
}
