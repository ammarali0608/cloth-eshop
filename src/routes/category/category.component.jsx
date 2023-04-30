import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  // console.log(categoriesMap);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle className="category-title">
        {category.toUpperCase()}
      </CategoryTitle>
      <CategoryContainer className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
