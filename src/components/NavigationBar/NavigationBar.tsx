import React from 'react';
import './NavigationBar.css';
import { callAPI } from '../../utils/callAPI';

interface NavigationBarProps {
    onClick: (endpoint: string, data: any) => void;
};

export const v1Prefix = '/api/v1';
export const NAV_HOME = '/';
export const NAV_VETS = v1Prefix+'/veterinarians';
// export const NAV_OWNERS = v1Prefix+'/owners';
export const NAV_PETS = v1Prefix+'/pets';
export const NAV_APPTS = v1Prefix+'/appointments';

export const NavigationBar: React.FC<NavigationBarProps> = ({ onClick}) => {
    const navToVets = async (endpoint: string) => {
        callAPI(endpoint, (data) => {
            onClick(endpoint, data);
        });
    }

    // const navToOwners = async (endpoint: string) => {
    //     callApi(endpoint, (data) => {
    //         onClick(endpoint, data);
    //     });
    // };

    const navToHome = async (endpoint: string) => {
        onClick(endpoint, {});
    };

    const navToPets = async (endpoint: string) => {
        callAPI(endpoint, (data) => {
            onClick(endpoint, data);
        });
    };

    const navToAppts = async (endpoint: string) => {
        callAPI(endpoint, (data) => {
            onClick(endpoint, data);
        });
    };

    return (
        <div className="NavigationBar">
            <nav>
                <li onClick={() => navToHome(NAV_HOME)}>Home</li>
                <li onClick={() => navToVets(NAV_VETS)}>Veterinarians</li>
                {/* <li onClick={() => navToOwners(NAV_OWNERS)}>Owners</li> */}
                <li onClick={() => navToPets(NAV_PETS)}>Pets</li>
                <li onClick={() => navToAppts(NAV_APPTS)}>Appointments</li>
            </nav>
        </div>
    );
};
