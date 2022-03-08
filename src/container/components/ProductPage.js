import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id }  = useParams();
    return "ProductPage - " + id
}

export default ProductPage