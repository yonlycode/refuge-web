import AppBanner from '@/components/Common/AppBanner';
import { AppRoutesNames, AppRoutesRecord } from '@/constants/AppLinks';
import GuideArticle from '@/core/Guides/Guide';
import { GuideContent, GuideContentType } from '@/core/Guides/types/GuideContent';
import { IGuideArticle, IGuideArticleKeys } from '@/core/Guides/types/IGuideArticle';
import { GetServerSidePropsContext } from 'next';

type GuideArticlePageProps = {
  guide: IGuideArticle,
}

function GuidesArticlePage({
  guide,
}: GuideArticlePageProps) {
  return (
    <>
      <AppBanner
        size="S"
        title={guide[IGuideArticleKeys.NAME]}
        breadcrumbs={[
          AppRoutesRecord[AppRoutesNames.HOME],
          AppRoutesRecord[AppRoutesNames.GUIDE_LANDING],
        ]}
      />

      <section className="container">

        {guide[IGuideArticleKeys.CONTENT].map((el: GuideContent) => {
          switch (el.type) {
            case GuideContentType.PHOTO:
              return (
                <>
                  Type PHOTO
                </>
              );

            case GuideContentType.PLAIN_TEXT:
              return (
                <>
                  Type PLAIN_TEXT
                </>
              );

            case GuideContentType.TEXT_WITH_PHOTO:
              return (
                <>
                  Type TEXT_WITH_PHOTO
                </>
              );

            case GuideContentType.VIDEO:
              return (
                <>
                  Type VIDEO
                </>
              );

            default:
              return (
                <>
                  Type Inconnu
                </>
              );
          }
        })}

      </section>
    </>
  );
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const guide = params?.ref
    ? (await new GuideArticle().get(params.ref as string)).Item
    : [];

  return {
    props: {
      guide,
    },
  };
}
export default GuidesArticlePage;
