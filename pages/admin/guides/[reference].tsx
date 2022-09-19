import { GetServerSidePropsContext } from 'next';

import GuideArticle from '@/core/Guides/Guide';
import { IGuideArticle, IGuideArticleKeys } from '@/core/Guides/types/IGuideArticle';

import GuideManagerForm, { emptyGuide, GuideManagerFormProps } from '@/components/Forms/GuideManagerForm';

export default function AdminGuideUpdatePage({ initialGuide }: GuideManagerFormProps) {
  return (
    <GuideManagerForm initialGuide={initialGuide} />
  );
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const initialGuide: IGuideArticle = params?.reference
    ? (await new GuideArticle().get(params.reference as string)).Item as IGuideArticle
    : { ...emptyGuide };

  return {
    props: {
      initialGuide: {
        ...initialGuide,
        [IGuideArticleKeys.CONTENT]: [
          ...Array.isArray(initialGuide[IGuideArticleKeys.CONTENT]) ? initialGuide[IGuideArticleKeys.CONTENT] : [],
        ],
      },
    },
  };
}
