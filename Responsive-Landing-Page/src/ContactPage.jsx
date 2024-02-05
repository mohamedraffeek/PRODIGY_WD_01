import NavigationMenu from './NavigationMenu';
import PageBody from './PageBody';


const ContactPage = () => {
    return (
        <>
            <NavigationMenu activaPage={'contact'} />
            <PageBody page={"Contact"} />
        </>
    );
};

export default ContactPage;