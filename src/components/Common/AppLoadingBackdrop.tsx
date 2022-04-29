import { useEffect } from 'react';

export default function AppLoadingBackdrop() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

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
