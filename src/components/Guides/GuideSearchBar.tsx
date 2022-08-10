import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { fetchGuideList, mutateCurrentGuideQuery } from '@/store/slices/Guides';

import AppAutoComplete from '@/components/Common/AppAutoComplete';
import AppLoadingBackdrop from '@/components/Common/AppLoadingBackdrop';

import ProjectConfig from '@/utils/ProjectConfig';

export default function GuideSearchBar() {
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
      console.log(e);
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
                        url: el.meta.url,
                        name: el.guide_name,
                        description: el.description,
                        info: el.created_at!,
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
