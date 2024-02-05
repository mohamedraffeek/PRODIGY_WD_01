import NavigationMenu from './NavigationMenu';
import PageBody from './PageBody';


const MediaPage = () => {
    return (
        <>
            <NavigationMenu activaPage={'media'} />
            <PageBody page={"Media"} />
        </>
    );
};

export default MediaPage;