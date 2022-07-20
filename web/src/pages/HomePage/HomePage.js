import { GetUser } from '../../api/axios';
import { Navbar } from '../../components/homepage/Navbar';

export function HomePage () {

    const get = async () => {
        const user = await GetUser();
        console.log(user);
    }
    get();

    return (
        <div>
            <Navbar/>
            <h1>Here is homepage!</h1>
        </div>
    );
}