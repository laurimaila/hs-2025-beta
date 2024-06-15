import type { SinglePageContent } from '$lib/types/content';

const getPageBySlug = async (slug: string): Promise<SinglePageContent> => {
    try {
        const response = await fetch(`/pages?slug=${slug}&acf_format=standard`);

        // Check if the response status is OK
        if (!response.ok) {
            throw new Error(`Error fetching page by slug: ${response.statusText}`);
        }

        const data = await response.json();
        const pageData = data.length > 0 ? data[0] : null;

        const returnPageData: SinglePageContent = {
            title: pageData.title.rendered,
            contentHTML: pageData.content.rendered,
            bannerUrl: pageData.acf.banner_image,
        }

        return returnPageData
    } catch (error) {
        console.error('Failed to fetch page data:', error);
        return null;
    }
}

export { getPageBySlug }