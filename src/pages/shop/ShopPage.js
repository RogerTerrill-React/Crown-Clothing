import React, { useState } from 'react';
import SHOP_DATA from '../../helpers/shopData.json';
import CollectionPreview from '../../components/CollectionPreview';

const ShopPage = () => {
	const INTIAL_STATE = SHOP_DATA;

	const [collections, setCollections] = useState(INTIAL_STATE);
	return (
		<div className='shop-page'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default ShopPage;
