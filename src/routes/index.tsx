import { NavigationContainer } from '@react-navigation/native';
import { BottomRoutes } from '@/routes/BottomRoutes';
import { DrawerRoutes } from '@/routes/DrawerRoutes';
import { StackRoutes } from '@/routes/StackRoutes';

export function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    );
}
