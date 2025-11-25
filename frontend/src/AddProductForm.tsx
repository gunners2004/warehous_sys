import {useState} from "react";
import * as React from "react";

const AddProductForm = ({ onAdd }: { onAdd: (title: string, desc: string) => Promise<void> }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await onAdd(title, description);
        setIsSubmitting(false);
    };

    return (
        <div className="product-card" style={{ borderLeft: 'none' }}>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Product Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="e.g., Wireless Mouse"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        disabled={isSubmitting}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        rows={3}
                        placeholder="Enter product details..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        disabled={isSubmitting}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Saving...' : 'Save Product'}
                </button>
            </form>
        </div>
    );
};