import { MaterialIcons } from '@expo/vector-icons';
import {
    createDrawerNavigator,
    type DrawerScreenProps,
} from '@react-navigation/drawer';

import { Home } from '@/app/Home';
import { Product } from '@/app/Product';

export type DrawerRoutesList = {
    home: undefined;
    product: undefined | { id: string };
};

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> =
    DrawerScreenProps<DrawerRoutesList, T>;

const Drawer = createDrawerNavigator<DrawerRoutesList>();

export function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#2c46b1',
                drawerInactiveTintColor: '#444',
            }}
        >
            <Drawer.Screen
                name="home"
                component={Home}
                options={{
                    drawerLabel: 'Início',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="product"
                component={Product}
                options={{
                    drawerLabel: 'Produto',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="add-circle"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
