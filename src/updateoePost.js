import React, { useEffect, useState } from 'react';
import './Post.css';

function Crud() {
    const [records, setRecords] = useState([]);
    const [id, setId] = useState('');
    const [name1, setName1] = useState('');
    const [name, setName] = useState('');
    const [username1, setUsername1] = useState('');
    const [username, setUsername] = useState('');
    const [email1, setEmail1] = useState('');
    const [email, setEmail] = useState('');
    const [showUpdate, setShowUpdate] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [showTable, setShowTable] = useState(true); // State to track table visibility
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err));
    }, []);

    const handleUpdate = () => {
        const updatedRecords = records.map(record => {
            if (record.id === parseInt(id)) {
                return { ...record, name: name1, username: username1, email: email1 };
            }
            return record;
        });

        setRecords(updatedRecords);
        setId('');
        setName1('');
        setEmail1('');
        setUsername1('');
        setShowUpdate(false);
        showAlert("Data Updated Successfully", "success");
    };

    const handleModalClose = () => {
        setShowUpdate(false);
        setSelectedRecord(null);
    };


    const handleUpdateButtonClick = (record) => {
        setSelectedRecord(record);
        setId(record.id.toString());
        setName1(record.name);
        setUsername1(record.username);
        setEmail1(record.email);
        setShowUpdate(true);
    };



    return (
        <div className='add'>
            <div>
                <h2>Update Record</h2>
                <div className="form-group">
                    <label>ID:</label>
                    <input type="text" className='form-control' value={id} onChange={e => setId(e.target.value)} readOnly />
                </div>
                <div className='form-group'>
                    <label>Name:</label>
                    <input type="text" className='form-control' value={name1} onChange={e => setName1(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Username:</label>
                    <input type="text" className='form-control' value={username1} onChange={e => setUsername1(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Email:</label>
                    <input type="text" className='form-control' value={email1} onChange={e => setEmail1(e.target.value)} />
                </div>
                <button className='btn btn-success my-2' onClick={handleUpdate}>Save</button>
                <button className='btn btn-danger my-2 ms-2' onClick={handleModalClose}>Close</button>
            </div>
        </div>
    );

}
