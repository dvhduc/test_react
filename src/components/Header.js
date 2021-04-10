import React, { Component, useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <React.Fragment>

            <Nav className="bg-dark mb-5">
                <NavItem >
                    <NavLink className="text-light" href="#" active>Trang chủ</NavLink>
                </NavItem>
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle className="text-light" nav caret>
                        Mục lục
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem>
                    <NavLink className="text-light" href="#">Danh mục sản phẩm</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-light" href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-light" disabled href="#">Disabled Link</NavLink>
                </NavItem>
            </Nav>
        </React.Fragment>

    );
}
export default Header;
