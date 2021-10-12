import { useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import _cities from '../assets/city.json';

const CityDropDown = ({ setSelectedCity }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [cities, setCities] = useState();

    useEffect(() => {
        setCities(_cities)
    }, [])

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const selectCityHandle = (item) => {
        setSelectedCity(item.target.innerText)
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Cities
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