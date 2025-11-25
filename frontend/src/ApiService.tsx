
const api = {
    getProducts: async (): Promise<Product[]> => {
        // Имитация задержки сети
        await new Promise(resolve => setTimeout(resolve, 500));
        const data = localStorage.getItem('product_db_react');
        return data ? JSON.parse(data) : [];
    },

    addProduct: async (title: string, description: string): Promise<Product> => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const newProduct: Product = {
            id: crypto.randomUUID(),
            title,
            description
        };

        // Получаем текущие, добавляем новый, сохраняем
        const currentData = localStorage.getItem('product_db_react');
        const products = currentData ? JSON.parse(currentData) : [];
        products.push(newProduct);
        localStorage.setItem('product_db_react', JSON.stringify(products));

        return newProduct;
    }
};