import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Card.Body>
				<a href={`/product/${product.dataid}`}>
					<Card.Title as='div'>
						<strong>{product.itemName}</strong>
					</Card.Title>
				</a>
				<Card.Text as='div'>
					<div className='my-3'> total available: {product.totalBal}</div>
				</Card.Text>
				<Card.Text as='div'>
					data current as of: {product.dateInventory}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
