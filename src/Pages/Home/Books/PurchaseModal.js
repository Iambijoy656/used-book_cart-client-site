import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const PurchaseModal = ({ book, setBook }) => {
    const { user } = useContext(AuthContext)
    const { _id, book_title, resale_price } = book



    const handlePurchase = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value
        const meetingLocation = form.meetingLocation.value;
        const phone = form.phone.value;


        const buyerDetails = {
            bookId: _id,
            book: book_title,
            name,
            price: resale_price,
            email,
            phone,
            meetingLocation

        }


        fetch('http://localhost:5000/buyers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyerDetails)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBook(null)
                    toast.success('Order Confirmed')
                }
            })



    }

    return (
        <>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="purchaseModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{book_title}</h3>
                    <div className="flex items-center justify-center text-center  text-gray-900">
                        <form
                            onSubmit={handlePurchase}
                            noValidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded  text-gray-100 ng-untouched ng-pristine ng-valid">

                            <label htmlFor="name" className="self-start mt-3 text-xs text-black font-semibold">Your Name</label>
                            <input
                                defaultValue={user?.displayName}
                                name='name'
                                id="name" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary-400  input input-bordered" placeholder='Type your name' required />

                            <label htmlFor="phone" className="self-start mt-3 text-xs text-black font-semibold">Phone</label>
                            <input
                                name='phone'
                                id="password" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary-400  input input-bordered" placeholder='Type your Number' required />

                            <label htmlFor="email" className="self-start text-black text-xs font-semibold">Email</label>
                            <input
                                defaultValue={user?.email}
                                name='email'
                                id="email" type="email" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary-400  input input-bordered" placeholder='Type your email' required readOnly />

                            <label htmlFor="location" className="self-start text-black text-xs font-semibold mt-2">Meeting Location</label>
                            <input
                                name='meetingLocation'
                                id="location" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-secondary focus:ring-secondary-400  input input-bordered" placeholder='location' />

                            <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-sky-700 text-white">Submit</button>

                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PurchaseModal;