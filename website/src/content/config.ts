import { z, defineCollection } from 'astro:content';

const reviews = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        cover: z.optional(image()),
        ratings: z.object({
            vibe: z.number().gt(0).lte(5),
            taste: z.number().gt(0).lte(5),
            rarity: z.number().gt(0).lte(5),
            value: z.number().gt(0).lte(5),
        }),
        location: z.object({
            title: z.string(),
            link: z.url(),
        }),
        draft: z.boolean(),
    })
})

export const collections = {
    reviews
}