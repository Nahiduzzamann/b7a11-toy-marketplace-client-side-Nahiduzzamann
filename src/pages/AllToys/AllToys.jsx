import React, { useContext, useEffect, useState } from 'react';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import ToyModal from './ToyModal';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';


const AllToys = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const [searchTerm, setSearchTerm] = useState('');
    const [allToys, setAllToys] = useState([]);
    const [buttonVisible, setButtonVisible] = useState(true);

    useEffect(() => {
        fetch('https://toy-car.vercel.app/allToys20')
            .then(res => res.json())
            .then(data => setAllToys(data));
    }, [])

    const viewAll = () => {
        fetch('https://toy-car.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                setButtonVisible(false)
            });
    }
    //modal handle
    const [modalDetails, setModalDetails] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (toy) => {
        if (user) {
            setModalDetails(toy)
            setModalOpen(true);
        }
        else {
            navigate('/login')
        }

    };

    const closeModal = () => {
        setModalOpen(false);
    };



    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredToys = allToys.filter((toy) =>
        toy.ToyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='max-w-7xl mx-auto'>
            <TextField
                label="Search by Toy Name"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth
                sx={{ marginBottom: '1rem' }}
            />

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Seller</TableCell>
                            <TableCell>Toy Name</TableCell>
                            <TableCell>Sub-category</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Available Quantity</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredToys.map((toy, index) => (
                            <TableRow key={index}>
                                <TableCell>{toy.SellerName}</TableCell>
                                <TableCell>{toy.ToyName}</TableCell>
                                <TableCell>{toy.SubCategory}</TableCell>
                                <TableCell>{toy.Price}</TableCell>
                                <TableCell>{toy.AvailableQuantity}</TableCell>
                                <TableCell>
                                    <Button onClick={() => openModal(toy)} variant="contained" color="primary">
                                        View Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            { buttonVisible &&
                <Button onClick={viewAll} variant="contained" color="primary">
                View All
            </Button>
            }
            <ToyModal modalDetails={modalDetails} isOpen={modalOpen} closeModal={closeModal} />
        </div>
    );
};

export default AllToys;
