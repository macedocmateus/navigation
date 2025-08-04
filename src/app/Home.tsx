import { View } from 'react-native';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import type { BottomRoutesProps } from '@/routes/BottomRoutes';
import type { DrawerRoutesProps } from '@/routes/DrawerRoutes';
import type { StackRoutesProps } from '@/routes/StackRoutes';

export function Home({ navigation }: DrawerRoutesProps<'home'>) {
    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <ButtonIcon
                    name="menu"
                    onPress={() => navigation.toggleDrawer()}
                />

                <Title>Home</Title>

                <ButtonIcon
                    name="add-circle"
                    onPress={() => navigation.navigate('product', { id: '7' })}
                />
            </Header>
        </View>
    );
}
