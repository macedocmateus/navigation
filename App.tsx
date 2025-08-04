import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Routes } from '@/routes';

export default function App() {
    return (
        <GestureHandlerRootView>
            <Routes />
        </GestureHandlerRootView>
    );
}
