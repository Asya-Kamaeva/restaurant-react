import { Layout } from "./components/layout/Layout";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { UserContextProvider } from "./components/userContext/user-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import { RestaurantPage } from "./components/restaurant-page/restaurant-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./components/main-page/main-page";
import { MenuContainer } from "./components/menu/MenuContainer";
import { Navigate } from "react-router-dom";
import { ReviewsContainer } from "./components/reviews/ReviewsContainer";
import { Dish } from "./components/dish/Dish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "restaurant",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantPage />,
            children: [
              {
                index: true,
                element: <Navigate to="menu" />,
              },
              {
                path: "menu",
                element: <MenuContainer />,
              },
              {
                path: "review",
                element: <ReviewsContainer />,
              },
            ],
          },
        ],
      },
      {
        path: "dish/:dishId",
        element: <Dish />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router}>
            <Layout>
              <RestaurantsPage />
            </Layout>
          </RouterProvider>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
