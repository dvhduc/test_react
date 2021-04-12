import React from 'react';
import { Button,} from 'reactstrap';

function Footer() {
    function onClick() {
        alert('Test')
    }
    return (
        <React.Fragment>
            <Button outline color="primary" onClick={onClick}>Click me!!</Button>{' '}
        </React.Fragment>
            
        
    )
}
export default Footer;
