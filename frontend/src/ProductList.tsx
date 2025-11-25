

const ProductList = ({ products, isLoading }: { products: Product[], isLoading: boolean }) => {
    if (isLoading) {
        return <div className="empty-state">Loading products... ⏳</div>;
    }

    if (products.length === 0) {
        return <div className="empty-state">No products found. Add one! 📦</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};