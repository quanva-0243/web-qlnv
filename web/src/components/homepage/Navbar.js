import { Button, Row } from "antd";
import { LogoutCallApi } from '../../api/axios';

export function Navbar () {

    const handleLogout = () => {
        LogoutCallApi();
    }

    return (
        <Row type='flex' justify='center' align='top'>
            <Button onClick={handleLogout} >Log out</Button>
        </Row>
    );
}