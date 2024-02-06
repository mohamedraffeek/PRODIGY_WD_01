import { useEffect } from 'react';
import NavigationMenu from './NavigationMenu';
import PageBody from './PageBody';


const CompanyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <NavigationMenu activaPage={'company'} />
            <PageBody page={"Company"} />
        </>
    );
};

export default CompanyPage;