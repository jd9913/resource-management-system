import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Button, ButtonGroup } from "react-bootstrap";

function ProductScreen({ match }) {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${match.params.dataid}`);

			setProduct(data);
		};
		fetchProduct();
	}, [match]);

	return (
		<>
			<Link className='btn btn-dark my-3' to='/ '>
				Go Back
			</Link>
			<Row className='py-4'>
				<Col md={3}>
					<h2>{product.itemName}</h2>
					<p>{product.description}</p>
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							Beltmann Total:{" "}
							{product.beltmannBal > 0
								? `${product.beltmannBal}`
								: "No Inventory"}
						</ListGroup.Item>
						<ListGroup.Item>
							Daniels Total:{" "}
							{product.danielsBal > 0
								? `${product.danielsBal}`
								: "No Inventory"}
						</ListGroup.Item>
						<ListGroup.Item>
							Dircks Total:{" "}
							{product.dircksBal > 0 ? `${product.dircksBal}` : "No Inventory"}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<Row>
								<Col>
									<ButtonGroup>
										<Button
											className='btn'
											type='button'
											disabled={product.beltmannBal === 0}>
											Take from Beltmann
										</Button>
										<Button
											className='btn'
											type='button'
											disabled={product.danielsBal === 0}>
											Take from Daniels
										</Button>
										<Button
											className='btn'
											type='button'
											disabled={product.dircksBal === 0}>
											Take from Dircks
										</Button>
									</ButtonGroup>
								</Col>
							</Row>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</>
	);
}

export default ProductScreen;
