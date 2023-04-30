import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  CategoryItemBodyContainer,
  CategoryItemContainer,
} from "./category-item.styles";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemBodyContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
