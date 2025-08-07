import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import axiosInstance from '../lib/axios';
// import Form from '../components/Form';
const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!title.trim() || !content.trim()) {
      toast.error('Title and Content are required.');
      return;
    }
    // Set loading state
    setLoading(true);
    try {
      // Create a new note
      await axiosInstance.post('/notes/create', {
        title,
        content,
      });
      // Show success message
      toast.success('Note created successfully!');
      // Redirect to home page
      navigate('/');
      console.log('Form submitted:', { title, content });
    } catch (error) {
      toast.error('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen bg-base-200'>
        <div className='container mx-auto px-4 py-8'>
          <div className='max-w-2xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg'>
            <Link to={"/"} className="btn btn-ghost mb-6">
              <ArrowLeftIcon className="size-5 mr-2" />
              Back to Home
            </Link>

            <div className='card bg-base-100'>
                  <div className='card-body'>
                     <h2 className='card-title text-2xl mb-4'>Create New Post</h2>
                      <form onSubmit={handleSubmit} className='space-y-4'>
                        <div className='form-control mb-4'>
                          <label className='label'>
                            <span className='label-text'>Title</span>
                          </label>
                          <input
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='input input-bordered w-full'
                            // required
                          />
                        </div>

                        <div className='form-control'>
                          <label className='label'>
                            <span className='label-text'>Content</span>
                          </label>
                          <textarea
                            placeholder='Write your post content here...'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className='textarea textarea-bordered w-full'
                            rows='4'
                            // required
                          ></textarea>
                        </div>
                        
                        <div className='card-actions justify-end'>
                              <button type='submit' className='btn btn-primary' disabled={loading}>
                                {loading ? 'Creating...' : 'Create Note'}
                              </button>
                        </div>
 
                      </form>
                  </div>
            </div>
          </div>
        </div>

        
    </div>
  )
}

export default CreatePage
