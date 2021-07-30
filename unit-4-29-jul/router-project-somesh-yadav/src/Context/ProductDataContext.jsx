import React from "react"

export const ProductDataContext= () => React.createContext();
export const ProductDataContextProvider = ({ children }) => {
    const [productData, setProductData] = React.useState(false);
    return <ProductDataContext.Provider value={{ productData,setProductData }}>
        {children}
    </ProductDataContext.Provider>
}