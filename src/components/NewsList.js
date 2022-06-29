import {
    Card,
    Container,
    Grid,
    Input,
    Loading,
    Spacer,
    Text,
} from '@nextui-org/react';
import { useState } from 'react';
import NewsItem from '../components/NewsItem';
import useFetch from '../hooks/useFetch';

const NewsList = () => {
    const [keyword, setKeyword] = useState(undefined);
    const url = `http://localhost:8080/api/news?q=${keyword}`;
    const { data: news, loading, error } = useFetch(url);

    return (
        <Container>
            <Spacer y={1.5} />
            <div className="flex-between">
                <Text color="gray" css={{ ml: '1rem' }}>
                    Total results: {news?.totalResults}
                </Text>

                <div className="flex-btn">
                    <Input
                        bordered
                        clearable
                        labelPlaceholder="Search"
                        onChange={(e) => setKeyword(e.target.value)}
                        css={{ mr: '1rem' }}
                    />
                    {/* <Button
                        auto
                        color="primary"
                        icon={<HiSearch />}
                        css={{ mr: '1rem' }}
                        onPress={() => setKeyword(changingValue)}
                    /> */}
                </div>
            </div>
            <Spacer y={1.5} />

            {loading ? (
                <div className="flex-center">
                    <Loading />
                </div>
            ) : (
                <Grid.Container gap={2} justify="flex-start">
                    {news?.articles?.map((newsItem, i) => (
                        <Grid xs={12} sm={6} md={4} lg={3} key={i}>
                            <NewsItem newsItem={newsItem} keyword={keyword} />
                        </Grid>
                    ))}
                </Grid.Container>
            )}

            {error && (
                <Card css={{ $$cardColor: '$colors$error' }}>
                    <Card.Body>
                        <Text color="white">Error getting news data</Text>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default NewsList;
