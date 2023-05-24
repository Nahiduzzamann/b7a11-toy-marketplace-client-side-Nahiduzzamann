import React, { useContext, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
        const PictureURL = form.PictureURL.value;
        const ToyName = form.ToyName.value;
        const SellerName = form.SellerName.value;
        const SellerEmail = user.email;
        const SubCategory = form.SubCategory.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const AvailableQuantity = form.AvailableQuantity.value;
        const Description = form.Description.value;
        const toyData = {
          PictureURL, 
          ToyName,
          SellerName, 
          SellerEmail:SellerEmail,
          SubCategory,
          Price,
          Rating,
          AvailableQuantity,
          Description
        }
    console.log(toyData); 
    fetch('https://toy-car.vercel.app/addToy', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(toyData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data){
                alert('Add Toy Successfully')
            }
        })
  };

  return (
    <div className='max-w-7xl mx-auto mb-9'>
      <h2 className='text-2xl text-center mt-9'>Add A Toy</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Picture URL"
          name="PictureURL"
          fullWidth
          required
        />
        <TextField
          label="Toy Name"
          name="ToyName"
          fullWidth
          required
        />
        <TextField
          label="Seller Name"
          name="SellerName"
          fullWidth
          required
        />
        <TextField
          label="Seller Email"
          name="SellerEmail"
          value={user.email}
          fullWidth
          required

        />
        <TextField
          label="Sub-category"
          name="SubCategory"
          fullWidth
          required
        />
        <TextField
          label="Price"
          name="Price"
          fullWidth
          require
        />
        <TextField
          label="Rating"
          name="Rating"
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
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Toy
        </Button>
      </form>
    </div>
  );
};

export default AddToy;
