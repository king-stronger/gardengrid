const tabButtons = document.querySelectorAll('.tab-btn');
const galleryLists = document.querySelectorAll('.gallery-list');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Si déjà actif → on ne fait rien
        if (button.classList.contains('active')) return;

        // Retirer active sur tous les boutons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Masquer toutes les listes
        galleryLists.forEach(list => list.classList.remove('show'));

        // Afficher la bonne liste
        const target = button.dataset.tab;
        document.getElementById(target).classList.add('show');
    });
});
