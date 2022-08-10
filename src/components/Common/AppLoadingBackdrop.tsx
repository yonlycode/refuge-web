import { useAppSelector } from '@/store';
import { useEffect } from 'react';

export default function AppLoadingBackdrop() {
  const { isAppLoading } = useAppSelector((state) => state.layout);

  useEffect(() => {
    if (isAppLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isAppLoading]);

  if (!isAppLoading) {
    return (<div />);
  }

  return (
    <div id="backdrop">
      <div className="text-center loading">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
