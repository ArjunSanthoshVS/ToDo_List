import React from "react";
import { Table } from "react-bootstrap";

function DeletedTasks(props) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#ffa8a8", padding: '8px' }}>Deleted Tasks</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map(
                        (item) =>
                            item.del ? (
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

export default DeletedTasks;