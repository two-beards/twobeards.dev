import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		category: z.enum(["apps", "design-dev", "for-the-people"]),
		blurb: z.string(),
		url: z.string().url().optional(),
		status: z.enum(["live", "beta", "retired"]).default("live"),
		order: z.number().default(99),
		image: z.string().optional(),
	}),
});

export const collections = { projects };
