import React, { useContext, useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Modal,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    console.log(user.email);

    const url = `https://toy-car.vercel.app/myToys?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setToys(data)
                    console.log(data);
                }
                else {
                    // logout and then navigate
                    navigate('/');
                }
            })
    }, []);

    const [selectedToy, setSelectedToy] = useState(null);
    const [selectedToyId, setSelectedToyId] = useState(null);
    const [updateFormOpen, setUpdateFormOpen] = useState(false);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

    const handleUpdateClick = (id) => {
        setSelectedToyId(id);
        setUpdateFormOpen(true);
    };

    const handleUpdateFormClose = () => {
        setSelectedToy(null);
        setUpdateFormOpen(false);
    };

    const handleUpdateSubmit = (event) => {
        console.log(selectedToyId);
        event.preventDefault();
        const form = event.target;
        const Price = form.Price.value;
        const AvailableQuantity = form.AvailableQuantity.value;
        const Description = form.Description.value;
        const updatedToy = { Price: Price, AvailableQuantity: AvailableQuantity, Description: Description }
        // console.log(Price,AvailableQuantity,Description);
        fetch(`https://toy-car.vercel.app/toy/${selectedToyId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Add Toy Successfully, Please refresh')
                }
            })


        handleUpdateFormClose();
    };

    const handleDeleteClick = (id) => {
        setSelectedToyId(id);
        setDeleteConfirmationOpen(true);
    };

    const handleDeleteConfirm = () => {
        // Perform toy deletion logic here
        fetch(`https://toy-car.vercel.app/deleteToy/${selectedToyId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    setToys((prevToys) => prevToys.filter((toy) => toy._id !== selectedToyId));
                    setDeleteConfirmationOpen(false);
                }
            })


    };

    const handleDeleteCancel = () => {
        setSelectedToy(null);
        setDeleteConfirmationOpen(false);
    };

    return (
        <div className='max-w-7xl mx-auto mb-9'>
            <h2 className='text-2xl text-center mt-9'>My Toys</h2>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Available Quantity</TableCell>
                            <TableCell>Detail Description</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {toys.map((toy) => (
                            <TableRow key={toy._id}>
                                <TableCell>{toy.ToyName}</TableCell>
                                <TableCell>{toy.Price}</TableCell>
                                <TableCell>{toy.AvailableQuantity}</TableCell>
                                <TableCell>{toy.Description}</TableCell>
                                <TableCell>
                                    <Button variant="contained" onClick={() => handleUpdateClick(toy._id)}>
                                        Update
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(toy._id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Update Form Modal  */}
            <Modal open={updateFormOpen} onClose={handleUpdateFormClose}>
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-slate-600 rounded-lg shadow-lg w-[640px] max-h-[80vh]">
                        <form className='p-9' onSubmit={handleUpdateSubmit}>
                            <TextField
                                label="Price"
                                name="Price"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Available Quantity"
                                name="AvailableQuantity"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Detail Description"
                                name="Description"
                                fullWidth
                                required
                            />
                            <Button type="submit" variant="contained" color="primary">
                                Update
                            </Button>
                        </form>
                    </div>
                </div>

            </Modal>

            {/* Delete Confirmation Dialog */}
            <Dialog open={deleteConfirmationOpen} onClose={handleDeleteCancel}>
                <DialogTitle>Delete Confirmation</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to delete the toy?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteCancel} variant="outlined" color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteConfirm} variant="contained" color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            {loading && <div class="flex items-center justify-center h-screen">
                <div class="flex flex-col items-center space-y-4">
                    <div class="spinner"></div>
                    <p class="text-gray-500">Loading...</p>
                </div>
            </div>}

        </div>
    );
};

export default MyToys;
