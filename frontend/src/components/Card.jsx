import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import axiosInstance from '../lib/axios';
import toast from 'react-hot-toast';

function Card({note,setNotes}) {
  const handleDelete = async (e,id) => {
    e.preventDefault(); // Prevent the default link behavior

    if (!window.confirm("Are you sure you want to delete this note?")) return;
    // Implement delete functionality here
    try {
      await axiosInstance.delete(`/notes/delete/${id}`);
      setNotes((prev) => prev.filter(note => note._id !== id)) //get rid of the deleted one
      toast.success("Note deleted successfully");
      // console.log(res);
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
    // For example, you can call an API to delete the note
    console.log(`Delete note with ID: ${note._id}`);
  }
  
  return (
    <Link to={`/note/${note._id}`} className='container mx-auto p-12 grid grid-cols-2 gap-8 mt-4'>
      <div className='card-body **container mx-auto** **p-8 w-96 h-48** **shadow-md** rounded-2xl bg-base-200 border-t-4 border-solid border-green-600 hover:shadow-lg transition-all duration-200'>
        <h1 className='card-title text-base-content'>{note.title}</h1>
        <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
        <div className='flex justify-between items-center'>
          <span className='text-sm text-base-content/60'>
            {new Date(note.createdAt).toLocaleTimeString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <div className='flex items-center  gap-1'>
              <PenSquareIcon className='size-4 text-primary' />
              <button className='btn btn-ghost btn-xs text-error' onClick={(e) => handleDelete(e, note._id)}>
                <Trash2Icon className='size-4'/>
              </button>
          </div>
        </div>
      </div>
      {/* <div className='container mx-auto  items-center p-8 w-96 h-48 shadow-md rounded-2xl bg-base-200 border-t-4 border-green-600'>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis nisi ex.</p>
        <span>12:24pm</span>
      </div>
      <div className='container mx-auto  items-center p-8 w-96 h-48 shadow-md rounded-2xl bg-base-200 border-t-4 border-green-600'>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis nisi ex.</p>
        <span>12:24pm</span>
      </div>
      <div className='container mx-auto  items-center p-8 w-96 h-48 shadow-md rounded-2xl bg-base-200 border-t-4 border-green-600'>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis nisi ex.</p>
        <span>12:24pm</span>
      </div> */}
    </Link>
  )
}

export default Card

