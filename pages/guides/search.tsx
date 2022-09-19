import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';

import GuideSearchBar from '@/components/Guides/GuideSearchBar';
import AppBanner from '@/components/Common/AppBanner';

import { GuideArticleOverview, IGuideArticleKeys } from '@/core/Guides/types/IGuideArticle';
import { FilterKeysNames, MetaKeysNames } from '@/core/Database/types/meta';
import GuideArticle from '@/core/Guides/Guide';

import { useAppDispatch } from '@/store';
import { mutateCurrentGuideQuery } from '@/store/slices/Guides';

import { AppRoutesNames, AppRoutesRecord } from '@/constants/AppLinks';

type GuideSearchPageProps = {
  search: string;
  guideList: GuideArticleOverview[]
}

export default function GuideSearchPage({
  search,
  guideList,
}: GuideSearchPageProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(mutateCurrentGuideQuery(search));
  }, []);

  return (
    <>
      <Head>
        <title>
          Refuge HULMAN -
          Découvrez nos différents guide pour faciliter votre arrivée
          et votre séjour à Marie-Galante!
        </title>
        <meta name="description" content="" />
        <meta
          name="title"
          content="Refuge HULMAN -
          Découvrez nos différents guide pour faciliter votre arrivée et votre séjour à Marie-Galante!"
        />
      </Head>
      <AppBanner
        size="L"
        title="Un titre de test pour l'instant"
        breadcrumbs={[
          AppRoutesRecord[AppRoutesNames.HOME],
          AppRoutesRecord[AppRoutesNames.GUIDE_LANDING],
        ]}
      />
      <GuideSearchBar />

      <section className="container">
        <h2 className="mt-25">
          <b>
            {`${guideList.length} `}
          </b>
          Résultats pour:
          <b>
            {` ${search}`}
          </b>
        </h2>

        <div className="col-lg-10 mt-5 mx-auto">
          { guideList.length === 0
            ? <div> Nothing found </div> : (
              <>
                {guideList.map((guide) => (
                  <Link href={`/guides/${guide[FilterKeysNames.FILTER_KEY]}`}>
                    <a className="row">
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={guide[IGuideArticleKeys.PREVIEW_IMAGE]}
                              className="img-fluid rounded-start"
                              alt={guide[IGuideArticleKeys.NAME]}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">{guide[IGuideArticleKeys.NAME]}</h5>

                              <p className="card-text">
                                {guide[IGuideArticleKeys.DESCRIPTION]}
                              </p>

                              <p className="card-text">
                                <small className="text-muted">
                                  {guide[MetaKeysNames.CREATED_AT]}
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>

                ))}
              </>
            )}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const guideList = query?.search
    ? await (await new GuideArticle().searchGuideArticlesByName(query.search as string)).Items
    : [];

  return {
    props: {
      guideList,
      search: query.search as string ?? '',
    },
  };
}
