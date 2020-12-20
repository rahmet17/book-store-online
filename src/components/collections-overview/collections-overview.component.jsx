import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const CollectionsOverview = ({ collections, sections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} sections={sections} sectionsId={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(CollectionsOverview);
