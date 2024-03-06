import React from 'react';
import Modal from 'react-modal';
import ImageModal from "../ImageModal/ImageModal"
import { useState, useEffect } from "react";

import styles from "../ImageCard/ImageCard.module.css"

const ImageCard = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  
  const closeModal = () => {
    setModalIsOpen(false);
  };
  
    return (
      <div>
      <img  className={styles.image} src={data.urls.small} alt={data.title} onClick={openModal} />
      <ImageModal isOpen={modalIsOpen} isClose={closeModal} data={data} />
     </div>

     
   ) 
  };

export default ImageCard;