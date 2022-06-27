import { useRouter } from 'next/router';
import AppBanner from '../../src/components/Common/AppBanner';

function GuidesArticle() {
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

export default GuidesArticle;
