import React, { useState, useEffect } from 'react';
import './ProductGrid.css';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function ProductGrid({ products, selectedSubcategory, minimal }) {
  const { addToCart } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sizeSelections, setSizeSelections] = useState({});
  const [sortOption, setSortOption] = useState('ASC');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Increased from 4 to show more products

  useEffect(() => {
    let filtered = [];
    if (selectedSubcategory) {
      filtered = products.filter((product) => product.subcategory === selectedSubcategory);
    } else {
      filtered = products;
    }

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOption === 'ASC') {
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === 'DESC') {
      filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredProducts(filtered);
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [products, selectedSubcategory, sortOption, search]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Scroll to top when changing page
    window.scrollTo(0, 0);
  };

  const handleSizeChange = (productId, size) => {
    setSizeSelections({ ...sizeSelections, [productId]: size });
  };

  const handleAddToCart = (product) => {
    const selectedSize = sizeSelections[product.id];
    if (!selectedSize) {
      alert('Selecteaza o marime inainte sa adaugi un produs in cos.');
      return;
    }
    addToCart({ ...product, selectedSize });
  };

  return (
    <div>
      {!minimal && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Cauta dupa nume sau categorie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
      
      {!minimal && (
        <div className="sort-options">
          <label htmlFor="sort">Sorteaza dupa:</label>
          <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="ASC">Pret: Crescator</option>
            <option value="DESC">Pret: Descrescator</option>
          </select>
        </div>
      )}
      
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
          Nu am gasit produse care sa corespunda criteriilor tale de cautare.
        </div>
      ) : (
        <div className="product-grid">
          {currentProducts.map((product) => (
            <div key={product.id} className="product">
              <Link to={`/product/${product.id}`}>
                <img 
                  src={`http://localhost:5000/${product.imagePath}`} 
                  alt={product.name} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Imagine+indisponibila';
                  }}
                />
                <h4>{product.name}</h4>
              </Link>
              <div className="product-grid-item-info">{product.description}</div>
              <p>{product.price} Lei</p>
              <select
                className="size-selector"
                value={sizeSelections[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                <option value="" disabled>
                  Alege marimea
                </option>
                {Array.isArray(product.sizes) ? (
                  product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))
                ) : (
                  <option disabled>Error: marime invalida</option>
                )}
              </select>
              <button onClick={() => handleAddToCart(product)}>Adauga in cos</button>
            </div>
          ))}
        </div>
      )}
      
      {!minimal && totalPages > 1 && (
        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>
              &laquo; Prev
            </button>
          )}
          
          {Array.from({ length: totalPages }, (_, index) => {
            // Show only a window of pages around current page for better UX when many pages
            if (
              index === 0 || 
              index === totalPages - 1 || 
              (index >= currentPage - 2 && index <= currentPage + 2)
            ) {
              return (
                <button
                  key={index + 1}
                  className={currentPage === index + 1 ? 'active-page' : ''}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              );
            } else if (
              index === currentPage - 3 || 
              index === currentPage + 3
            ) {
              return <span key={`ellipsis-${index}`} style={{ margin: '0 0.5rem' }}>...</span>;
            }
            return null;
          })}
          
          {currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage + 1)}>
              Next &raquo;
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductGrid;