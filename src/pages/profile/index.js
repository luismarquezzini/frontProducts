import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import placeholder from '../../assets/logo.svg'

import api from '../../services/api'

import './styles.css'

export default function Profile() {
    const history = useHistory();
    const [products, setProducts] = useState([]);

    useEffect( () => {
        api.get('products')
        .then( response => {
            setProducts(response.data.produtos);
        })
    }, []);

    async function handleDeleteProduct(id){
        api.delete('products/' + id)
        .then( () => {
            toast.success("Produto deletado com sucesso");
            setProducts(products.filter(product => product.id !== id));
        })
        .catch( () => {
            toast.error("Houve um erro na hora de deletar o produto");
        })
    }

    return (
        <div className="profile-container">

            <h1>Produtos salvos</h1>

            <ul>
                {products.map(product => (
                <li key={product._id}>
                    <div className="product-container">
                        <div className="product__photo">
                            <div className="photo-container">
                                <div className="photo-main">
                                    <img src={placeholder} alt="product image"></img>
                                </div>
                            </div>
                        </div>
                        <div className="product__info">
                            <div className="title">
                                <h1>{product.sku}</h1>
                                <span>Quantidade: {product.id}</span>
                            </div>
                            <div className="price">
                                {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.preco)}
                            </div>
                            <div className="description">
                                <h3>Descrição:</h3>
                                <ul>
                                    <li>Description placeholder</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <button onClick={() => handleDeleteProduct(product.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))
                }
            </ul>
        </div>
    );
}
