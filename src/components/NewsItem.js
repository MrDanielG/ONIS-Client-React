import { Card, Col, Row, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const NewsItem = ({ newsItem, keyword }) => {
    return (
        <Link to={`/news/${newsItem?.title}?q=${keyword}`}>
            <Card
                css={{ w: '100%', h: '300px', minWidth: '310px' }}
                isHoverable
                isPressable
            >
                <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                    <Col>
                        <Text
                            size={12}
                            weight="bold"
                            transform="uppercase"
                            color="#ffffffAA"
                        >
                            {new Date(
                                newsItem.publishedAt
                            ).toLocaleDateString()}
                        </Text>
                        <Text
                            h4
                            color="white"
                            css={{
                                textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            {newsItem.title}
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={newsItem.urlToImage}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="News Img"
                        css={{
                            backgroundColor: '#000000AA',
                        }}
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: 'absolute',
                        bgBlur: '#ffffff66',
                        borderTop:
                            '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col>
                            <Text color="#000" size={12}>
                                {newsItem.author ?? 'Unknown Author'}
                            </Text>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Link>
    );
};

export default NewsItem;
