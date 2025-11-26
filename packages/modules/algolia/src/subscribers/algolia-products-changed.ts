import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";

import { ALGOLIA_MODULE, AlgoliaModuleService } from "../modules/algolia";
import { AlgoliaEvents, IndexType } from "@mercurjs/framework";

import {
  filterProductsByStatus,
  findAndTransformAlgoliaProducts,
} from "../subscribers/utils";

export default async function algoliaProductsChangedHandler({
  event,
  container,
}: SubscriberArgs<{ ids: string[] }>) {
  try {
    console.log(`[Algolia Subscriber] Processing ${event.data.ids.length} product(s)...`)
    
    const algolia = container.resolve<AlgoliaModuleService>(ALGOLIA_MODULE);

    const { published, other } = await filterProductsByStatus(
      container,
      event.data.ids
    );

    console.log(`[Algolia Subscriber] Published: ${published.length}, Other: ${other.length}`)

    const productsToInsert = published.length
      ? await findAndTransformAlgoliaProducts(container, published)
      : [];

    console.log(`[Algolia Subscriber] Transformed ${productsToInsert.length} products for indexing`)

    await algolia.batch(IndexType.PRODUCT, productsToInsert, other);
    
    console.log(`[Algolia Subscriber] ✅ Successfully synced to Algolia`)
  } catch (error) {
    console.error(`[Algolia Subscriber] ❌ ERROR:`, error)
    console.error(`[Algolia Subscriber] Error details:`, {
      message: error.message,
      stack: error.stack,
      name: error.name,
    })
    throw error
  }
}

export const config: SubscriberConfig = {
  event: AlgoliaEvents.PRODUCTS_CHANGED,
  context: {
    subscriberId: "algolia-products-changed-handler",
  },
};
