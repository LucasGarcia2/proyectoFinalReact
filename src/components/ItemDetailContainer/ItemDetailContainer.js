import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);


  const { itemId } = useParams();
  
  useEffect(() => {
    setLoading(true);
  
    const q = query(collection(db, 'products'), where('id', '==', itemId));
  
    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const productData = querySnapshot.docs[0].data();
          const productAdapted = { id: querySnapshot.docs[0].id, ...productData };
          setProduct(productAdapted);
        } else {
          console.log('No se encontró el producto');
        }
  
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error al obtener los datos del producto:', error);
        setLoading(false);
      });
  }, [itemId]);
  

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {product ? (
            <ItemDetail {...product} />
          ) : (
            <div>No se encontró el producto</div>
          )}
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
