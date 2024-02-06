import { useEffect } from 'react';
import NavigationMenu from './NavigationMenu';
import PageBody from './PageBody';


const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <NavigationMenu activaPage={'home'} />
            <PageBody page={"Home"} />
        </>
    );
};

export default HomePage;
