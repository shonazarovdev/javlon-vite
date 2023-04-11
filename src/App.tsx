import { Loader } from '@components/Loader';
import { Home } from './pages';
import { useEffect, useState } from 'react';

function App() {
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);
    return <div className="wrapper">{loading ? <Loader /> : <Home />}</div>;
}

export default App;
