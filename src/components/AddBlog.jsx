import React from 'react'

const AddBlog = () => {
  return (
     <div className='w-full'>
      <h1 className="text-center text-2xl font-bold">User Add Blog</h1>
      <form
        action=""
        className="w-1/2 m-auto p-20 flex flex-col gap-10 rounded-xl shadow-xl"
      >
        <div className="flex flex-col gap-5">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            name="image"
            id="image"
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
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="Please Enter Description here"
            className="p-2 border border-2 border-blue-500 rounded-md"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 rounded-lg font-bold text-white p-2 cursor-pointer"
        />
      </form>
    </div>
  )
}

export default AddBlog