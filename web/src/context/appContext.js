import { useState, createContext } from "react";

const TestContext = createContext();

function TestProvider ({children}) {
    const [value, setValue] = useState(0);

    const changeValue = () => {
        setValue(value === 0 ? 1 : 0);
    }

    const test = {
        value,
        changeValue
    }

    return (
        <TestProvider value={test}>
            {children}
        </TestProvider>
    );
}

export { TestContext, TestProvider }