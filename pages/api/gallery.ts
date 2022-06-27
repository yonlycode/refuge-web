import { NextApiRequest, NextApiResponse } from 'next';

import { GalleryTags } from '../../src/core/Gallery/Gallery';
import Paginate from '../../src/core/Pagination/Paginate';

interface GalleryRequest extends NextApiRequest {
    query: {
      tags?: GalleryTags;
      page?: string;
      perPage?: string;
    }
}

export default async function gallery(
  req: GalleryRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(500).send('method not implemented');
  }

  const { tags, page, perPage } = req.query;

  const rawGallery = (await import('../../src/constants/Gallery')).default;

  const filteredGallery = (req.query.tags
    ? rawGallery.filter((el) => tags === el.tags)
    : rawGallery)
    .sort((a, b) => b.meta.weight - a.meta.weight);

  const paginatedGallery = Paginate(filteredGallery, page, perPage);

  return res.status(200).send(paginatedGallery);
}
