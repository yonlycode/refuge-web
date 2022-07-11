import React, { useCallback, useEffect, useRef } from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from '../store';
import {
  FetchGallery,
  mutateLightboxCurrentIndex,
  mutateLightboxState,
} from '../store/slices/Gallery';

export default function GalleryLightBox() {
  const gallery = useAppSelector((state) => state.gallery);
  const dispatch = useAppDispatch();
  const imageRef = useRef<HTMLImageElement>(null);

  const { data } = gallery;
  const { currentIndex, isLightboxShown } = gallery.lightbox;
  const currentItemShowed = data[gallery.lightbox.currentIndex];

  const handleCloseLightBox = () => {
    dispatch(mutateLightboxState(false));
  };

  const handleShowNext = useCallback(async () => {
    const nextItem = currentIndex + 1;
    if (!data[nextItem]) {
      if (gallery.pagination?.hasNextPage) {
        await dispatch(FetchGallery());
      } else {
        dispatch(mutateLightboxCurrentIndex(0));
        return;
      }
    }
    dispatch(mutateLightboxCurrentIndex(nextItem));
  }, [currentIndex, dispatch, data]);

  const handleShowLast = useCallback(() => {
    if (currentIndex <= 0) {
      dispatch(mutateLightboxCurrentIndex(data.length - 1));
      return;
    }
    dispatch(mutateLightboxCurrentIndex(currentIndex - 1));
  }, [currentIndex, dispatch, data]);

  /*
  useEffect(() => {
     TODO - fix this
    function handleKeyboardBinding(event: KeyboardEvent) {
      if (event?.code === 'ArrowRight') {
        handleShowNext();
      }
      if (event?.code === 'ArrowLeft') {
        handleShowLast();
      }
    }

    const handleClickOutsideImage = (event: MouseEvent) => {
      // TODO - Not working
      if (
        imageRef.current
        && isLightboxShown
        && (imageRef.current as HTMLElement)?.contains(event?.currentTarget as Node)
      ) {
        handleCloseLightBox();
      }
    };

    // window?.addEventListener('keydown', handleKeyboardBinding);
    document?.addEventListener('click', handleClickOutsideImage);

    return () => {
      dispatch(mutateLightboxState(false));
    };
  }, []);
  */

  useEffect(() => {
    if (!currentItemShowed) {
      dispatch(mutateLightboxState(false));
    }
  }, [currentItemShowed]);

  return (
    <div
      id="galleryLightBox"
      className="modal"
      style={{ display: isLightboxShown ? 'block' : 'none' }}
    >
      <span className="close cursor">
        <a
          href="#"
          onClick={handleCloseLightBox}
        >
          &times;
        </a>
      </span>

      { currentItemShowed && (
      <div
        className="modal-content"
      >
        <div
          className="mySlides"
        >
          <div className="numbertext">
            {`${currentIndex + 1} / ${gallery.pagination?.totalDocs ?? 0}`}
          </div>
          <img
            ref={imageRef}
            alt={currentItemShowed.alt}
            src={currentItemShowed.url}
          />
        </div>
        <a
          className="prev"
          onClick={handleShowLast}
          href="#"
        >
          &#10094;
        </a>
        <a
          className="next"
          onClick={handleShowNext}
          href="#"
        >
          &#10095;
        </a>

        <br />
        <br />
        <br />
        <br />

        <div className="caption-container">
          <p id="caption">
            {currentItemShowed.alt}
          </p>
        </div>
      </div>
      )}
    </div>
  );
}
