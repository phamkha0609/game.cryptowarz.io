import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    handleScrollToTop();
  }, [location]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return location;
};
