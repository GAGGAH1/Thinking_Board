import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router';
import axiosInstance from '../lib/axios';
import toast from 'react-hot-toast';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react';

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  // const id = useParams().id; // Same thing as the destructured one
  const { id } = useParams();

  // console.log({id}); // Best practice

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axiosInstance.get(`/notes/${id}`);
        setNote(res.data);

      } catch (error) {
        console.log("Error in fetching note", error)
        toast.error("Failed to fetch the note")
      } finally {
        setLoading(false)
      }
    }
    fetchNote();
  }, [id]);

   const handleDelete = async () => {
    if(!window.confirm("Are you sure you want to delete this note? This action cannot be undone.")) return;
    try {
      await axiosInstance.delete(`/notes/delete/${id}`);
      toast.success("Note deleted successfully");
      navigate('/');
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete the note");
    }
   };


  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Title and Content are required.");
      return;
    }

    setSaving(true);
    try {
      await axiosInstance.put(`/notes/update/${id}`, note);
      toast.success("Note updated successfully");
      navigate('/');
    } catch (error) {
      console.error("Error saving note:", error);
      toast.error("Failed to save the note");
    } finally {
      setSaving(false);
    }
  };
  console.log({note})


  if (loading) {
    return  (
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10'/>
      </div>
    );
    }

  return (
    <div className='min-h-screen bg-base-300'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
            <div className='flex items-center justify-between mb-6'>
              <Link to="/" className="btn btn-ghost ">
                  <ArrowLeftIcon className='h-5 w-5'/>
                  Back to Notes
              </Link>
              <button onClick={handleDelete} className='btn btn-error btn-outline'>
                <Trash2Icon className='h-5 w-5'/>
                Delete Note
              </button>
            </div>

            <div className='card bg-base-100'>
                <div className="card-body">
                    <div className='form-control mb-4'>
                          <label className='label'>
                            <span className='label-text'>Title</span>
                          </label>
                          <input
                            type='text'
                            value={note.title}
                            onChange={(e) => setNote({...note,title:e.target.value})}
                            className='input input-bordered '
                            placeholder='Note title'
                          />
                    </div>
                    <div className='form-control mb-4'>
                          <label className='label'>
                            <span className='label-text'>Content</span>
                          </label>
                          <textarea
                            value={note.content}
                            onChange={(e) => setNote({...note,content:e.target.value})}
                            className='textarea textarea-bordered '
                            rows='6'
                            placeholder='Write your note content here...'
                          ></textarea>

                    </div>

                    <div className="card-actions justify-end">
                      <button className='btn btn-primary' disabled={saving} onClick={handleSave}>
                        {saving ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage
