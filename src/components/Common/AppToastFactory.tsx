import { useAppDispatch, useAppSelector } from '../../store';
import { removeToast, Toast } from '../../store/slices/Layout';

export default function AppToastFactory() {
  const { toasts } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const handleClearToast = (el: Toast) => {
    dispatch(removeToast(el));
  };

  return (
    <div id="toast-container" className="toast-container position-fixed bottom-0 end-0 p-3">
      { toasts.map((el) => (
        <div
          key={`toast-item-${el.message}`}
          className="toast show align-items-center"
          role="alert"
          data-bs-autohide="false"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="">
            <div className="d-flex">
              <div className="toast-body">
                {el.message}
              </div>
              <button
                type="button"
                className="btn-close me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
                onClick={() => handleClearToast(el)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
