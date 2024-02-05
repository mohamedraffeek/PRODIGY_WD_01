import NavigationMenu from './NavigationMenu';
import PageBody from './PageBody';


const HomePage = () => {
    return (
        <>
            <NavigationMenu activaPage={'home'} />
            <PageBody page={"Home"} />
        </>
    );
};

export default HomePage;
