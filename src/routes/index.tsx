import { NavigationContainer } from '@react-navigation/native';
import { BottomRoutes } from './BottomRoutes';
import { DrawerRoutes } from './DrawerRoutes';
import { StackRoutes } from './StackRoutes';

export function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    );
}
