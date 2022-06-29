import { Button, Input, Text } from '@nextui-org/react';
import { HiSearch } from 'react-icons/hi';

function App() {
    return (
        <div className="bg-slate-50 h-screen flex justify-center flex-col items-center container">
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

            <div className="m-8 flex gap-2">
                <Input clearable bordered labelPlaceholder="Search" />
                <Button
                    auto
                    color="primary"
                    className="bg-blue-500  text-white "
                    icon={<HiSearch className="text-xl" />}
                />
            </div>
        </div>
    );
}

export default App;
