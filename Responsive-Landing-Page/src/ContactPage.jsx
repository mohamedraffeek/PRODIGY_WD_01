import { useEffect } from 'react';
import NavigationMenu from './NavigationMenu';
import PageBody from './PageBody';


const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <NavigationMenu activaPage={'contact'} />
            <PageBody page={"Contact"} />
        </>
    );
};

export default ContactPage;