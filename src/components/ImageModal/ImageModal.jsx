import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(40, 40, 40, 0.9)'
    },
    content: {
  
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', 
     
      border: 'none',
      background: 'none',
      overflow: 'hidden',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
  
   
    }
  };
  
  Modal.setAppElement('#root');

const ImageModal = ({ isOpen,isClose,data }) => {

  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

    return <Modal
    isOpen={isOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={isClose}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    style={customStyles}
  >


   <img src={data.urls.regular} alt={data.title} />
   
   
  </Modal>
}


export default ImageModal