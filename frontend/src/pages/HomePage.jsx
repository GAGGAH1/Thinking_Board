import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import toast from 'react-hot-toast';
import axiosInstance from '../lib/axios';
import NotesNotFound from '../components/NotesNotFound';
import RateLimitedUI from '../components/RateLimitedUI';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchNotes = async () => {
        try {
            const response = await axiosInstance.get('notes/all');
            
            setNotes(response.data);
            setIsRateLimited(false); // Set to false on success
            console.log(response.data);
        } catch (error) {
            console.error('Failed to fetch notes:', error);
            if (error.response?.status === 429) {
                setIsRateLimited(true);
            } else {
                toast.error('Failed to fetch notes. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    }
    
        fetchNotes();
    }, []); 

  return (
    <div className='min-h-screen '>
        <NavBar />
        
        {isRateLimited && <RateLimitedUI />}
       
       <div className='max-w-7xl mx-auto p-4 mt-6'> 
            {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}

            {notes.length === 0 && !isRateLimited && <NotesNotFound />}

            {notes.length > 0 && !isRateLimited && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {notes.map(note => (
                <Card key={note?._id} note={note} setNotes={setNotes}/>
                ))}
            </div>
            )}
       </div>
    </div>
  )
}

export default HomePage
