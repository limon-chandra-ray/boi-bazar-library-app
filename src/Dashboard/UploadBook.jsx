import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { BaseUrl } from '../Constant/ApiDoamin';
import Navbar from '../pages/shared/Navbar';

const UploadBook = () => {
  const bookCategories = [
    "programming",
    "electronics",
    "software",
    "networking",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const author = form.author.value;
    const image = form.imageURL.value;
    const category = selectedBookCategory; // Use the selected book category
    const bookDescription = form.bookDescription.value;
    const rating = parseFloat(form.rating.value); // Convert rating to a number
    const quantity = parseInt(form.quantity.value); // Convert quantity to an integer

    const bookObj = {
      name,
      author,
      image,
      category,
      bookDescription,
      rating,
      quantity,
    };

    fetch(`${BaseUrl}upload-book`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Book updated successfully!!!!");
        form.reset();
      });
  };

  return (
    <div>
      <Navbar/>
      <h2 className="text-4xl pt-24 text-center bg-pink-200 text-teal-300 font-bold">Upload A Book!</h2>
      <div className='flex justify-center py-5'>
        <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleSubmit}>
          {/* first row */}
          <div className='flex gap-8'>
            {/* book name */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="name" value="name" />
              </div>
              <TextInput id="name" placeholder="Book Name" required type="text" name='name' className='w-full' />
            </div>

            {/* author name */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="author" value="Author Name" />
              </div>
              <TextInput id="author" placeholder="Author" required type="text" name='author' className='w-full' />
            </div>
          </div>

          {/* 2nd Row */}
          <div className='flex gap-8'>
            {/* book url */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="image" value="image" />
              </div>
              <TextInput id="image" placeholder="Image URL" required type="text" name='imageURL' className='w-full' />
            </div>

            {/* book category */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
              </div>
              <Select id="inputState" name="categoryName" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                {bookCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          {/* quantity */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <TextInput id="quantity" placeholder="Quantity" required type="number" name='quantity' className='w-1/5' />
          </div>

          {/* rating */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="rating" value="Rating" />
            </div>
            <TextInput id='rating' placeholder="Rating" required type="number" name='rating' className='w-1/5' />
          </div>

          {/* full width div for book description */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="desc" value="Description" />
            </div>
            <Textarea id="desc" placeholder="Book Description" required type="text" name='bookDescription' className='w-full' rows={4} />
          </div>

          {/* Submit btn */}
          <Button className="bg-red-300 mt-5" type="submit">
            Add Book
          </Button>
        </form>
      </div>
    </div>
  )
}

export default UploadBook