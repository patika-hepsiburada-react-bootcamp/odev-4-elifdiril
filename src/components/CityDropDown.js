import { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import _cities from '../assets/city.json';

const CityDropDown = ({ setSelectedCity }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [cities, setCities] = useState();
    
    //Set Cities from city.json
    useEffect(() => {
        setCities(_cities)
    }, [])

    //dropdown toggle button
    const toggle = () => setDropdownOpen(prevState => !prevState);

    //Set city value from selected dropdown item
    const selectCityHandle = (item) => {
        setSelectedCity(item.target.innerText)
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret color="dark">
                Select City
            </DropdownToggle>
            <DropdownMenu>
                {!cities && <DropdownItem >No City</DropdownItem>}
                {cities && cities.map((item) =>
                    <DropdownItem key={item.id} onClick={(item) => selectCityHandle(item)}>{item.name}</DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
}

export default CityDropDown;
