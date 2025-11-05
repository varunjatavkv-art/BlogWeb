
import { useDispatch, useSelector } from 'react-redux';
import { getFormData, resetForm } from '../../redux/reducers/blogReducer';
import { createBlog } from '../../redux/actions/blogActions';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, loading, success, error } = useSelector((state) => state.blog);
  const { userRole } = useSelector((state) => state.auth);

  const blogUserRole = userRole || JSON.Parse(localStorage.getItem("userRole"));

  console.log(blogUserRole);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(getFormData({ name, value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      dispatch(getFormData({ name: 'imageFile', value: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = new FormData();
    const imageFile = formData.imageFile; 
    
    if (imageFile) {
        dataToSubmit.append('blogImage', imageFile); 
    }
    
    dataToSubmit.append('title', formData.title);
    dataToSubmit.append('description', formData.description);
    dataToSubmit.append('created_at', Date.now());
    dataToSubmit.append('created_by', blogUserRole);

    dispatch(createBlog(dataToSubmit));
    dispatch(resetForm());
  };

  if(success){
    alert("Blog submitted successfully!");
    navigate("/user/pending-blogs")
  }

  return (
    <div className='w-full pt-10'>
      <h1 className="text-center text-2xl font-bold">User Add Blog</h1>

      {loading && <p className="text-center text-blue-500">Submitting...</p>}
      {success && <p className="text-center text-green-500">Blog submitted successfully!</p>}
      
      {/* FIX: Ensure error is rendered as a string to prevent React child error */}
      {error && (
        <p className="text-center text-red-500">
          Error: {typeof error === 'string' ? error : JSON.stringify(error)}
        </p>
      )}
      
      <form
        onSubmit={handleSubmit}
        className="w-1/2 m-auto p-20 flex flex-col gap-10 rounded-xl shadow-xl"
      >
        <div className="flex flex-col gap-5">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            name="blogImage"
            id="image"
            onChange={handleFileChange}
            className="p-2 cursor-pointer"
          />
        </div>
        
        <div className="flex flex-col gap-5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Please Enter Title here"
            className="p-2 border border-2 border-blue-500 rounded-md"
            value={formData.title || ''} 
            onChange={handleChange}
          />
        </div>
        
        <div className="flex flex-col gap-5">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Please Enter Description here"
            className="p-2 border border-2 border-blue-500 rounded-md"
            value={formData.description || ''}
            onChange={handleChange}
          />
        </div>
        
        <input
          type="submit"
          value={loading ? "Submitting..." : "Submit"}
          disabled={loading} 
          className="bg-blue-500 rounded-lg font-bold text-white p-2 cursor-pointer disabled:opacity-50"
        />
      </form>
    </div>
  )
}

export default AddBlog