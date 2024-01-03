import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, stateType } from "./redux";

function App() {
    const dispatch = useDispatch();

    const count = useSelector((state: stateType) => state.count);
    const [val, setVal] = useState<number>(count);

    const incrementByValueHandler = (): void => {
        dispatch(incrementByValue(val));
    };

    const incrementHandler = (): void => {
        dispatch(increment());
    };

    const decrementHandler = (): void => {
        dispatch(decrement());
    };
    return (
        <div className="toolkit">
            <h1>Using Toolkit</h1>

            <button onClick={incrementHandler}>+</button>
            <button onClick={decrementHandler}>-</button>

            <br />
            <br />

            <input
                type="number"
                value={val}
                onChange={(e) => setVal(Number(e.target.value))}
            />
            <br />
            <button onClick={incrementByValueHandler}>Add</button>

            <br />
            <br />

            <p>Count: {count}</p>
        </div>
    );
}
export default App;

import { useReducer } from "react";

type stateType = {
    count: number;
};

type actionType =
    | {
          type: "Increment";
          payload: number;
      }
    | {
          type: "Decrement";
          payload: number;
      };

const initialState: stateType = {
    count: 0,
};

const reducer = (state: stateType, action: actionType): stateType => {
    switch (action.type) {
        case "Increment":
            return { count: state.count + action.payload };

        case "Decrement":
            if (state.count == 0) {
                return state;
            }
            return { count: state.count - action.payload };

        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const incrementHandler = (): void => {
        dispatch({
            type: "Increment",
            payload: 1,
        });
    };

    const decrementHandler = (): void => {
        dispatch({
            type: "Decrement",
            payload: 1,
        });
    };

    return (
        <div>
            <h1>Count Change using Reducer</h1>

            <p>Count : {state.count}</p>

            <button onClick={incrementHandler}>+</button>
            <button onClick={decrementHandler}>-</button>
        </div>
    );
}

export default App;

import { ReactNode, createContext, useState } from "react";
import Box from "./components/Box";

type ThemeType = "light" | "dark";

interface themeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<themeContextType>({
    theme: "light",
    toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

function App() {
    return (
        <ThemeProvider>
            <Box />
        </ThemeProvider>
    );
}

export default App;
import React, { FormEvent, useState } from "react";

interface Person {
    name: string;
    age: number;
}

function App() {
    const [user, setUser] = useState<Person>();

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(user);
    };
    return (
        <>
            {/* <Box heading="Ujjwal Jamuar" func1={(message) => { alert(message)}} /> */}
            {/* <Box  func1={(message) => { alert(message)}}/> */}

            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="name"
                    value={user?.name || ""}
                    onChange={(e) =>
                        setUser((prev) => ({ ...prev!, name: e.target.value }))
                    }
                />
                <input
                    type="number"
                    name="age"
                    value={user?.age || ""}
                    placeholder="age"
                    onChange={(e) =>
                        setUser((prev) => ({
                            ...prev!,
                            age: Number(e.target.value),
                        }))
                    }
                />
                <button type="submit">submit</button>
            </form>
        </>
    );
}

export default App;
