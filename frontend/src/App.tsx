import {useEffect, useEffect, useState} from 'react'
import './App.css'

export function App() {
    const [view, setView] = useState<'list' | 'add'>('list');
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const data = await api.getProducts();
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddProduct = async (title: string, desc: string) => {
        try {
            await api.addProduct(title, desc);
            alert("Product added successfully! 🎉");
            await fetchProducts();
            setView('list');
        } catch (error) {
            alert("Error adding product");
        }
    };
}