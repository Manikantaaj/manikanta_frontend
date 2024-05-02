import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Todo = () => {
    const [products, setProducts] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://p-9x7e.onrender.com/products/products");
            setProducts(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDelete = async (deleteId) => {
        try {
            const res = await axios.delete(`https://p-9x7e.onrender.com/products/delete-product/${deleteId}`);
            if (res.data.error) {
                alert(res.data.message);
            } else {
                alert(res.data.message);
                fetchData();
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleAdd = async () => {
        try {
            const res = await axios.post("https://p-9x7e.onrender.com/products/add-product", {
                pName: productName,
                pPrice: productPrice
            });
            if (res.data.error) {
                alert(res.data.message);
            } else {
                alert(res.data.message);
                setShowAddModal(false);
                setProductName('');
                setProductPrice('');
                fetchData();
            }
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const handleEdit = async () => {
        try {
            const res = await axios.put(`https://p-9x7e.onrender.com/products/edit-product/${editProduct._id}`, {
                pName: productName,
                pPrice: productPrice
            });
            if (res.data.error) {
                alert(res.data.message);
            } else {
                alert(res.data.message);
                setShowEditModal(false);
                setProductName('');
                setProductPrice('');
                setEditProduct(null);
                fetchData();
            }
        } catch (error) {
            console.error("Error editing product:", error);
        }
    };

    const handleEditClick = (product) => {
        setShowEditModal(true);
        setEditProduct(product);
        setProductName(product.pName);
        setProductPrice(product.pPrice);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <Button variant="info" onClick={() => setShowAddModal(true)}>Add Product</Button>
                    </div>
                    <Card>
                        <Card.Body>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>P Id</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product._id}>
                                            <td>{product._id}</td>
                                            <td>{product.pName}</td>
                                            <td>{product.pPrice}</td>
                                            <td>{product.date}</td>
                                            <td>
                                                <div style={{ textAlign: 'right' }}>
                                                    <Button variant="danger" onClick={() => handleDelete(product._id)}>Delete</Button>
                                                    <Button variant="info" onClick={() => handleEditClick(product)}>Edit</Button>
                                                    <input type="checkbox" name="" id="" />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Card.Body>
                    </Card>

                    <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formProductPrice">
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
                            <Button variant="primary" onClick={handleAdd}>Add</Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formProductPrice">
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
                            <Button variant="primary" onClick={handleEdit}>Save Changes</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default Todo;
