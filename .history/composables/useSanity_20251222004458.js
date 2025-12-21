import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const useSanity = () => {
  const config = useRuntimeConfig();

  // Fallback to hardcoded value if env var not available
  const projectId = config.public.sanityProjectId || "qou9fxfh";
  const dataset = config.public.sanityDataset || "production";

  console.log("Sanity Config Debug:", { projectId, dataset });

  const clientConfig = {
    projectId,
    dataset,
    useCdn: true,
    apiVersion: "2024-01-01",
  };

  const client = createClient(clientConfig);
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => {
    if (!source) return "";
    return builder.image(source);
  };

  const fetch = async (query, params = {}) => {
    try {
      const data = await client.fetch(query, params);
      console.log("Sanity fetch result:", data); // Debug log
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
    isConfigured: true, // Always true now
  };
};
