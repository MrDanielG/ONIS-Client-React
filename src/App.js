import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news/:title" element={<NewsDetailPage />} />
        </Routes>
    );
}

export default App;
