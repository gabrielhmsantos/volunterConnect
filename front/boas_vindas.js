document.addEventListener("DOMContentLoaded", function () {
    // LISTA DE PROJETOS SIMULAÇÃO
    const projects = [
        { id: 1, name: 'Cidadania Jovem' },
        { id: 2, name: 'AMAI' },
        { id: 3, name: 'Cultive Sonhos' },
        { id: 4, name: 'Canoa para Todos' },
        { id: 5, name: 'SOS Mata Atlântica' },
        { id: 6, name: 'Amigos do Bem' },
        { id: 7, name: 'Arca' },
        { id: 8, name: 'UNICEF' },
        { id: 9, name: 'Médicos Sem Fronteiras' },
        { id: 10, name: 'Cruz Vermelha' },
        { id: 11, name: 'Cão sem Dono' },
        { id: 12, name: 'Coração' }
    ];

    const projectsList = document.getElementById('projectsList');


    projects.forEach((project) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');

        const projectName = document.createElement('span');
        projectName.textContent = project.name;

        const selectButton = document.createElement('button');
        selectButton.textContent = 'Selecionar';
        selectButton.classList.add('btn', 'btn-primary');

        li.appendChild(projectName);
        li.appendChild(selectButton);

        // Adicionar um evento de clique para o botão de seleção
        selectButton.addEventListener('click', function () {
            // Execute alguma ação quando o botão de seleção for clicado
            alert(`Projeto selecionado: ${project.name}`);
        });

        projectsList.appendChild(li);
    });
});
