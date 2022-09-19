import { ChangeEvent, FormEvent, useState } from 'react';

import { IGuideArticle, IGuideArticleKeys } from '@/core/Guides/types/IGuideArticle';
import { GuideMetaKeys } from '@/core/Guides/types/GuideMeta';
import { GuideContent, GuideContentKeys, GuideContentType } from '@/core/Guides/types/GuideContent';
import AppLoadingBackdrop from '@/components/Common/AppLoadingBackdrop';
import axios from 'axios';
import { useRouter } from 'next/router';

export type GuideManagerFormProps = {
  initialGuide?: IGuideArticle
}

export const emptyGuide: IGuideArticle = {
  [IGuideArticleKeys.META]: {
    [GuideMetaKeys.NAME]: '',
    [GuideMetaKeys.DESCRIPTION]: '',
    [GuideMetaKeys.KEYWORDS]: '',
    [GuideMetaKeys.READ_TIMES]: 0,
  },
  [IGuideArticleKeys.NAME]: '',
  [IGuideArticleKeys.HOT_GUIDE]: false,
  [IGuideArticleKeys.TITLE]: '',
  [IGuideArticleKeys.DESCRIPTION]: '',
  [IGuideArticleKeys.PREVIEW_IMAGE]: '',
  [IGuideArticleKeys.CONTENT]: [],
};

export const emptyGuideContent: GuideContent = {
  [GuideContentKeys.TYPE]: GuideContentType.PLAIN_TEXT,
  [GuideContentKeys.TEXT]: '',
  [GuideContentKeys.URL]: '',
};

export default function GuideManagerForm({ initialGuide }: GuideManagerFormProps) {
  const [guide, setGuide] = useState<IGuideArticle>(initialGuide ?? { ...emptyGuide });
  const [selectedContentEditing, setSelectedContentEditing] = useState<number>(0);
  const [isFormSending, setIsFormSending] = useState<boolean>(true);
  const { query } = useRouter();

  const currentEditingContent: GuideContent | undefined = guide[IGuideArticleKeys.CONTENT][selectedContentEditing];
  const isEditingGuide = !!initialGuide;

  const handleContentChange = ({ currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGuide((prev) => {
      const newValue = { ...prev };
      newValue[IGuideArticleKeys.CONTENT][selectedContentEditing] = {
        ...newValue[IGuideArticleKeys.CONTENT][selectedContentEditing],
        [currentTarget.name]: currentTarget.value,
      };

      return newValue;
    });
  };
  const handleCreateNewGuideContent = () => {
    setGuide((prev) => ({
      ...prev,
      [IGuideArticleKeys.CONTENT]: [
        ...prev[IGuideArticleKeys.CONTENT],
        {
          ...emptyGuideContent,
        },
      ],
    }));
    setSelectedContentEditing(guide.content.length);
  };
  const handleGeneralInformationChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setGuide((prev) => ({
      ...prev,
      [currentTarget.name]: currentTarget.type !== 'checkbox' ? currentTarget.value : currentTarget.checked,
    }));
  };
  const handleMetadataChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setGuide((prev) => ({
      ...prev,
      [IGuideArticleKeys.META]: {
        ...prev[IGuideArticleKeys.META],
        [currentTarget.name]: currentTarget.value,
      },
    }));
  };
  const handlePostNewGuide = async () => axios.post('/api/guides', guide);
  const handleEditGuide = async () => axios.put(`/api/guides/${query?.reference}`, guide);
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSending(true);
    try {
      if (isEditingGuide) {
        await handleEditGuide();
      } else {
        await handlePostNewGuide();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsFormSending(false);
    }
  };

  const isContentInputVisible = (type: GuideContentType) => (
    [GuideContentType.PLAIN_TEXT, GuideContentType.TEXT_WITH_PHOTO]
      .includes(type)
  );
  const isUrlInputVisible = (type: GuideContentType) => (
    currentEditingContent
    && [GuideContentType.VIDEO, GuideContentType.PHOTO, GuideContentType.TEXT_WITH_PHOTO]
      .includes(type)
  );
  return (
    <section className="container section_gap_top ">

      <form className="row gy-3" onSubmit={handleFormSubmit}>

        <div className="card px-0 py-0">
          {isFormSending && <AppLoadingBackdrop />}

          <div className="card-header">
            Informations Générales
          </div>
          <div className="card-body row">
            <div className="col-md-6">
              <label className="form-label d-block">
                Nom du guide:
                <input
                  type="text"
                  className="form-control"
                  name={IGuideArticleKeys.NAME}
                  value={guide[IGuideArticleKeys.NAME]}
                  onChange={handleGeneralInformationChange}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label className="form-label d-block">
                Titre de la page:
                <input
                  type="text"
                  className="form-control"
                  name={IGuideArticleKeys.TITLE}
                  value={guide[IGuideArticleKeys.TITLE]}
                  onChange={handleGeneralInformationChange}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label className="form-label d-block">
                Description du guide:
                <input
                  type="text"
                  className="form-control"
                  name={IGuideArticleKeys.DESCRIPTION}
                  value={guide[IGuideArticleKeys.DESCRIPTION]}
                  onChange={handleGeneralInformationChange}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label className="form-label d-block">
                Image de preview:
                <input
                  type="text"
                  className="form-control"
                  name={IGuideArticleKeys.PREVIEW_IMAGE}
                  value={guide[IGuideArticleKeys.PREVIEW_IMAGE]}
                  onChange={handleGeneralInformationChange}
                />
              </label>
            </div>
            <div className="col-md-12 mt-2">
              <div className="form-check form-switch">
                <label className="form-check-label d-block">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={IGuideArticleKeys.HOT_GUIDE}
                    checked={guide[IGuideArticleKeys.HOT_GUIDE]}
                    onChange={handleGeneralInformationChange}
                  />
                  Mettre en avant le guide
                </label>
              </div>

            </div>
          </div>
        </div>

        <div className="card px-0 py-0">
          <div className="card-header">
            Contenu
          </div>
          <div className="card-body row">
            <div className="d-flex justify-content-center align-items-center flex-column ">

              {currentEditingContent && (
              <div className="col-md-12 d-flex justify-content-center align-items-center mb-3">
                <div className="btn-group btn-group" role="group" aria-label="...">
                  {Object.values(GuideContentType).map((el: GuideContentType) => (
                    <button
                      type="button"
                      className={`btn btn-outline-primary ${currentEditingContent[GuideContentKeys.TYPE] === el
                        ? 'active' : ''}`}
                      onClick={() => {
                        setGuide((prev) => {
                          const newValue = { ...prev };
                          newValue[IGuideArticleKeys.CONTENT][selectedContentEditing] = {
                            ...newValue[IGuideArticleKeys.CONTENT][selectedContentEditing],
                            [GuideContentKeys.TYPE]: el,
                          };
                          return newValue;
                        });
                      }}
                      key={`${el}-select-option`}
                    >
                      {el}
                    </button>
                  ))}
                </div>
              </div>
              )}

              {currentEditingContent
                  && isContentInputVisible(currentEditingContent[GuideContentKeys.TYPE]) && (
                    <div className="col-md-12 mb-1">
                      <label className="form-label d-block">
                        Contenue :
                        <textarea
                          rows={5}
                          className="form-control"
                          name={GuideContentKeys.TEXT}
                          value={currentEditingContent[GuideContentKeys.TEXT]}
                          onChange={handleContentChange}
                        />
                      </label>
                    </div>
              )}

              {currentEditingContent
                  && isUrlInputVisible(currentEditingContent[GuideContentKeys.TYPE]) && (
                    <div className="col-md-12">
                      <label className="form-label d-block">
                        lien de la ressource:
                        <input
                          type="text"
                          className="form-control"
                          name={GuideContentKeys.URL}
                          value={currentEditingContent[GuideContentKeys.URL]}
                          onChange={handleContentChange}
                        />
                      </label>
                    </div>
              )}

              <ol className="list-group list-group-numbered w-100 mt-3">
                {guide[IGuideArticleKeys.CONTENT].map(({
                  type,
                  text,
                  url,
                }: GuideContent, index: number) => (
                  <li
                    className={`list-group-item d-flex justify-content-between align-items-start${index === selectedContentEditing ? ' active' : ''}`}
                    key={`guide-content-trigger-${index + 1}`}
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{type}</div>
                      {isContentInputVisible(type) && (
                      <div>
                        {text?.slice(0, 80)}
                        {text?.length !== 0 ? '...' : 'vide'}
                      </div>
                      )}
                      {isUrlInputVisible(type) && (
                      <div className="fw-bold">
                        {url}
                      </div>
                      )}
                    </div>
                    <button
                      type="button"
                      disabled={index === selectedContentEditing}
                      onClick={() => setSelectedContentEditing(index)}
                      className={`badge bg-${index === selectedContentEditing ? 'bg-light text-dark' : 'primary'}`}
                    >
                      modifier
                    </button>
                  </li>
                ))}
              </ol>

              <div className="row">
                <button
                  type="button"
                  className="btn btn-outline-primary mt-3"
                  onClick={handleCreateNewGuideContent}
                >
                  Ajouter un contenue
                </button>
              </div>

            </div>

          </div>
        </div>

        <div className="card px-0 py-0">
          <div className="card-header">
            Métadonnées
          </div>
          <div className="card-body row">
            <div className="col-md-6">
              <label className="form-label d-block">
                Nom:
                <input
                  type="text"
                  className="form-control"
                  name={GuideMetaKeys.NAME}
                  value={guide[IGuideArticleKeys.META][GuideMetaKeys.NAME]}
                  onChange={handleMetadataChange}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label className="form-label d-block">
                Description:
                <input
                  type="text"
                  className="form-control"
                  name={GuideMetaKeys.DESCRIPTION}
                  value={guide[IGuideArticleKeys.META][GuideMetaKeys.DESCRIPTION]}
                  onChange={handleMetadataChange}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label className="form-label d-block">
                Mot clés:
                <input
                  type="text"
                  className="form-control"
                  name={GuideMetaKeys.KEYWORDS}
                  value={guide[IGuideArticleKeys.META][GuideMetaKeys.KEYWORDS]}
                  onChange={handleMetadataChange}
                />
              </label>
            </div>
            <div className="col-md-6">
              <label className="form-label d-block">
                Temps de lecture:
                <input
                  type="number"
                  className="form-control"
                  name={GuideMetaKeys.READ_TIMES}
                  value={guide[IGuideArticleKeys.META][GuideMetaKeys.READ_TIMES]}
                  onChange={handleMetadataChange}
                />
              </label>
            </div>
          </div>
        </div>

        <div
          className={`d-flex align-items-center ${isEditingGuide ? 'justify-content-between' : 'justify-content-center'}`}
        >
          {isEditingGuide && (
          <button type="submit" className="btn btn-danger">
            Supprimer le guide
          </button>
          )}
          <button type="submit" className="btn btn-primary">
            {isEditingGuide ? 'Modifier ' : 'Sauvegarder '}
            le guide
          </button>
        </div>
      </form>
    </section>
  );
}
