import { Layout } from "./components/layout/Layout";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { UserContextProvider } from "./components/userContext/user-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RestaurantsPage } from "./components/restaurant-page/restaurants-page";

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
