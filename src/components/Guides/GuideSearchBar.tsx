import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '@/store';
import { fetchGuideList, mutateCurrentGuideQuery } from '@/store/slices/Guides';
import { createToast } from '@/store/slices/Layout';

import AppAutoComplete from '@/components/Common/AppAutoComplete';
import AppLoadingBackdrop from '@/components/Common/AppLoadingBackdrop';

import { IGuideArticleKeys } from '@/core/Guides/types/IGuideArticle';
import { FilterKeysNames, MetaKeysNames } from '@/core/Database/types/meta';

import ProjectConfig from '@/utils/ProjectConfig';

import { AppRoutesNames, AppRoutesRecord } from '@/constants/AppLinks';

export default function GuideSearchBar() {
  const { push } = useRouter();
  const {
    currentQuery,
    isGuideListFetching,
    guideList,
  } = useAppSelector((state) => state.guides);
  const [searchTimer, setSearchTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const dispatch = useAppDispatch();

  const handleGuideSearch = async () => {
    try {
      await dispatch(fetchGuideList(currentQuery));
    } catch (e) {
      dispatch(createToast({
        type: 'error',
        message: (e as Error).message,
      }));
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentQuery !== '') {
      push(`${AppRoutesRecord[AppRoutesNames.GUIDE_SEARCH].url}?search=${currentQuery}`);
    }
  };

  const handleGuideQueryChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => (
    dispatch(mutateCurrentGuideQuery(currentTarget.value))
  );

  useEffect(() => {
    if (searchTimer) {
      clearTimeout(searchTimer);
      setSearchTimer(null);
    }

    if (currentQuery !== '') {
      setSearchTimer(setTimeout(() => {
        handleGuideSearch();
      }, ProjectConfig.INPUT_TIMEOUT_DURATION));
    }
  }, [currentQuery]);

  return (
    <>
      {isGuideListFetching && <AppLoadingBackdrop />}
      <section className="container">
        <div className="booking_area bg-primary bg-gradient rounded">
          <form onSubmit={handleFormSubmit}>
            <div className="row py-5">
              <div className="col col-md-10 mx-auto">
                <div className="row">
                  <div className="col col-md-10 mx-auto">
                    <AppAutoComplete
                      placeholder="Trouvez un guide"
                      value={currentQuery}
                      items={guideList.map((el) => ({
                        url: `/guides/${el[FilterKeysNames.FILTER_KEY]}`,
                        name: el[IGuideArticleKeys.NAME],
                        description: el[IGuideArticleKeys.DESCRIPTION],
                        info: el[MetaKeysNames.CREATED_AT] as string,
                      }))}
                      onChange={handleGuideQueryChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
