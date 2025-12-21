import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const useSanity = () => {
  const config = useRuntimeConfig();

  // Validate configuration
  if (!config.public.sanityProjectId || !config.public.sanityDataset) {
    console.error("Sanity configuration missing:", {
      projectId: config.public.sanityProjectId,
      dataset: config.public.sanityDataset,
    });

    return {
      client: null,
      urlFor: () => "",
      config: null,
      fetch: async () => null,
      isConfigured: false,
    };
  }

  const clientConfig = {
    projectId: config.public.sanityProjectId,
    dataset: config.public.sanityDataset,
    useCdn: true,
    apiVersion: "2024-01-01",
  };

  const client = createClient(clientConfig);
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => {
    if (!source) return "";
    return builder.image(source);
  };

  // Add a fetch wrapper with error handling
  const fetch = async (query, params = {}) => {
    try {
      const data = await client.fetch(query, params);
      return data;
    } catch (error) {
      console.error("Sanity fetch error:", error);
      return null;
    }
  };

  return {
    client,
    urlFor,
    config: clientConfig,
    fetch,
    isConfigured: true,
  };
};
