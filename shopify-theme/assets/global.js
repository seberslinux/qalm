// Global JavaScript for the Shopify theme

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileMenu && menuIcon && closeIcon) {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  }
}

// Cart functionality
class CartDrawer {
  constructor() {
    this.cart = null;
    this.cartDrawer = document.querySelector('.cart-drawer');
    this.cartCount = document.querySelector('.cart-count');
    this.init();
  }

  init() {
    this.bindEvents();
    this.loadCart();
  }

  bindEvents() {
    // Add to cart buttons
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-add-to-cart]')) {
        e.preventDefault();
        this.addToCart(e.target);
      }
    });

    // Cart drawer toggle
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-cart-toggle]')) {
        e.preventDefault();
        this.toggleCartDrawer();
      }
    });
  }

  async loadCart() {
    try {
      const response = await fetch('/cart.js');
      this.cart = await response.json();
      this.updateCartCount();
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  }

  async addToCart(button) {
    const form = button.closest('form');
    if (!form) return;

    const formData = new FormData(form);
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      this.loadCart();
      this.showNotification('Product added to cart!');
    } else {
      const error = await response.json();
      this.showNotification('Error adding product to cart', 'error');
    }
  }

  updateCartCount() {
    if (this.cartCount && this.cart) {
      this.cartCount.textContent = this.cart.item_count;
    }
  }

  toggleCartDrawer() {
    if (this.cartDrawer) {
      this.cartDrawer.classList.toggle('open');
    }
  }

  showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 2rem;
      background: ${type === 'error' ? '#dc2626' : '#059669'};
      color: white;
      border-radius: 4px;
      z-index: 9999;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
}

// Search functionality
class Search {
  constructor() {
    this.searchInput = document.querySelector('[data-search-input]');
    this.searchResults = document.querySelector('[data-search-results]');
    this.init();
  }

  init() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
    }
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  async handleSearch(e) {
    const query = e.target.value.trim();
    
    if (query.length < 2) {
      this.hideResults();
      return;
    }

    try {
      const response = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=5`);
      const data = await response.json();
      this.displayResults(data.resources.results.products);
    } catch (error) {
      console.error('Search error:', error);
    }
  }

  displayResults(products) {
    if (!this.searchResults) return;

    if (products.length === 0) {
      this.searchResults.innerHTML = '<p>No products found</p>';
    } else {
      this.searchResults.innerHTML = products.map(product => `
        <div class="search-result">
          <a href="${product.url}">
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>${product.price}</p>
          </a>
        </div>
      `).join('');
    }

    this.showResults();
  }

  showResults() {
    if (this.searchResults) {
      this.searchResults.style.display = 'block';
    }
  }

  hideResults() {
    if (this.searchResults) {
      this.searchResults.style.display = 'none';
    }
  }
}

// Newsletter form handling
class NewsletterForm {
  constructor() {
    this.forms = document.querySelectorAll('form[action*="/contact"]');
    this.init();
  }

  init() {
    this.forms.forEach(form => {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Subscribing...';
    }

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        this.showMessage('Thank you for subscribing!', 'success');
        form.reset();
      } else {
        this.showMessage('Error subscribing. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      this.showMessage('Error subscribing. Please try again.', 'error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Subscribe';
      }
    }
  }

  showMessage(message, type) {
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `newsletter-message newsletter-message--${type}`;
    messageEl.textContent = message;
    
    // Add styles
    messageEl.style.cssText = `
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 4px;
      color: ${type === 'error' ? '#dc2626' : '#059669'};
      background: ${type === 'error' ? '#fef2f2' : '#f0fdf4'};
      border: 1px solid ${type === 'error' ? '#fecaca' : '#bbf7d0'};
    `;
    
    // Insert after form
    const form = document.querySelector('form[action*="/contact"]');
    if (form) {
      form.parentNode.insertBefore(messageEl, form.nextSibling);
      
      // Remove after 5 seconds
      setTimeout(() => {
        if (messageEl.parentNode) {
          messageEl.parentNode.removeChild(messageEl);
        }
      }, 5000);
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CartDrawer();
  new Search();
  new NewsletterForm();
});

// Make functions globally available
window.toggleMobileMenu = toggleMobileMenu;
