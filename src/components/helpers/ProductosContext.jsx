import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const ProductosContext = createContext();

// Crear el proveedor
export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    return (
        <ProductosContext.Provider value={{ productos, setProductos }}>
            {children}
        </ProductosContext.Provider>
    );
};

// Crear un hook personalizado para usar el contexto fácilmente
export const useProductos = () => {
    return useContext(ProductosContext);
};
