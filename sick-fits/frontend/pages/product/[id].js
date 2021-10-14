import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
