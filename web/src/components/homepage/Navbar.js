import { Button, Row } from "antd";


export function Navbar () {

    const handleLogout = () => {
        localStorage.removeItem('token');
        
    }

    return (
        <Row type='flex' justify='center' align='top'>
            <Button onClick={handleLogout} >Log out</Button>
        </Row>
    );
}