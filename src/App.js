import React, { useState } from "react";
// import "./style.css";                   //main CSS should come after bootstrap css.

//import react icons
import Icon from "./components/icon";

//import react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import react strap
import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";                                 //main CSS

//lets create icon for each box
const itemArray = new Array(9).fill("empty");

// function App() {
//   return(
//     <div>
//         {/* <h1>Hello</h1> */}
//         <Icon />
//     </div>
//   );
// };

// lets change above fn to arrow fn
const App = () => {

    const [isCross, setIsCross] = useState(false);
    const [winMsg, setWinMsg] = useState("");
    // const [winMsg, setWinMsg] = useState("Circle Wins");    //checking for state.

    const reloadGame = () => {
        setIsCross(false);
        setWinMsg("");
        itemArray.fill("empty", 0, 9);
    }

    const checkIsWinner = () => {
        if (itemArray[0] === itemArray[1] && 
            itemArray[0] === itemArray[2] &&
            itemArray[0] !== "empty"
            ) {
            setWinMsg(`${itemArray[0]} Wins`);
        } else if (itemArray[3] === itemArray[4] && 
            itemArray[3] === itemArray[5] &&
            itemArray[3] !== "empty") {
            setWinMsg(`${itemArray[3]} Wins`);
        } else if (itemArray[6] === itemArray[7] && 
            itemArray[6] === itemArray[8] &&
            itemArray[6] !== "empty") {
            setWinMsg(`${itemArray[6]} Wins`);
        } else if (itemArray[0] === itemArray[3] && 
            itemArray[0] === itemArray[6] &&
            itemArray[0] !== "empty") {
            setWinMsg(`${itemArray[0]} Wins`);
        } else if (itemArray[1] === itemArray[4] && 
            itemArray[1] === itemArray[7] &&
            itemArray[1] !== "empty") {
            setWinMsg(`${itemArray[1]} Wins`);
        } else if (itemArray[2] === itemArray[5] && 
            itemArray[2] === itemArray[8] &&
            itemArray[2] !== "empty") {
            setWinMsg(`${itemArray[2]} Wins`);
        } else if (itemArray[0] === itemArray[4] && 
            itemArray[0] === itemArray[8] &&
            itemArray[0] !== "empty") {
            setWinMsg(`${itemArray[0]} Wins`);
        } else if (itemArray[2] === itemArray[4] && 
            itemArray[2] === itemArray[6] &&
            itemArray[2] !== "empty") {
            setWinMsg(`${itemArray[2]} Wins`);
        }
    };

    const changeItem = (itemNumber) => {
        if (winMsg) {
            return toast(winMsg, { type: "success"});
        }

        if (itemArray[itemNumber] === "empty") {
            itemArray[itemNumber] = isCross? "cross": "circle";
            setIsCross(!isCross);
        } else {
            return toast("Already Filed", { type: "error"});
        }

        checkIsWinner();
    };

    // return(
    //         <div>
    //             {/* <h1>Hello</h1> */}
    //             <Icon />
    //         </div>
    //     );

    //lets bring our components one by one
    return(
        <Container className="p-5">
            <ToastContainer position="bottom-center"/>
            <Row>
                <Col md={6} className="offset-md-3">
                    {winMsg? (
                        <div className="mb-2 mt-2">
                            <h1 className="text-success text-uppercase text-center">
                                {winMsg}
                            </h1>
                            <Button 
                            color="success"
                            block
                            onClick={reloadGame}
                            >
                            Reload the game
                            </Button>
                        </div>
                    ) : (
                        <h1 className="text-center text-warning">
                            {isCross? "Cross": "Circle"} Turn
                        </h1>
                    )}
                    <div className="grid">
                        {itemArray.map((item, index) => (
                            <Card color="warning" onClick={ () => changeItem(index) }>
                                <CardBody className="box">
                                    <Icon icName={item} />
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default App;
