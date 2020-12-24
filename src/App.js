import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Button from './components/Button/Button';
import imageApi from './components/services/ImageApi';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGalerry from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import LoaderSpin from './components/Loader/Loader';

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [modalImageId, setModalImageId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading('true');
    imageApi
      .fetchImages(query, page)
      .then(img => {
        setImages(prevImages => [...prevImages, ...img.hits]);
        setPage(page);
      })
      .catch(error => {
        throw new Error(error);
      })
      .finally(
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }),
        setIsLoading(false),
      );
  }, [page, query]);

  const onSearch = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onOpenModal = e => {
    setOpenModal(true);
    setModalImageId(Number(e.currentTarget.id));
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const imageFind = () => {
    const largeImg = images.find(image => {
      return image.id === modalImageId;
    });
    return largeImg;
  };

  return (
    <>
      <Searchbar onSubmit={onSearch} />
      <ImageGalerry openModal={onOpenModal} images={images} />
      {isLoading && <LoaderSpin />}
      <Button fetchImages={loadMore} />
      <ToastContainer autoclose={3000} />
      {openModal && (
        <Modal id={modalImageId} onClose={closeModal}>
          <img src={imageFind().largeImageURL} alt={imageFind().tags}></img>
        </Modal>
      )}
    </>
  );
}

// class App extends Component {
//   state = {
//     images: [],
//     page: 1,
//     query: null,
//     modalImage: [],
//     modalImageID: null,
//     openModal: false,
//     isLoading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.query !== this.state.query ||
//       prevState.page !== this.state.page
//     ) {
//       this.fetchImg();
//     }
//   }

//   onSearch = (query) => {
//     this.setState({ query, images: [], page: 1 });
//   };

//   fetchImg() {
//     const { query, page, images } = this.state;
//     this.setState({ isLoading: true });
//     imageApi
//       .fetchImages(query, page)
//       .then((img) =>
//         this.setState({
//           images: [...images, ...img.hits],
//           page: page,
//         })
//       )
//       .catch((error) => {
//         throw new Error(error);
//       })
//       .finally(
//         this.setState({ isLoading: false }),
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: "smooth",
//         })
//       );
//   }

//   loadMore = () => {
//     this.setState((prevState) => ({ page: prevState.page + 1 }));
//   };

//   onOpenModal = (e) => {
//     this.setState({
//       openModal: true,
//       modalImageID: Number(e.currentTarget.id),
//     });
//   };

//   closeModal = () => {
//     this.setState({ openModal: false });
//   };

//   imageFind = () => {
//     const largeImg = this.state.images.find((image) => {
//       return image.id === this.state.modalImageID;
//     });

//     return largeImg;
//   };

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.onSearch} />
//         <ImageGalerry openModal={this.onOpenModal} images={this.state.images} />
//         {this.state.isLoading && <LoaderSpin />}
//         <Button fetchImages={this.loadMore} />
//         <ToastContainer autoclose={3000} />
//         {this.state.openModal && (
//           <Modal id={this.state.modalImageID} onClose={this.closeModal}>
//             <img
//               src={this.imageFind().largeImageURL}
//               alt={this.imageFind().tags}
//             ></img>
//           </Modal>
//         )}
//       </>
//     );
//   }
// }

// export default App;

// fetchImg(){
//     setIsLoading('true');
//     imageApi
//       .fetchImages(query, page)
//       .then(img => {
//         setImages([...images, ...img.hits]);
//         setPage(page);
//       })
//       .catch(error => {
//         throw new Error(error);
//       })
//       .finally(
//         setIsLoading(false),
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         }),
//       );
//   };
