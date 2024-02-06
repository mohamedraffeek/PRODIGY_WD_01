import { useEffect } from 'react';
import NavigationMenu from './NavigationMenu';
import PageBody from './PageBody';


const MediaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <NavigationMenu activaPage={'media'} />
            <PageBody page={"Media"} />
        </>
    );
};

export default MediaPage;