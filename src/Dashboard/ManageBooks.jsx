import { Table } from 'flowbite-react'
import  { useEffect, useState } from 'react'
import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';
import  {useRef} from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { BaseUrl } from '../Constant/ApiDoamin';

const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    const tableRef = useRef(null);
    useEffect(() => {
        fetch(`${BaseUrl}all-books`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setAllBooks(data);
            });
    }, []);

    // delete a books
    const handleDelete = (id) => {
        // console.log(id)
        fetch(`${BaseUrl}book/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            // setAllBooks(data);
          });
      };


    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = () => setCurrentPage(page);

    return (
        <div className='px-4 my-18'>
            <h2 className='mb-8 text-3xl font-bold'>Manager Your Books Inventory!</h2>

            <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Export excel </button>

                </DownloadTableExcel>

            {/* table */}

            <Table className='lg:w-[1180px]' ref={tableRef}>
                <Table.Head>
                    <Table.HeadCell>
                        No.
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Edit or Manage
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Book name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Author Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Category
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    
                </Table.Head>

                {
                    allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell>
                                <Link
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5 btn btn-danger"
                                    to={`/admin/dashboard/edit-books/${book._id}`}
                                >
                                    Edit
                                </Link>
                                <button className='bg-teal-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 ' onClick={() => handleDelete(book._id)}>Delete</button>

                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {book.name}
                            </Table.Cell>
                            <Table.Cell>
                                {book.author}
                            </Table.Cell>
                            <Table.Cell>
                                {book.category}
                            </Table.Cell>
                            <Table.Cell>
                                $5.99
                            </Table.Cell>
                            
                            
                        </Table.Row>
                    </Table.Body>)
                }
            </Table>

            {/* pagination */}
            <div className="flex items-center justify-center text-center mt-8">
                <Pagination
                    currentPage={1}
                    layout="pagination"
                    nextLabel="Go forward"
                    onPageChange={page => { setCurrentPage(page) }}
                    previousLabel="Go back"
                    showIcons
                    totalPages={1000}
                />
            </div>
        </div>
    )
}

export default ManageBooks