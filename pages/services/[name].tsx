import { useRouter } from 'next/router';
import AppBanner from '../../src/components/AppBanner';

export default function ServicesArticle() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <AppBanner size="S" />
      <p>
        Post:
        { name }
      </p>
    </>
  );
}
