import {
    Button,
    Card,
    Container,
    Image,
    Link as NextLink,
    Loading,
    Spacer,
    Text,
} from '@nextui-org/react';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { Link, useLocation, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const NewsDetailPage = () => {
    const { title } = useParams();
    const location = useLocation();
    const q = new URLSearchParams(location.search).get('q');

    const url = `http://localhost:8080/api/news/${title}?q=${
        q === 'undefined' ? undefined : q
    }`;
    const { data: news, loading, error } = useFetch(url);

    if (loading)
        return (
            <div className="flex-center">
                <Loading />
            </div>
        );

    if (error)
        return (
            <Card css={{ $$cardColor: '$colors$error' }}>
                <Card.Body>
                    <Text color="white">Error getting news data</Text>
                </Card.Body>
            </Card>
        );

    return (
        <Container>
            <Spacer y={0.5} />
            <Link to="/">
                <Button
                    light
                    color="primary"
                    auto
                    icon={<HiOutlineArrowSmLeft />}
                    css={{
                        paddingLeft: 0,
                    }}
                >
                    Go back
                </Button>
            </Link>
            <Spacer y={0.5} />

            <Image
                showSkeleton
                width={'100%'}
                height={400}
                maxDelay={10000}
                src={news?.urlToImage}
                alt="Default Image"
                objectFit="cover"
                containerCss={{
                    borderRadius: '10px',
                }}
            />

            <Spacer y={2} />
            <NextLink href={news?.url} icon>
                <Text
                    h1
                    size={25}
                    css={{
                        textGradient: '45deg, $blue600 -20%, $pink600 50%',
                    }}
                    weight="bold"
                >
                    {news?.title}
                </Text>
            </NextLink>

            <Text color="gray">
                Published Date:{' '}
                {new Date(news?.publishedAt).toLocaleDateString()}
            </Text>
            <Spacer y={1} />

            <Text>{news?.description}</Text>
            <Spacer y={0.5} />
            <Text color="gray">{news?.author ?? 'Unknown Author'}</Text>
        </Container>
    );
};

export default NewsDetailPage;
