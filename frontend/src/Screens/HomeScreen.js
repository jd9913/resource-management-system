import React from "react";
import products from "../private/master_inventory";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
	return (
		<>
			<h1>Available products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product.dataid} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
