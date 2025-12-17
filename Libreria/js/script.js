// ========================================
// BASE DE DATOS DE PRODUCTOS
// ========================================

const products = [
    {
        id: 1,
        name: "Don Quijote de la Mancha",
        price: 15.99,
        image: "📕",
        description: "Clásico de la literatura española",
        summary: "La historia del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza en busca de aventuras.",
        summaryPage: "resumenes/quijote.html",
        pdfFile: "quijote.html"
    },
    {
        id: 2,
        name: "Los tres mundos",
        price: 18.50,
        image: "📗",
        description: "Autor: Santiago Posteguillo",
        summary: "Los tres mundos de Santiago Posteguillo es la culminación de su trilogía sobre Julio César, ambientada en el 58 a.C.",
        summaryPage: "resumenes/tres_mundos.html",
        pdfFile: "tres_mundos.html"
    },
    {
        id: 3,
        name: "Misión en París (Capitán Alatriste 8)",
        price: 12.99,
        image: "📘",
        description: "Autor: Arturo Pérez-Reverte",
        summary: "Misión en París, la octava entrega de la saga del Capitán Alatriste, sitúa a Diego Alatriste e Íñigo Balboa en la peligrosa París de 1625",
        summaryPage: "resumenes/mision_paris.html",
        pdfFile: "mision_paris.html"
    },
    {
        id: 4,
        name: "El loco Dios en el fin del mundo",
        price: 9.99,
        image: "📙",
        description: "Autor: Javier Cercas",
        summary: "El loco de Dios en el fin del mundo de Javier Cercas es una novela sin ficción que narra su inusual viaje con el Papa Francisco a Mongolia",
        summaryPage: "resumenes/loco_dios.html",
        pdfFile: "loco_dios.html"
    },
    {
        id: 5,
        name: "La asistenta",
        price: 16.99,
        image: "📔",
        description: "Autor: Freida McFadden",
        summary: "La asistenta de Freida McFadden es un thriller psicológico adictivo sobre Millie, una joven con antecedentes penales que consigue trabajo como empleada doméstica para una familia rica",
        summaryPage: "resumenes/aistenta.html",
        pdfFile: "aistenta.html"
    },
    {
        id: 6,
        name: "Reconciliación. Memorias",
        price: 14.50,
        image: "📖",
        description: "Autor: Juan Carlos I",
        summary: "Escrita a corazón abierto y sin concesiones, la obra navega entre los dos exilios que marcan el principio y final de su vida.",
        summaryPage: "resumenes/reconciliacion.html",
        pdfFile: "reconciliacion.html"
    }
];
// ========================================
// BUSCADOR DE LIBROS
// ========================================

function buscarLibro() {
    const input = document.getElementById("busqueda");
    const resultados = document.getElementById("resultados");
    const query = input.value.toLowerCase();

    if (query === "") {
        resultados.innerHTML = "";
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    if (filteredProducts.length === 0) {
        resultados.innerHTML = "<p>No se encontraron libros.</p>";
        return;
    }

    resultados.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <figure>
                <div class="emoji">${product.image}</div>
                <figcaption>${product.name}</figcaption>
            </figure>

            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">€${product.price.toFixed(2)}</p>

            <!-- Botones de acción -->
            <div class="product-actions">
                <a href="${product.summaryPage}" 
                   class="summary-link" 
                   target="_blank">
                    📄 Ver Resumen
                </a>

                <button class="download-btn" 
                        onclick="downloadPDF('${product.pdfFile}', '${product.name}')">
                    📥 Visualizar PDF
                </button>

                <button class="add-to-cart-btn" 
                        onclick="addToCart(${product.id})">
                    🛒 Añadir al Carrito
                </button>
            </div>
        </div>
    `).join('');
}

// Carrito de compras
let cart = [];


// ========================================
// INICIALIZAR LA TIENDA
// ========================================

function initStore() {
    renderProducts();
    updateCartDisplay();
}

//=========================================
// SLIDER DE PRODUCTOS
//=========================================
setInterval(() => {
    mover(1);
}, 3000);

// ========================================
// RENDERIZAR PRODUCTOS CON FIGURE
// ========================================

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <figure>
                <div class="emoji">${product.image}</div>
                <figcaption>${product.name}</figcaption>
            </figure>
            
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">€${product.price.toFixed(2)}</p>
            
            <!-- Botones de acción -->
            <div class="product-actions">
                <a href="${product.summaryPage}" 
                   class="summary-link" 
                   target="_blank">
                    📄 Ver Resumen
                </a>
                
                <button class="download-btn" 
                        onclick="downloadPDF('${product.pdfFile}', '${product.name}')">
                    📥 Visualizar PDF
                </button>
                
                <button class="add-to-cart-btn" 
                        onclick="addToCart(${product.id})">
                    🛒 Añadir al Carrito
                </button>
            </div>
        </div>
    `).join('');
}


// ========================================
// FUNCIÓN: VISUALIZAR EL PDF
// ========================================

function downloadPDF(pdfFile, bookName) {
    // En lugar de descargar, ABRIR el archivo HTML
    const fileName = pdfFile.endsWith('.pdf') ? 
                     pdfFile.replace('.pdf', '.html') : 
                     pdfFile;
    const filePath = `pdfs/${fileName}`;
    
    // Abrir en nueva pestaña
    window.open(filePath, '_blank');
    
    // Mostrar notificación
    showNotification(`📄 Abriendo resumen de "${bookName}"`);
    console.log(`Abriendo PDF simulado: ${filePath}`);
}


// ========================================
// AÑADIR AL CARRITO
// ========================================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    showNotification(`✅ ${product.name} añadido al carrito`);
}


// ========================================
// ACTUALIZAR CANTIDAD
// ========================================

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}


// ========================================
// ELIMINAR DEL CARRITO
// ========================================

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}


// ========================================
// ACTUALIZAR VISUALIZACIÓN DEL CARRITO
// ========================================

function updateCartDisplay() {
    // Actualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
    
    // Actualizar items
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Tu carrito está vacío</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="emoji">${item.image}</div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="price">€${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            </div>
        `).join('');
    }
    
    // Actualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = `€${total.toFixed(2)}`;
}


// ========================================
// TOGGLE CARRITO
// ========================================

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}


// ========================================
// FINALIZAR COMPRA
// ========================================

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
    const itemsList = cart.map(item => `- ${item.name} x${item.quantity}`).join('\n');
    
    alert(`¡Gracias por tu compra!\n\nProductos:\n${itemsList}\n\nTotal: €${total}`);
    
    cart = [];
    updateCartDisplay();
    toggleCart();
}


// ========================================
// MOSTRAR NOTIFICACIÓN
// ========================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


// ========================================
// ANIMACIONES CSS
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


// ========================================
// INICIALIZAR AL CARGAR LA PÁGINA
// ========================================

document.addEventListener('DOMContentLoaded', initStore);

console.log('📚 Librería Luz cargada correctamente');
console.log('✅ Funciones disponibles: Ver resumen, Descargar PDF, Añadir al carrito');