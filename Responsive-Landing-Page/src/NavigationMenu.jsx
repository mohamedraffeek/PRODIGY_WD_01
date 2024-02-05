import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavigationMenu.css';
import { useNavigate } from 'react-router-dom';

const NavigationMenu = ({activaPage}) => {
    const [show, setShow] = useState(false);
    const [motion, setMotion] = useState(0);
    const [activePage, setActivePage] = useState(activaPage);
    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        setMotion(0);
    };

    const handleShow = () => {
        setMotion(motion + 360);
        setTimeout(() => {
            setShow(true);
        }, 150);
    };

    const changePage = (newPage) => {
        setActivePage(newPage);
        navigate(`/${newPage}`);
    }

    return (
        <>
        <div className="button-container">
            <button 
                className='menu-button' 
                onClick={handleShow} 
                style={{ 
                transform: `translateY(${-motion / 3}px)`,
                }}
                title='Menu'
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>

        <Offcanvas 
            show={show} 
            onHide={handleClose} 
            placement='top' 
            style={{ height: '70px' }} 
            scroll='true'
        >
            <Offcanvas.Header closeButton>
                <h1 className='logo'>My Website</h1>
                <button className={`header-button ${activePage === 'home' ? 'active' : ''}`} onClick={() => changePage('home')}>Home</button>
                <button className={`header-button ${activePage === 'media' ? 'active' : ''}`} onClick={() => changePage('media')}>Media</button>
                <button className={`header-button ${activePage === 'company' ? 'active' : ''}`} onClick={() => changePage('company')}>Company</button>
                <button className={`header-button ${activePage === 'contact' ? 'active' : ''}`} onClick={() => changePage('contact')}>Contact</button>
            </Offcanvas.Header>
            
        </Offcanvas>
        </>
    );
};

export default NavigationMenu;
