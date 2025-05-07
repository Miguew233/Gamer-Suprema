console.log("Bem-vindo à Loja Gamer Suprema!");

document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            if (productCard) {
                const productName = productCard.querySelector('h3').textContent;
                alert(`${productName} foi adicionado ao carrinho! (Funcionalidade de carrinho em breve)`);
            } else {
                // Fallback for checkout button or other buttons not in a product card
                console.log("Button clicked, not a product addition.");
            }
            // Futuramente, adicionar lógica de carrinho aqui
        });
    });

    // Removed specific cart link event listener as it now navigates to a page
    // const cartLink = document.getElementById('cart-link');
    // if (cartLink) {
    //     cartLink.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         alert('Página do carrinho em desenvolvimento!');
    //     });
    // }
});