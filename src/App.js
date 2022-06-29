import { Spacer, Text } from '@nextui-org/react';
import NewsList from './components/NewsList';

function App() {
    return (
        <div>
            <Spacer y={2} />
            <Text
                h1
                size={60}
                css={{
                    textGradient: '45deg, $blue600 -20%, $pink600 50%',
                    textAlign: 'center',
                }}
                weight="bold"
            >
                News API - React Client
            </Text>

            <NewsList />
        </div>
    );
}

export default App;
