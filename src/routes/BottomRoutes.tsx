import { MaterialIcons } from '@expo/vector-icons';
import {
    type BottomTabScreenProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Home } from '@/app/Home';
import { Product } from '@/app/Product';

export type BottomRoutesList = {
    home: undefined;
    product: undefined | { id: string };
};

export type BottomRoutesProps<T extends keyof BottomRoutesList> =
    BottomTabScreenProps<BottomRoutesList, T>;

const Tab = createBottomTabNavigator<BottomRoutesList>();

export function BottomRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#2c46b1',
                tabBarInactiveTintColor: '#444',
                tabBarLabelPosition: 'beside-icon',
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="product"
                component={Product}
                options={{
                    tabBarLabel: 'Produto',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="add-circle"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
