import React from "react";
import { Table } from "react-bootstrap";

function CompletedTasks(props) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#a8ffab", padding: '8px' }}>Completed Tasks</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map(
                        (item) =>
                            item.completed ? (
                                <tr key={item.id}>
                                    <td>{item.task}</td>
                                </tr>
                            ) : null
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default CompletedTasks;