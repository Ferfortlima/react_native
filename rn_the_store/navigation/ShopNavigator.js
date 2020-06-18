import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";

import Colors from "../constants/Colors";
const ShopNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTitleStyle: { fontFamily: "open-sans-bold" },
      headerBackTitleStyle: { fontFamily: "open-sans-bold" },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
