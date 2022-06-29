import { Text } from '@nextui-org/react';
import NewsList from './components/NewsList';

function App() {
    return (
        <div className="mt-8">
            <Text
                h1
                size={60}
                css={{
                    textGradient: '45deg, $blue600 -20%, $pink600 50%',
                    textAlign: 'center',
                }}
                weight="bold"
            >
                News API - Client
            </Text>

            <NewsList />
        </div>
    );
}

export default App;
