import { NavigationContainer } from '@react-navigation/native';
import { BottomRoutes } from './BottomRoutes';
import { StackRoutes } from './StackRoutes';

export function Routes() {
    return (
        <NavigationContainer>
            <BottomRoutes />
        </NavigationContainer>
    );
}
