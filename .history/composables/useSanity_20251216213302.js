import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const useSanity = () => {
  const config = useRuntimeConfig();

  const clientConfig = {
    projectId: config.public.sanityProjectId,
    dataset: config.public.sanityDataset,
    useCdn: true,
    apiVersion: "2024-01-01",
  };

  const client = createClient(clientConfig);
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => {
    return builder.image(source);
  };

  return {
    client,
    urlFor,
    config: clientConfig,
  };
};
