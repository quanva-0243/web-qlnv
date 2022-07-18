import { Button } from 'antd';
import { Link, Outlet } from 'react-router-dom';

export function Sign () {

    return (
        <div>
            <div style={{marginLeft:'auto', marginRight:'auto', display:'block'}}>
                <Link to={'/'}><Button>Sign in</Button></Link>
                <Link to={'/register'}><Button>Sign up</Button></Link>
            </div>
            <Outlet/>
        </div>
    );
}