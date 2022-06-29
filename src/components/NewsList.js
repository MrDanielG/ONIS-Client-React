import { Button, Container, Grid, Input } from '@nextui-org/react';
import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import NewsItem from '../components/NewsItem';

const NewsList = () => {
    const [news, setNews] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <Container>
            <div className="flex gap-2 justify-center m-8">
                <Input clearable bordered labelPlaceholder="Search" />
                <Button
                    auto
                    color="primary"
                    className="bg-blue-500  text-white "
                    icon={<HiSearch className="text-xl" />}
                />
            </div>

            <Grid.Container gap={2} justify="flex-start">
                {news.map((newsItem) => (
                    <Grid xs={12} sm={3}>
                        <NewsItem key={newsItem.id} newsItem={newsItem} />
                    </Grid>
                ))}
            </Grid.Container>
        </Container>
    );
};

export default NewsList;
