import { View } from 'react-native';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import type { BottomRoutesProps } from '@/routes/BottomRoutes';
import type { StackRoutesProps } from '@/routes/StackRoutes';

export function Product({ navigation, route }: BottomRoutesProps<'product'>) {
    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <ButtonIcon
                    name="arrow-circle-left"
                    onPress={() => navigation.goBack()}
                />
                <Title>Product {route.params?.id}</Title>
            </Header>
        </View>
    );
}
