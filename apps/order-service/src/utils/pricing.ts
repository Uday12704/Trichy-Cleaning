export const calculateTotalPrice = async (cartItems: any[]) => {
    let total = 0;
    
    for (const item of cartItems) {
        
        const response = await fetch(`${process.env.PRODUCT_SERVICE_URL}/products/${item.id}`);
        const product = await response.json();

        if (!product || typeof product.price !== 'number') {
            throw new Error(`Invalid price for product ${item.id}`);
        }

        total += product.price * item.quantity;
    }

    return total;
}