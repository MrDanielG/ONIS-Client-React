import { Button, Container, Grid, Input, Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import NewsItem from '../components/NewsItem';

const NewsList = () => {
    const [keyWord, setKeyWord] = useState('');
    const [news, setNews] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <Container>
            <Spacer y={1.5} />
            <div className="flex-btn align-center">
                <Input
                    bordered
                    labelPlaceholder="Search"
                    onChange={(e) => setKeyWord(e.target.value)}
                />
                <Button auto color="primary" icon={<HiSearch />} />
            </div>
            <Spacer y={2} />

            <Grid.Container gap={2} justify="flex-start">
                {news.map((newsItem) => (
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <NewsItem key={newsItem.id} newsItem={newsItem} />
                    </Grid>
                ))}
            </Grid.Container>
        </Container>
    );
};

export default NewsList;
