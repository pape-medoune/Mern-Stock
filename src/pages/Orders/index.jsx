import React, { useState, useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { BiSolidEdit } from "react-icons/bi";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import "../styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../../components/Sidebar";  
import sidebar_menu from "../../constants/sidebar-menu";

function Orders() {
  const [element, setElement] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const fetchElement = async () => {
    const response = await fetch("http://localhost:4400/display");
    const data = await response.json();

    setElement(data);
  };

  const [nomproduit, setNomproduit] = useState();
  const [description, setDescription] = useState();
  const [prix, setPrix] = useState();
  const [image, setImage] = useState([]);

  console.log(element);

  useEffect(() => {
    fetchElement();
  }, []);
  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = element.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(element.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const notifyInfo = () => {
    // Set to 3sec
    toast.info("La mise à jours s'est fait avec succés!", { autoClose: 3000 });
    // .then(()=>console.log("notify affiché successfully!"))
    // .catch((err)=>console.log("Erreur notify!"))
  };

  const renderPageNumbers = pageNumbers.map((number) => (
    <button
      key={number}
      onClick={() => setCurrentPage(number)}
      className={`px-3 py-2 ${
        number === currentPage
          ? "bg-blue-500 text-white"
          : "bg-white text-gray-600"
      } hover:bg-blue-300 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white rounded-lg`}
    >
      {number}
    </button>
  ));

  const maj = async (id) => {
    const formData = new FormData();
    formData.append("nomproduit", nomproduit);
    formData.append("description", description);
    formData.append("prix", prix);
    formData.append("image", image);

    try {
      const response = await axios.put(
        `http://localhost:4400/maj?id=${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setElement(response.data);
      toast.success('Contenue modifié avec succés');
    } catch (err) {
      console.error("Error: " + err);
      toast.error('Erreur lors de la modification ');
    }
  };

  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const toggleModalEdit = () => {
    setIsModalOpenEdit(!isModalOpenEdit);
  };

  const supprimerProduit = (id) => {
    window.confirm("Etes vous sur de vouloir supprimer le produit ?").then(
      axios
        .delete(`http://localhost:4400/delete?id=${id}`)
        .then((res) => {
          console.log("Success supp");
          toast.success(` Produit  supprimé avec succés `);
        })
        .catch((err) => {
          console.error("Amna erreur !" + err);
          toast.error(`Erreur lors de la suppression du produit`);
        })
    );
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  return (
    <div className="w-full h-fit flex flex-row">
      <SideBar menu={sidebar_menu} />
      <div className="w-full">
        {" "}
        <DashboardHeader btnText="New Order" />
        <div className=" w-full flex items-center flex-col ">
          <table className="w-full flex flex-col  text-sm text-left  text-gray-500 dark:text-gray-400">
            <thead className="text-xs flex   text-gray-200 uppercase  bg-gray-700">
              <tr className="w-full dark:bg-sky-800 grid grid-cols-5">
                <th scope="col" className="px-6 py-3">
                  Nom du produit
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Prix
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="">
              {currentItems.map((ele) => (
                <tr
                  className="w-full grid grid-cols-5 dark:text-black dark:text-lg  bg-white border-b  dark:bg-grey-800 dark:border-gray-700 hover:bg-gray-800 dark:hover:text-white dark:hover:bg-gray-950"
                  key={ele._id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4font-medium text-gray-900dark:border-gray-700 hover:bg-gray-800 dark:hover:text-white dark:hover:bg-gray-950  whitespace-nowrap  w-fit flex justify-center items-center"
                  >
                    {ele.nomproduit}
                  </th>
                  <td className="px-6 py-4    w-fit h-fit flex justify-end items-center ">
                    {ele.description}
                  </td>
                  <td className="px-6 py-4  w-fit h-fit flex justify-end items-center">
                    {ele.prix}
                  </td>
                  <td className="px-6 py-4 w-fit h-fit flex justify-end items-center">
                    <img
                      src={require(`../../assets/imagesProduits/${ele.image}`)}
                      alt={ele.nom}
                      className="w-20 h-20 cover rounded-md"
                    />
                  </td>

                  <td className="px-6 py-4 flex items-center h-full gap-4">
                    <div>
                      <button
                        id="defaultModalButton"
                        data-modal-toggle="defaultModalEdit"
                        className="block text-white font-bold bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 -rounded-lg text-sm px-5 py-2.5 text-center "
                        type="button"
                        onClick={toggleModalEdit}
                      >
                        <BiSolidEdit />
                      </button>

                      {isModalOpenEdit && (
                        <div
                          id="defaultModalEdit"
                          tabIndex="-1"
                          aria-hidden="true"
                          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen"
                          onClick={toggleModalEdit}
                        >
                          <div className="relative p-4 w-full max-w-2xl md:h-auto">
                            <div
                              className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                  Modifier Produit
                                </h3>
                                <button
                                  type="button"
                                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                  onClick={toggleModalEdit}
                                >
                                  <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                  <span className="sr-only">Close modal</span>
                                </button>
                              </div>

                              <form
                                encType="multipart/form-data"
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  notifyInfo();
                                }}
                              >
                                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                  <div>
                                    <label
                                      htmlFor="name"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                      Nom Produit
                                    </label>
                                    <input
                                      type="text"
                                      name="nom"
                                      id="name"
                                      value={nomproduit}
                                      onChange={(e) => {
                                        setNomproduit(e.target.value);
                                      }}
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Nom du produit"
                                      required
                                    />
                                  </div>

                                  <div>
                                    <label
                                      htmlFor="prix"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                      Prix
                                    </label>
                                    <input
                                      type="text"
                                      name="prix"
                                      id="prix"
                                      value={prix}
                                      onChange={(e) => {
                                        setPrix(e.target.value);
                                      }}
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Prix de ce produit"
                                      required
                                    />
                                  </div>

                                  <div>
                                    <label
                                      htmlFor="Description"
                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                      Description
                                    </label>
                                    <input
                                      type="text"
                                      name="description"
                                      id="Description"
                                      value={description}
                                      onChange={(e) => {
                                        setDescription(e.target.value);
                                      }}
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Description"
                                      required
                                    />
                                  </div>

                                  <div>
                                    <label
                                      htmlFor="name"
                                      className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-white"
                                    >
                                      Image
                                    </label>
                                    <input
                                      type="file"
                                      name="image"
                                      // value={image}
                                      id="image"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      onChange={(e) =>
                                        setImage(e.target.files[0])
                                      }
                                      required
                                    />
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                  onClick={() => maj(ele._id)}
                                >
                                  <svg
                                    className="mr-1 -ml-1 w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                  Modifier le produit
                                </button>
                              </form> 
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      className="block text-white font-bold bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 -rounded-lg text-sm px-5 py-2.5 text-center "
                      type="button"
                      onClick={() => {
                        supprimerProduit(ele._id);
                      }}
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-center space-x-2">
            {renderPageNumbers}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Orders;
