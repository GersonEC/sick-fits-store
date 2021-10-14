import { useRouter } from 'next/dist/client/router';
import Checkout from '../../components/Checkout';
import Pagination from '../../components/Pagination';
import { Products as ProductsComp } from '../../components/Products';

export default function Products() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Pagination page={page || 1} />
      <Checkout />
      <ProductsComp page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}
