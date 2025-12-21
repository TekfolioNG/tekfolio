import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const useSanity = () => {
  const config = useRuntimeConfig();

  // TEMPORARY: Hardcode your Sanity credentials here
  const projectId = config.public.sanityProjectId || "YOUR_ACTUAL_PROJECT_ID"; // ← Put your real project ID here
  const dataset = config.public.sanityDataset || "production";

  console.log("Sanity Config Debug:", { projectId, dataset }); // Debug log

  // Validate configuration
  if (!projectId || projectId === "YOUR_ACTUAL_PROJECT_ID") {
    console.error("Sanity configuration missing:", {
      projectId,
      dataset,
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
