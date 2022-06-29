import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news/:title" element={<NewsDetailPage />} />
            </Routes>
        </div>
    );
}

export default App;
