import { Row, Space } from "antd"
import { useContext } from "react";
import { AppContext } from "../../context/appContext";


export function Sign () {

    const { curForm } = useContext(AppContext);

    return (
        <Row type='flex' justify='center' align='middle' style={{ minHeight: '100vh' }}>
            <Space size={5} direction="vertical" >
                <Row type='flex' justify='center' align='middle'>
                    {curForm}
                </Row>
            </Space>
        </Row>
    );
}