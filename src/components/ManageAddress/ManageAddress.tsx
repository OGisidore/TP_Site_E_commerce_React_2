/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 03/04/2024 14:52:34
*/
import React, { FC, useEffect, useState } from 'react';
import './ManageAddress.css';
import AddressForm from '../AddressForm/AddressForm';
import { Address } from '../../models/Address';
import { deleteData, searchDatas } from '../../api/entities';
import { RequestResponse } from '../../models/requestResponse';
import { useDispatch } from 'react-redux';
import { ADD_NOTIFICATION } from '../../redux/actions/actionTypes';
import { generateID } from '../../Helpers/utiles';
import { useSelector } from 'react-redux';
import { getUserID } from '../../redux/selectors/GlobalSelectors';


interface ManageAddressProps {
  checkout? : boolean
  updateAddress? : (data : Address[])=> void

}


const ManageAddress: FC<ManageAddressProps> = ({checkout , updateAddress}) => {

  const [openForm, setOpenForm] = useState<boolean>(false)
  const [isloading, setIsLoading] = useState<boolean>(true)
  const userId = useSelector(getUserID)
  const [addressList, setAddressList] = useState<Address[]>([])
  const [currentAddress, setCurrentAddress] = useState<Address | undefined>()
  const dispatch = useDispatch()


  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {
      let query = "user=" + userId
      const data: RequestResponse = await searchDatas("address", query)
      if (data.isSuccess) {
        console.log(data.results);

        setAddressList((data.results as Address[]))
        if (updateAddress) {
          updateAddress((data.results as Address[]))
        }
        
        setIsLoading(true)

      }


    }
    console.log(addressList);

    runLocalData()
  }, [openForm, isloading])
  const handleEdit = (event: any, address: Address) => {
    setCurrentAddress(address)
    console.log(address);
    setOpenForm(true)


    event.preventDefault()
  }
  const handleDelete = async (event: any, address: Address) => {
    event.preventDefault()
    if (address._id) {
      await deleteData("address", address._id)
      const newAddresses = addressList.filter((currentAdd: Address) => currentAdd._id !== address._id)
      setAddressList(newAddresses)
      dispatch({
        type: ADD_NOTIFICATION,
        payload: {
          _id: generateID(),
          message: " address   deleted !",
          status: "success",
          timeout: 2000
        }
      })

    }




   
  }

  const handleCancel = () => {
    setOpenForm(false)
    setCurrentAddress(undefined)
  }


  return (
    <div className="ManageAddress">


      {
        openForm ?
          <AddressForm
            current_={currentAddress}
            cancel={() => handleCancel()} />
          :
          <>
            <a
              onClick={() => setOpenForm(true)} href="#" className="btn btn-fill-out">Add new Address</a>
              {
                addressList.length && !checkout?
                <div className="card">
              <div className="card-header">
                <h3>Your Addresses</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>address</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {

                        addressList?.map((address: Address, index: number) => {
                          return <tr key={address._id}>
                            <td>{index + 1}</td>
                            <td>{address.name} {address.city} {address.state} {address.street} {address.phone} </td>
                            <td>
                              <a href="#" className="btn btn-fill-out btn-sm" onClick={(event) => handleEdit(event, address)} >Edit</a>
                              <a href="#" className="btn btn-fill-out btn-sm" onClick={(event) => handleDelete(event, address)}>Delete</a>
                            </td>
                          </tr>
                        })
                      }

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
                :
                null
              }


            

          </>

      }
    </div>
  );
}

export default ManageAddress;