import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import type { StackRoutesList } from '@/routes/StackRoutes';

type Props = NativeStackScreenProps<StackRoutesList, 'product'>;

export function Product({ navigation }: Props) {
    return (
        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <ButtonIcon
                    name="arrow-circle-left"
                    onPress={() => navigation.goBack()}
                />
                <Title>Product</Title>
            </Header>
        </View>
    );
}
