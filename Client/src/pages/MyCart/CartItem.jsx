import { FaBeer, FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteNftBit } from '../../features/nftBit/nftBitSlice';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const CartItem = ({ singleBit, index }) => {
    const { image, person, name, ethereum, ethValue, id } = singleBit
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        toast.success("Delete Nft")
        dispatch(deleteNftBit(id))
    }
    return (
        <tbody>
            <tr className="w-full">
                <th>{index + 1} </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {ethValue}
                </td>
                <td className="flex gap-2">
                    {
                        person.map((image, index) => <img key={index} src={image} alt="image" />)
                    }
                </td>
                <td >
                    <div className="flex gap-5 items-center justify-center">

                        <button onClick={() => handleDelete(singleBit.id)} className='bg-red-300 px-2 rounded-md py-2'><FaTrash className='text-white font-semibold text-xl'></FaTrash></button>
                        <Link to={`/myCart/updateNft/${id}`}>
                            <button  className='bg-red-300 px-2 rounded-md py-2'><FaEdit className='text-white font-semibold text-xl'></FaEdit></button>
                        </Link>
                        <Toaster></Toaster>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default CartItem;