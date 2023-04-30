import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer className="category-preview-container">
      <Title>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </Title>
      <Preview className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
