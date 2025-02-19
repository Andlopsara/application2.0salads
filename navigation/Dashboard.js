import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Alert } from "react-native";
import { auth } from "../firebase-config";
import { logoutAuth } from "../services/firebase"; 

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Carrito from '../screens/Carrito';
import Ordenar from '../screens/Ordenar';
import Welcome from '../screens/Welcome'; 

const Drawer = createDrawerNavigator();

export default function Dashboard({ navigation }) {
  const handleLogout = async () => {
    try {
      await logoutAuth(); 
      navigation.replace("Welcome");
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al cerrar sesión.");
    }
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          {props.state?.routes?.length > 0 && <DrawerItemList {...props} />}
          <DrawerItem label="Cerrar Sesión" onPress={handleLogout} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Drawer.Screen name="Carrito" component={Carrito} options={{ headerShown: false }} />
      <Drawer.Screen name="Ordenar" component={Ordenar} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
