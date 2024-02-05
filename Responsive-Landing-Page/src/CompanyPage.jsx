import NavigationMenu from './NavigationMenu';
import PageBody from './PageBody';


const CompanyPage = () => {
    return (
        <>
            <NavigationMenu activaPage={'company'} />
            <PageBody page={"Company"} />
        </>
    );
};

export default CompanyPage;